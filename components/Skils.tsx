import Image from "next/image";

type Skill = {
  name: string;
  src: string;
};
const skilsArray: Skill[] = [
  { name: "HTML", src: "/icons8-html-144.png" },
  { name: "CSS", src: "/icons8-css3-144.png" },
  { name: "JavaScript", src: "/icons8-javascript-144.png" },
  { name: "Git", src: "/icons8-git-144.png" },
  { name: "GitHub", src: "/icons8-github-60.png" },
  { name: "SASS", src: "/icons8-sass-144.png" },
  { name: "Booststrap", src: "/icons8-bootstrap-144.png" },
  { name: "Tailwind", src: "/icons8-tailwind-css-144.png" },
  { name: "Styled-components", src: "/styled-components-logo.png" },
  { name: "Typescript", src: "/icons8-typescript-144.png" },
  {
    name: "React",
    src: "/1174949_js_react js_logo_react_react native_icon.png",
  },
  { name: "Nextjs", src: "/icons8-nextjs-144.png" },
];

function SkilsCard({ name, src }: Skill) {
  return (
    <div className="flex justify-center flex-wrap bg-accent rounded-md p-4">
      <Image src={src} alt="html-log" height={144} width={144}  />
      <p className="text-center w-full mb-4 text-white">{name}</p>
    </div>
  );
}

function Skils() {
  return (
    <div className="bg-secondary w-full rounded-xl grid grid-cols-2 p-8 mx-8 md:grid-cols-4 gap-4 md:gap-6"
    style={{
      minHeight: "80vh",
      overflow:"hidden"
    }}
    
    >
      {skilsArray.map((skil) => (
        <SkilsCard key={skil.name} name={skil.name} src={skil.src} />
      ))}
    </div>
  );
}

export default Skils;
