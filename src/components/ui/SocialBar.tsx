import { Github, Linkedin, Instagram } from 'iconoir-react'
import { cn } from '@/lib/utils.ts'


export function SocialBar() {
  const socialCn = cn([
    'text-theme-accent',
    'hover:text-theme-accent-secondary',
    'flex',
    'flex-row',
    'gap-2',
    'transition',
    'duration-300',
    'ease-in-out',
    'hover:translate-x-4'
  ])

  return (
    <div className={'flex flex-col text-xl font-semibold p-8 gap-y-2'}>
      <a href={'https://github.com/babajaga3'} className={socialCn}>
        <Github/>
        <h2>GitHub</h2>
      </a>

      <a href={'https://www.linkedin.com/in/toma-bourov'} className={socialCn}>
        <Linkedin/>
        <h2>LinkedIn</h2>
      </a>

      <a href={'https://www.instagram.com/sluncetoma'} className={socialCn}>
        <Instagram/>
        <h2>Instagram</h2>
      </a>
    </div>
  )
}
