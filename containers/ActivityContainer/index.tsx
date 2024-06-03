type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function ActivityContainer({ title, children }: Props) {
  return (
    <section>
      {title && <h1 className="text-4xl font-bold mt-8 mb-2">{title}</h1>}
      {children}
    </section>
  );
}
