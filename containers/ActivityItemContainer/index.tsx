type Props = {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function ActivityItemContainer({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <section>
      {title && (
        <h2 className="text-2xl font-normal mt-4 mb-1 break-keep">{title}</h2>
      )}
      {subtitle && (
        <h3 className="text-base font-normal mt-1 mb-1 text-gray-400 break-keep">
          {subtitle}
        </h3>
      )}
      {children}
    </section>
  );
}
