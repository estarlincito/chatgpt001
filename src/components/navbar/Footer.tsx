const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-xs text-center pb-2">
      <p>
        &nbsp; Copyright © {date.getFullYear()}&nbsp;
        <a
          href="https://linktr.ee/estarlincito"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:text-slate-300 active:text-slate-500 duration-500"
        >
          Estarlincito
        </a>
      </p>
    </footer>
  );
};

export default Footer;
