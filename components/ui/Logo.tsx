import Image from "next/image";

const variants = {
  /** Dark wordmark for light backgrounds (header). */
  dark: { src: "/images/twinstone-logo.png", width: 441, height: 251 },
  /** White wordmark for dark backgrounds (footer). */
  light: { src: "/images/twinstone-logo-white.png", width: 437, height: 250 },
};

export default function Logo({
  className = "h-8 w-auto sm:h-9",
  priority = false,
  variant = "dark",
}: {
  className?: string;
  priority?: boolean;
  variant?: keyof typeof variants;
}) {
  const { src, width, height } = variants[variant];
  return (
    <Image
      src={src}
      alt="Twinstone"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
