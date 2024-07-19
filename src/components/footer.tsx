const Copyright = () => {
  const currentYear = () => new Date().getFullYear();

  return <p>© {currentYear()} Toad Balancer</p>;
};

const MadeWith = () => {
  return (
    <p>
      Made with{" "}
      <a
        className="underline font-bold decoration-from-font decoration-solid	decoration-gray-300"
        href="https://react.dev/"
      >
        React
      </a>
      ,{" "}
      <a
        className="underline font-bold decoration-from-font	decoration-solid decoration-gray-300"
        href="https://tailwindcss.com/"
      >
        TailwindCSS
      </a>
      ,{" "}
      <a
        className="underline font-bold decoration-from-font decoration-solid	decoration-gray-300"
        href="https://parceljs.org/"
      >
        Parcel
      </a>{" "}
      and deployed on{" "}
      <a
        className="underline font-bold decoration-from-font	decoration-solid decoration-gray-300"
        href="https://pages.cloudflare.com/"
      >
        Cloudflare Pages
      </a>
      .
    </p>
  );
};

const License = () => {
  return (
    <p>
      Content licensed under{" "}
      <a
        className="font-bold underline decoration-from-font	decoration-solid decoration-gray-300"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        CC BY-NC-ND 4.0
      </a>
      , and code under{" "}
      <a
        className="font-bold underline decoration-from-font	decoration-solid decoration-gray-300"
        href="https://github.com/toadbalancer/www/blob/main/LICENSE"
      >
        Apache-2.0
      </a>
      .
    </p>
  );
};

const BuildAndDate = () => {
  const currentBuildLink = () => {
    const commit = process.env.HEAD_GIT_COMMIT || "main";
    const url = "https://github.com/toadbalancer/www/commit/";
    return url + commit;
  };
  const currentBuildShort = () => {
    const commitShort = process.env.HEAD_GIT_COMMIT_SHORT || "DEVELOPMENT";
    return commitShort;
  };
  const currentTime = () => new Date().toISOString();

  return (
    <p className="text-center text-sm">
      Build{" "}
      <a
        href={currentBuildLink()}
        className="font-bold underline decoration-from-font decoration-solid	decoration-gray-300"
      >
        {currentBuildShort()}
      </a>{" "}
      ({currentTime()})
    </p>
  );
};

export function Footer() {
  return (
    <footer className="text-base">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Copyright />
          </div>
          <div>
            <License />
          </div>
          <div>
            <MadeWith />
          </div>
        </div>
      </div>
      <BuildAndDate />
    </footer>
  );
}
