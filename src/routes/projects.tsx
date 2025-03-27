import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '@/components/custom/project-card'
import cleverEv from '@/assets/cleverev-dash.png'
import portfolio from '@/assets/portfolio-preview.png'
import TypescriptIcon from '@/assets/icons/typescript.svg?react';
import ReactIcon from '@/assets/icons/react.svg?react';
import ViteIcon from '@/assets/icons/vite.svg?react';
import ReactQueryIcon from '@/assets/icons/reactquery.svg?react';
import CloudflareWorkersIcon from '@/assets/icons/cloudflareworkers.svg?react';
import PrismaORMIcon from '@/assets/icons/prisma.svg?react';
import ClickhouseIcon from '@/assets/icons/clickhouse.svg?react';
import GitIcon from '@/assets/icons/git.svg?react';
import CloudflareIcon from '@/assets/icons/cloudflare.svg?react';
import TailwindCSSIcon from '@/assets/icons/tailwindcss.svg?react';
import { cn } from '@/lib/utils';


export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  const svgsCn = cn([
    'h-6'
  ])
  
  const cleverEvTechnologies = [
    {
      name: 'Typescript',
      icon: <TypescriptIcon className={svgsCn} />
    },
    {
      name: 'React',
      icon: <ReactIcon className={svgsCn} />
    },
    {
      name: 'Vite',
      icon: <ViteIcon className={svgsCn} />
    },
    {
      name: 'React Query',
      icon: <ReactQueryIcon className={svgsCn + ' fill-[#FF4154]'} />
    },
    {
      name: 'Cloudflare Workers',
      icon: <CloudflareWorkersIcon className={svgsCn} />
    },
    {
      name: 'Prisma ORM',
      icon: <PrismaORMIcon className={svgsCn + ' fill-white'} />
    },
    {
      name: 'Clickhouse DB',
      icon: <ClickhouseIcon className={svgsCn} />
    },
    {
      name: 'Git',
      icon: <GitIcon className={svgsCn} />
    }
  ]
  
  const portfolioTechnologies = [
    {
      name: 'Typescript',
      icon: <TypescriptIcon className={svgsCn} />
    },
    {
      name: 'React',
      icon: <ReactIcon className={svgsCn} />
    },
    {
      name: 'Vite',
      icon: <ViteIcon className={svgsCn} />
    },
    {
      name: 'TailwindCSS',
      icon: <TailwindCSSIcon className={svgsCn} />
    },
    {
      name: 'Cloudflare Pages',
      icon: <CloudflareIcon className={svgsCn} />
    },
    {
      name: 'Git',
      icon: <GitIcon className={svgsCn} />
    }
  ]
  
  return (
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl'>Projects</h1>
        <p className='font-NeueMaksimaLight'>
          Here are some of the projects I've worked on:
        </p>
      </div>
      
      <div className='flex flex-col gap-8'>
        <ProjectCard
          title='CleverEV'
          description='Full-stack management platform for electric vehicle charging stations.'
          image={cleverEv}
          link='https://console.cleverev.net/login?redirect=/'
          companyLink='https://commentcloud.tech'
          period='2023 - 2025'
          technologies={cleverEvTechnologies}
        />
        <ProjectCard
          title='Portfolio'
          description='My personal portfolio website.'
          image={portfolio}
          link='https://tomabourov.com'
          period='2025 - Present'
          technologies={portfolioTechnologies}
        />
      </div>
    </div>
  )
}
