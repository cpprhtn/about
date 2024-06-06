import Image from "next/image";
import Link from "next/link";
import LinkIcon from "@lery/icons/LinkIcon.svg";

type Props = {
  title?: string;
  subtitle?: string;
  url?: string;
  children?: React.ReactNode;
};

export default function ActivityItemContainer({
  title,
  subtitle,
  url,
  children,
}: Props) {
  return (
    <article>
      {title &&
        (url ? (
          <Link
            href={url}
            className="mt-4 mb-1 underline underline-offset-4 text-black hover:text-black/60 block"
          >
            <h2 className="text-2xl font-normal break-keep m-0 inline">
              {title}
            </h2>
            <Image className="ml-1" alt="link icon" src={LinkIcon} width={16} />
          </Link>
        ) : (
          <h2 className="text-2xl font-normal mt-4 mb-1 break-keep">{title}</h2>
        ))}
      {subtitle && (
        <h3 className="text-base font-normal mt-1 mb-1 text-gray-400 break-keep">
          {subtitle}
        </h3>
      )}
      {children}
    </article>
  );
}
