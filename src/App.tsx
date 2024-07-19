import React from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export function App() {
  return (
    <>
      <Header />
      <main class="flex-grow">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <p class="py-4">
            Enjoyer of computing, distributed systems, and decentralized technologies. Not actually
            a toad or a piece of networking infrastructure. This website is fairly desolate right
            now and more or less just a placeholder.
          </p>
          <p class="py-2">
            You can find me on several other corners of the internet.
            <ul class="marker:text-zinc-300 py-4 px-4">
              <li class="list-disc font-bold py-1">
                <a href="https://github.com/toadbalancer">GitHub</a>
              </li>
              <li class="list-disc font-bold py-1">
                <a href="https://x.com/toadbalancer">Twitter</a>
              </li>
              <li class="list-disc font-bold py-1">
                <a href="https://reddit.com/user/toadbalancer">Reddit</a>
              </li>
            </ul>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
