interface Props {
  title: string;
}

export default function LoadingScreen({ title }: Props) {
  return (
    <section className="pb-24 pt-10 flex items-center justify-center relative">
      <div className="lightsaber">
        <label htmlFor="yoda-example"></label>
        <input type="checkbox" id="yoda-example" />
        <div className="switch"></div>
        <div className="plasma yoda"></div>
      </div>
      <h2 className="mt-24">{title}</h2>
    </section>
  );
}
