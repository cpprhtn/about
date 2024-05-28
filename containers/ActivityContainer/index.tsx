type Props = {
  title?: string;
  children?: React.ReactNode;
};

export default function ActivityContainer({ title, children }: Props) {
  return (
    <section>
      {title && <h1 className="text-4xl font-bold">{title}</h1>}
      {children}
    </section>
  );
}
