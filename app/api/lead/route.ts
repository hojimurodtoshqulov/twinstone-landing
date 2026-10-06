import { resources } from "@/lib/i18n/resources";

// Leads are always delivered in Uzbek, whatever language the visitor used.
const labels = resources.uz.translation.leadForm;

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_IDS ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) {
    console.error("Lead form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_IDS is not set");
    return Response.json({ ok: false }, { status: 500 });
  }

  let body: {
    name?: unknown;
    phone?: unknown;
    productType?: unknown;
    objectType?: unknown;
    area?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 100) : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const productType = labels.productTypes[Number(body.productType)];
  const objectType = labels.objectTypes[Number(body.objectType)];
  const area = labels.areaOptions[Number(body.area)];

  if (!name || phone.replace(/\D/g, "").length !== 12 || !productType || !objectType || !area) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const text = [
    "<b>Twinstonegranit - sayt:</b>",
    "",
    `<b>${labels.nameLabel}:</b> ${escapeHtml(name)}`,
    `<b>${labels.phoneLabel}:</b> ${escapeHtml(phone)}`,
    `<b>${labels.productTypeLegend}:</b> ${productType}`,
    `<b>${labels.objectTypeLegend}:</b> ${objectType}`,
    `<b>${labels.areaLegend}:</b> ${area}`,
  ].join("\n");

  const results = await Promise.allSettled(
    chatIds.map(async (chatId) => {
      const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
      });
      if (!res.ok) throw new Error(`chat ${chatId}: ${res.status} ${await res.text()}`);
    }),
  );

  const failed = results.filter((r): r is PromiseRejectedResult => r.status === "rejected");
  failed.forEach((r) => console.error("Lead form: Telegram send failed", r.reason));

  // The lead counts as delivered if at least one chat received it.
  if (failed.length === chatIds.length) {
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
