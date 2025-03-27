import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {  
  return (
      <div className={'flex flex-col'}>
        <h1 className={"text-5xl"}>
          Toma Bourov | Тома Буров
        </h1>
        <p className={'pt-4 font-NeueMaksimaLight'}>
          My name is Toma 👋. I am a <span className={'text-theme-foreground-two'}>Computer Science</span> and <span className={'text-theme-foreground-two'}>Psychology</span> Undergraduate at the <a className='underline text-[#4777AB]' href='https://www.aubg.edu/home-bg/'>American University in Bulgaria.</a> I have a keen interest in technology, visuals, design, biology, robotics and AI.
        </p>
        <p className='pt-2'>I also design websites sometimes.</p>
        {/* <h1 className={'text-4xl'}>Full-Stack Developer</h1> */}
        <Link
          className={'group text-2xl self-center mt-32'}
          to="/projects"
        >
          Take a look at some of the things I have worked on 👉
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white" />
        </Link>
      </div>
  );
}
