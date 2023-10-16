import Image from "next/image";
import { GoBroadcast } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import ButtonGrey from "./ButtonGrey";

function Projects() {
  return (
    <div className="grid md:grid-cols-2  place-items-center p-4">
      <div className="m-4 md:h-96 ">
        <Image
          className="rounded-md md:h-80 object-cover"
          src="/Gestor de estoque.png"
          alt=""
          height={600}
          width={600}
        />
      </div>
      <div className="w-full">
        <div className="text-center">
          <h3 className="text-xl lg:text-4xl lg:my-4 font-semibold  m-2 tracking-wide">
            StockItem
          </h3>
          <p className="text-xl lg:text-3xl">
            Um gestor de estoque completo com todas as funcionalidades CRUD,
            desenvolvido com Vite, React, React Router e React Bootstrap. Feito
            com referencia no ultimo exercicio de React do curso oneBitCode.
          </p>
        </div>
        <div className="grid grid-cols- place-items-center m-5">
          <div className="flex min-w-[50%] justify-between gap-5 text-xl font-semibold ">
            <span className="text-sky-400">React</span>
            <span className="text-purple-600">Bootstrap</span>
          </div>
          <div className="flex min-w-[50%] justify-between gap-5 text-xl">
            <ButtonGrey>
              <span className="text-md font-semibold">Demo</span>
              <GoBroadcast />
            </ButtonGrey>

            <ButtonGrey>
              <a href="https://github.com/RuanPabloPionte/gestor-de-estoque" target="_blank" className="flex gap-2">

              <span className="text-md font-semibold ">Code</span>
              <BsGithub />
              </a>
            </ButtonGrey>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
