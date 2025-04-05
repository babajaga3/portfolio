import { createFileRoute } from '@tanstack/react-router'
import { ProjectCard } from '@/components/custom'
import cleverEv from '@/assets/cleverev-dash.png'
import portfolio from '@/assets/portfolio-preview.png'
import TypescriptIcon from '@/assets/icons/typescript.svg?react'
import ReactIcon from '@/assets/icons/react.svg?react'
import ViteIcon from '@/assets/icons/vite.svg?react'
import ReactQueryIcon from '@/assets/icons/reactquery.svg?react'
import CloudflareWorkersIcon from '@/assets/icons/cloudflareworkers.svg?react'
import PrismaORMIcon from '@/assets/icons/prisma.svg?react'
import ClickhouseIcon from '@/assets/icons/clickhouse.svg?react'
import GitIcon from '@/assets/icons/git.svg?react'
import CloudflareIcon from '@/assets/icons/cloudflare.svg?react'
import TailwindCSSIcon from '@/assets/icons/tailwindcss.svg?react'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'


export const Route = createFileRoute('/projects')({
  component: RouteComponent
})

function RouteComponent() {
  const { t } = useTranslation('translation', { keyPrefix: 'projects' })
  const svgsCn = cn([ 'h-6' ])

  // TODO figure out a better way to handle the tech stacks

  const cleverEvTechnologies = [
    {
      name: 'TypeScript',
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
      icon: <ReactQueryIcon className={`${svgsCn} fill-[#FF4154]`} />
    },
    {
      name: 'Cloudflare Workers',
      icon: <CloudflareWorkersIcon className={svgsCn} />
    },
    {
      name: 'Prisma ORM',
      icon: <PrismaORMIcon className={`${svgsCn} fill-white`} />
    },
    {
      name: 'ClickHouse DB',
      icon: <ClickhouseIcon className={svgsCn} />
    },
    {
      name: 'Git',
      icon: <GitIcon className={svgsCn} />
    }
  ]

  const portfolioTechnologies = [
    {
      name: 'TypeScript',
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
        <h1 className='text-5xl'>{t('title')}</h1>
        <p className='font-NeueMaksimaLight'>
          {t('description')}
        </p>
      </div>

      <div className='flex flex-col gap-8'>
        <ProjectCard
          title={t('projects.cleverev.title')}
          description={t('projects.cleverev.description')}
          image={cleverEv}
          link='https://cleverev.net'
          companyLink='https://commentcloud.tech'
          period='2023 - 2025'
          technologies={cleverEvTechnologies}
        />
        <ProjectCard
          title={t('projects.portfolio.title')}
          description={t('projects.portfolio.description')}
          image={portfolio}
          link='https://tomabourov.com'
          githubLink='https://github.com/babajaga3/portfolio'
          period='2025 - Present'
          technologies={portfolioTechnologies}
        />
      </div>
    </div>
  )
}
