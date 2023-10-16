import Image from "next/image";
import { GoBroadcast } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import ButtonGrey from "./ButtonGrey";

function Projects() {
  return (
    <section>
      <div className="grid md:grid-cols-2  place-items-center p-4">
        <div className="m-4 md:h-96">
          <Image
            className="rounded-md md:h-80 object-cover "
            src="/Gestor de estoque.png"
            alt=""
            height={400}
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
              desenvolvido com Vite, React, React Router e React Bootstrap.
              Feito com referencia no ultimo exercicio de React do curso
              oneBitCode.
            </p>
          </div>
          <div className="grid grid-cols- place-items-center m-5">
            <div className="flex min-w-[50%] justify-between gap-5 text-xl font-semibold ">
              <span className="text-sky-400">React</span>
              <span className="text-purple-600">Bootstrap</span>
            </div>
            <div className="flex min-w-[50%] justify-between gap-5 text-xl">
              <a
                href="https://gestor-de-estoque-indol.vercel.app/"
                target="_blank"
                className="flex gap-2"
              >
                <ButtonGrey>
                  <span className="text-md font-semibold">Demo</span>
                  <GoBroadcast />
                </ButtonGrey>
              </a>

              <ButtonGrey>
                <a
                  href="https://github.com/RuanPabloPionte/gestor-de-estoque"
                  target="_blank"
                  className="flex gap-2"
                >
                  <span className="text-md font-semibold ">Code</span>
                  <BsGithub />
                </a>
              </ButtonGrey>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2  place-items-center p-4">
        <div className="m-4 md:h-96">
          <Image
            className="rounded-md md:h-80 object-cover "
            src="/Trello.png"
            alt=""
            height={400}
            width={600}
          />
        </div>
        {/* text content */}
        <div className="w-full">
          <div className="text-center">
            <h3 className="text-xl lg:text-4xl lg:my-4 font-semibold  m-2 tracking-wide">
              Trello Appwrite
            </h3>
            <p className="text-xl lg:text-3xl">
              Este projeto é um clone do Trello, implementado com nextJs, React,
              React Beautiful DnD e Appwrite para o backend. O aplicativo
              fornece um sistema intuitivo de gerenciamento de tarefas,
              permitindo a organização de atividades em colunas, movendo-as
              conforme necessário.
            </p>
          </div>
          <div className="grid grid-cols- place-items-center m-5">
            <div className="flex min-w-[50%] justify-between gap-5 text-xl font-semibold ">
              <span className="text-black">NextJs</span>
              <span className="text-sky-400">Tailwind</span>
            </div>
            <div className="flex min-w-[50%] justify-between gap-5 text-xl">
              <a
                href="https://trello-clone-ivory-nine.vercel.app/"
                target="_blank"
                className="flex gap-2"
              >
                <ButtonGrey>
                  <span className="text-md font-semibold">Demo</span>
                  <GoBroadcast />
                </ButtonGrey>
              </a>

              <ButtonGrey>
                <a
                  href="https://github.com/RuanPabloPionte/trello-clone"
                  target="_blank"
                  className="flex gap-2"
                >
                  <span className="text-md font-semibold ">Code</span>
                  <BsGithub />
                </a>
              </ButtonGrey>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
