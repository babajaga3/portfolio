import { createFileRoute } from '@tanstack/react-router'
import { Code } from 'iconoir-react'
import { Globe, SocialBar } from '@/components/ui'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {

  return (
    <div className={'grid grid-cols-2'}>
      <div className={'bg-theme-foreground'}>
        <h1 className={'text-theme-accent text-5xl font-bold p-8'}>
          Toma Bourov
        </h1>
        <div className={'flex flex-row gap-2 pl-12'}>
          <Code />
          <h3 className={'text-theme-accent flex flex-row gap-1.5'}>
            Full-Stack Developer
          </h3>
        </div>
        <SocialBar />
      </div>
      <Globe/>
    </div>
  )
}
