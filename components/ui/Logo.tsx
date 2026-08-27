import Image from "next/image";

export default function Logo({
  className = "h-8 w-auto sm:h-9",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/twinstone-logo.png"
      alt="Twinstone"
      width={441}
      height={251}
      priority={priority}
      className={className}
    />
  );
}
