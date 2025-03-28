import { ConnectCard } from '@/components/custom'
import { createFileRoute, Link } from '@tanstack/react-router'
import GithubIcon from '@/assets/icons/github.svg?react'
import LinkedinIcon from '@/assets/icons/linkedin.svg?react'
import EmailIcon from '@/assets/icons/gmail.svg?react'
import { cn } from '@/lib/utils'


export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const iconsCn = cn([ 'h-10' ])

  return (
    <div className={'flex flex-col'}>
      <h1 className={'text-5xl'}>
        Toma Bourov | Тома Буров
      </h1>
      <p className={'pt-4 font-NeueMaksimaLight'}>
        My name is Toma 👋. I am a <span className={'text-theme-foreground-two'}>Computer Science</span> and <span className={'text-theme-foreground-two'}>Psychology</span> Undergraduate at the <a className='underline text-[#4777AB]' href='https://www.aubg.edu/home-bg/' target='_blank' rel="noreferrer">American University in Bulgaria.</a> I have a keen interest in technology, visuals, design, biology, robotics and AI.
      </p>
      <p className='pt-2'>I also design websites sometimes.</p>
      <Link
        className={'group text-2xl self-center mt-32'}
        to="/projects"
      >
        Take a look at some of the things I have worked on 👉
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white" />
      </Link>
      <div className='flex flex-col gap-8 mt-32'>
        <div className='text-2xl self-center'>Want to connect? 👇</div>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <ConnectCard
            icon={<GithubIcon className={`${iconsCn} fill-white`} />}
            name="GitHub" link="https://github.com/babajaga3"
          />
          <ConnectCard
            icon={<LinkedinIcon className={`${iconsCn} w-[40px]`} />}
            name="LinkedIn" link="https://www.linkedin.com/in/toma-bourov/"
          />
          <ConnectCard
            icon={<EmailIcon className={`${iconsCn} fill-white`} />}
            name="Email" link="mailto:me@tomabourov.com"
          />
        </div>
      </div>
    </div>
  )
}
