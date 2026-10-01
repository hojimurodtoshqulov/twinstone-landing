export const META_PIXEL_ID = "1310050091133980";

type MetaEvent = "PageView" | "Lead" | "Contact";

declare global {
  interface Window {
    fbq?: (command: "track" | "init", event: string, params?: Record<string, unknown>) => void;
  }
}

/** Sends a standard Meta Pixel event; a no-op until the pixel script has loaded (or if it's blocked). */
export function trackMetaEvent(event: MetaEvent) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event);
  }
}
