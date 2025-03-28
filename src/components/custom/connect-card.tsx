import { cn } from '@/lib/utils'


interface ConnectCardProps {
  icon: React.ReactElement
  name: string
  link: string
}

export function ConnectCard({ icon, name, link }: ConnectCardProps) {
  const connectCardCn = cn([
    'font-mono',
    'flex justify-center items-center gap-4',
    'text-xl',
    'bg-stone-900 hover:bg-stone-800',
    'transition-all duration-200',
    'p-8 rounded-md'
  ])

  return (
    <a
      className={connectCardCn}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <span>
        {icon}
      </span>
      <span>
        {name}
      </span>
    </a>
  )
}
