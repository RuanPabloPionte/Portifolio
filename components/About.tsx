import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 justify-center mb-4 p-4 gap-4 md:gap-2 ">
      {/* image */}
      <div
        className=" grid place-items-center  
        rounded-lg mb-3"
      >
        <Image
          className="rounded-lg"
          src="/cumputerCoding.jpg"
          alt="Cumputer with code in the screen"
          width={400}
          height={500}
        />
      </div>
      {/* card */}
      <div className="indent-5 bg-secondary p-8 w-full text-justify rounded-lg text-lg md:text-lg lg:text-2xl md:col-span-2">
        <p>
          Tenho 21 anos e sou morador de Colatina, Espírito Santo. Estou em uma
          jornada para me tornar desenvolvedor, transformando ótimas ideias em
          realidade. Atualmente, curso Sistemas de Informação na Unesc e me
          especializo em desenvolvimento web na OneBitCode.
        </p>
        <p>
          No meu tempo livre, gosto de assistir jogos de futebol, especialmente
          da Premier League e da Champions League. Também gosto de sair com
          minha família e explorar conteúdos variados no YouTube.
        </p>
      </div>
    </section>
  );
}

export default About;
