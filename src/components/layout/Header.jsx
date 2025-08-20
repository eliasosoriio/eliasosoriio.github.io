
import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, DarkThemeToggle } from "flowbite-react";

const personalizedNavTheme = {
  "root": {
    "base": "bg-transparent px-0 py-0 sm:px-4 dark:border-0 dark:bg-transparent animate-fade-in-down",
    "rounded": {
      "on": "rounded",
      "off": ""
    },
    "bordered": {
      "on": "border",
      "off": ""
    },
    "inner": {
      "base": "mx-auto flex flex-wrap items-center justify-end md:justify-between",
      "fluid": {
        "on": "",
        "off": "container"
      }
    }
  },
  "brand": {
    "base": "flex items-center"
  },
  "collapse": {
    "base": "w-full md:block md:w-auto sm:mt-2 md:mt-0 sm:bg-primary-gray py-3 px-12 rounded-3xl",
    "list": "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    "hidden": {
      "on": "hidden",
      "off": ""
    }
  },
  "link": {
    "base": "block py-2 pl-3 pr-4 md:p-0",
    "active": {
      "on": "bg-primary-700 text-white md:bg-transparent md:text-primary-700 dark:text-primary",
      "off": "border-0 text-gray-400 hover:bg-transparent md:border-0 md:hover:bg-transparent hover:text-primary dark:border-gray-700 dark:text-primary-gray dark:hover:bg-transparent dark:hover:text-primary md:dark:hover:bg-transparent md:dark:hover:text-primary"
    },
    "disabled": {
      "on": "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      "off": ""
    }
  },
  "toggle": {
    "base": "inline-flex items-center rounded-lg p-2 text-sm text-primary-gray dark:text-white hover:bg-transparent hover:cursor-pointer focus:outline-none focus:ring-0 focus:ring-gray-200 md:hidden dark:text-primary-gray dark:hover:bg-transparent dark:focus:ring-gray-600",
    "icon": "h-6 w-6 shrink-0",
    "title": "sr-only"
  }
}

export function Header() {
  return (
    <Navbar fluid rounded theme={personalizedNavTheme}>
      <div className="flex md:order-2">
        <Button className="bg-primary-gray hover:text-primary hover:bg-primary-gray transition-transform cursor-pointer rounded-3xl md:mr-0 sm:mr-3 h-11"><a href="tel:+34625646270">Empieza ya</a></Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Inicio
        </NavbarLink>
        <NavbarLink
          href="#about"
          onClick={(e) => {
            e.preventDefault(); // prevenir comportamiento por defecto
            const section = document.querySelector('#about');
            section.scrollIntoView({ behavior: 'smooth' }); // scroll suave
          }}
        >
          Sobre mí
        </NavbarLink>
        <NavbarLink
          href="#services"
          onClick={(e) => {
            e.preventDefault(); // prevenir comportamiento por defecto
            const section = document.querySelector('#services');
            section.scrollIntoView({ behavior: 'smooth' }); // scroll suave
          }}
        >
          Servicios
        </NavbarLink>
        <NavbarLink
          href="#contact"
          onClick={(e) => {
            e.preventDefault(); // prevenir comportamiento por defecto
            const section = document.querySelector('#contact');
            section.scrollIntoView({ behavior: 'smooth' }); // scroll suave
          }}
        >
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
