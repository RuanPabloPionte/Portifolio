"use client";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollBackToTop";
import Skils from "@/components/Skils";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";

export default function Home() {
  // console.log(inView);
  return (
    <main className="mx-8 sm:mx-1">
      <motion.section
        className="flex items-center justify-center flex-wrap md:gap-5 pb-6"
        style={{
          minHeight: "100vh",
          // border: "2px solid red",
        }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: easeIn, duration: 0.7 }}
        viewport={{ once: true, amount: 0 }}
      >
        {/* profile image */}

        <Image
          className="rounded-full mx-8 border"
          src="/profileImg.jpg"
          alt="profileImg"
          height={400}
          width={400}
        />

        {/* text-content */}
        <div className="p-3 mx-6">
          {/* text */}
          <div className="text-center text-3xl">
            <p>Olá, eu sou</p>
            <p className="text-accent ">RUAN PIONTE</p>
            <p> Desenvolvedor Front-End</p>
          </div>

          {/* icones */}
          <div className="flex justify-center gap-8 ">
            <a
              className="hover:scale-125 rounded-full border border-b-transparent hover:border-2 hover:border-black hover:mt-2 transition-all ease"
              href="https://github.com/RuanPabloPionte"
              target="_blank"
            >
              <Image
                src="/icons8-github-60.png"
                alt="gitHub-log"
                height={50}
                width={50}
              />
            </a>
            <a
              className="hover:scale-125 rounded-md border border-b-transparent hover:border-2 hover:border-sky-500 hover:mt-2 transition-all ease"
              href="https://www.linkedin.com/in/ruanpablopionte"
              target="_blank"
            >
              <Image
                src="/icons8-linkedin-logo-96.png"
                alt="linkedin-logo"
                height={50}
                width={50}
              />
            </a>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: easeIn, duration: 0.7 }}
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap justify-center"
      >
        <h2 className={`text-4xl my-5`} id="about">
          Sobre
        </h2>
        <About />
      </motion.section>
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: easeIn, duration: 0.7 }}
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap justify-center"
      >
        <h2 className="text-4xl my-7" id="skils">
          Tecnologias
        </h2>
        <Skils />
      </motion.section>
      <motion.section
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ ease: easeIn, duration: 0.7 }}
        viewport={{ once: true, amount: 0 }}
        className="flex flex-wrap justify-center"
      >
        <h2 className="text-4xl my-7" id="projects">
          Projetos
        </h2>
        <Projects />
      </motion.section>
      <ScrollToTop />
    </main>
  );
}
