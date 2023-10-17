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
          { name: "Bootstrap", color: "text-sky-400" },
        ]}
        demoLink="https://trello-clone-ivory-nine.vercel.app/"
        codeLink="https://github.com/RuanPabloPionte/trello-clone"
      />
    </section>
  );
}

export default Projects;
