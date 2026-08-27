export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          onDark ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            onDark ? "text-white/65" : "text-stone-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
