const Author = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <footer className="text-xs text-center pb-2">
      <p>
        &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
        &nbsp;
        <a
          href="https://linktr.ee/estarlincito"
          target="_blank"
          rel="noreferrer"
          className="font-bold duration-500 hover:text-slate-300 active:text-slate-500"
        >
          Estarlincito
        </a>
      </p>
    </footer>
  );
};

export default Author;
