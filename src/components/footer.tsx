const currentYear = () => new Date().getFullYear();

const Copyright = () => {
  return <p>©️ {currentYear()} Toad Balancer</p>;
};

const MadeWith = () => {
  return (
    <p>
      Made with{" "}
      <a class="font-bold" href="https://react.dev/">
        React
      </a>
      ,{" "}
      <a class="font-bold" href="https://tailwindcss.com/">
        TailwindCSS
      </a>
      , and{" "}
      <a class="font-bold" href="https://parceljs.org/">
        Parcel
      </a>{" "}
      and deployed on{" "}
      <a class="font-bold" href="https://pages.cloudflare.com/">
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
      <a class="font-bold" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
        CC BY-NC-ND 4.0
      </a>
      , and code under{" "}
      <a class="font-bold" href="https://github.com/toadbalancer/www/blob/main/LICENSE">
        Apache-2.0
      </a>
      .
    </p>
  );
};

export function Footer() {
  return (
    <footer class="text-base">
      <div class="container mx-auto py-12 px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </footer>
  );
}
