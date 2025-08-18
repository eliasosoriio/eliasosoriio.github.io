import { Avatar, Blockquote } from "flowbite-react";

export function Quote() {
  return (
    <figure className="max-w-screen-md ml-0 text-left">
      <svg
        className="mb-3 h-8 w-8 text-primary-dark"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>

      <Blockquote>
        <p className="text-1xl font-medium italic text-primary-gray">
          "En LAMARTA confiamos en Elías para potenciar nuestra presencia digital. Gracias a su enfoque personalizado, hemos logrado una web que refleja nuestra esencia y un sistema de fidelización que ha fortalecido nuestra relación con los clientes."
        </p>
      </Blockquote>

      <figcaption className="mt-6 flex items-center space-x-3">
        <Avatar rounded size="md" img="https://r11.es/assets/jose_profile.jpg" alt="profile picture" />
        <div className="flex flex-col">
          <cite className="font-medium text-gray-900">Jose</cite>
          <cite className="text-sm text-gray-500">CEO de LAMARTA</cite>
        </div>
      </figcaption>
    </figure>
  );
}
