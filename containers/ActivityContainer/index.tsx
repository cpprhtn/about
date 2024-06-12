type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function ActivityContainer({ title, children }: Props) {
  return (
    <section className="mt-16">
      {title && <h1 className="text-4xl font-bold mb-2">{title}</h1>}
      {children}
    </section>
  );
}
