"use client";
import { useState } from "react";
import { TfiMenuAlt, TfiClose } from "react-icons/tfi";

function Header() {
  let links = [
    { name: "Sobre", link: "#about" },
    { name: "Tecnologias", link: "#skils" },
    { name: "Projetos", link: "#projects" },
    { name: "Contato", link: "#contact" },
  ];
  const [modalMenu, setModalMenu] = useState(true);

  return (
    <header className="bg-info p-3">
      <nav className="flex justify-between items-center">
        <div className="text-lg md:text-2xl">Ruan Pionte</div>
        <div
          className={`md:block md:static absolute bg-info left-0
              ${modalMenu ? " top-[100%] hidden" : " top-9 "}
          t md:w-auto  w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] mt-4  md:mt-0 text-lg">
            {links.map((link) => (
              <li key={link.name} className="m-3">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex items-center gap-6 text-2xl md:hidden"
          onClick={() => setModalMenu(!modalMenu)}
        >
          {modalMenu ? <TfiMenuAlt /> : <TfiClose />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
