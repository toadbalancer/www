export function Main() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="py-4">
          Enjoyer of computers, distributed systems, and decentralized technologies. Not actually some kind of
          toad-balancing networking infrastructure. This website is fairly desolate right now and more or less just a
          placeholder.
        </p>
        <p className="py-2">
          You can find me on several other corners of the internet.
          <ul className="marker:text-zinc-300 py-4 px-4">
            <li className="list-disc py-1">
              <a
                className="font-bold underline decoration-from-font decoration-solid decoration-gray-300"
                href="https://github.com/toadbalancer"
              >
                GitHub
              </a>
            </li>
            <li className="list-disc py-1">
              <a
                className="font-bold underline decoration-from-font decoration-solid decoration-gray-300"
                href="https://x.com/toadbalancer"
              >
                Twitter
              </a>
            </li>
            <li className="list-disc py-1">
              <a
                className="font-bold underline decoration-from-font decoration-solid decoration-gray-300"
                href="https://reddit.com/user/toadbalancer"
              >
                Reddit
              </a>
            </li>
          </ul>
        </p>
      </div>
    </main>
  );
}
