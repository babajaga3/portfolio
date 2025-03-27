import { cn } from '@/lib/utils'
import { Github, ExternalLink, Building } from 'lucide-react'

interface ProjectCardProps {
  title: string;
  description: string;
  period: string;
  image: string;
  technologies: { name: string, icon: React.ReactElement }[];
  company?: string;
  companyLink?: string;
  githubLink?: string;
  link?: string;
}

export function ProjectCard({
  title,
  description,
  period,
  image,
  technologies,
  company,
  companyLink,
  link,
  githubLink
}: ProjectCardProps) {
  const containerCn = cn([
    'flex',
    'justify-between',
    'gap-16',
    'bg-grey',
    'bg-stone-900 hover:bg-stone-800',
    'p-8 sm:p-12',
    'rounded-lg',
    'transition-all duration-300'
  ])
  
  const externalLinkCn = cn([
    'hover:text-theme-foreground-two',
    'transition-colors',
    'duration-200'
  ])
  
  return (
    <div className={containerCn}>
      <div className='flex flex-col gap-8 sm:justify-between'>
        <div className="flex flex-col gap-8">
          <div className='flex flex-col sm:flex-row justify-items-start gap-4 '>
            <h1 className='text-4xl'>{title}</h1>
            <div className='flex gap-4'>
              {link && <a className={externalLinkCn} href={link} target="_target" rel="noopener noreferrer">
                <ExternalLink />
              </a>}
              {githubLink && <a className={externalLinkCn} href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github /> {/* Deprecated, change soon */}
              </a>}
              {companyLink && <a className={externalLinkCn} href={companyLink} target="_blank" rel="noopener noreferrer">
                <Building />
              </a>}
            </div>
          </div>
          <p className="text-lg font-NeueMaksimaLight">{description}</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3>Technologies:</h3>
          <ul className='flex flex-wrap sm:flex-col gap-2'>
            {technologies.map((tech, index) => (
              <li key={index} className='font-mono flex items-end gap-2'> {/* font - temp fix for centering items */}
                <span>{tech.icon}</span>
                <span className='hidden sm:inline'>{tech.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={image} className='hidden lg:block lg:w-2/3 h-auto rounded-md' alt="CleverEV Dashboard Image" />
    </div>
  )
}