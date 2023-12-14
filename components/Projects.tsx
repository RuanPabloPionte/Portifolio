import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section>
      {/* Projeto 1 */}
      <ProjectCard
        imageSrc="/Gestor de estoque.png"
        title="StockItem"
        description="Um gestor de estoque completo com todas as funcionalidades CRUD, desenvolvido com Vite, React, React Router e React Bootstrap. Feito com referencia no ultimo exercicio de React do curso oneBitCode."
        technologies={[
          { name: "React", color: "text-sky-400" },
          { name: "Bootstrap", color: "text-purple-600" },
        ]}
        demoLink="https://gestor-de-estoque-indol.vercel.app/"
        codeLink="https://github.com/RuanPabloPionte/gestor-de-estoque"
      />

      {/* Projeto 2 */}
      <ProjectCard
        imageSrc="/Trello.png"
        title="Trello Appwrite"
        description="Este projeto é um clone do Trello, implementado com nextJs, React, React Beautiful DnD e Appwrite para o backend. O aplicativo fornece um sistema intuitivo de gerenciamento de tarefas, permitindo a organização de atividades em colunas, movendo-as conforme necessário."
        technologies={[
          { name: "Nextjs", color: "text-black" },
          { name: "Tailwind", color: "text-sky-400" },
        ]}
        demoLink="https://trello-clone-ivory-nine.vercel.app/"
        codeLink="https://github.com/RuanPabloPionte/trello-clone"
      />

      <ProjectCard
        imageSrc="/amaro-challenge.png"
        title="Amaro Challenge"
        description="Esse projeto é um catálogo de moda interativo desenvolvido com Next.js e Tailwind. Explore uma variedade de produtos, verifique seus detalhes, adicione ao carrinho e desfrute de uma experiência de compra online responsiva e atraente. Ele foi inspirado no Amaro front end challenge de 2018 para mais informação é só clicar no botão code"
        technologies={[
          { name: "Nextjs", color: "text-black" },
          { name: "Tailwind", color: "text-sky-400" },
        ]}
        demoLink="https://amaro-chalenge.vercel.app/"
        codeLink="https://github.com/RuanPabloPionte/amaro-chalenge"
      />
    </section>
  );
}

export default Projects;
