import { ConnectCard } from '@/components/custom'
import { createFileRoute, Link } from '@tanstack/react-router'
import GithubIcon from '@/assets/icons/github.svg?react'
import LinkedinIcon from '@/assets/icons/linkedin.svg?react'
import EmailIcon from '@/assets/icons/gmail.svg?react'
import { cn } from '@/lib/utils'
import { Trans, useTranslation } from 'react-i18next'


export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const { t } = useTranslation()
  const iconsCn = cn([ 'h-10' ])

  return (
    <div className={'flex flex-col'}>
      <h1 className={'text-5xl'}>
        Toma Bourov | Тома Буров
      </h1>
      <p className={'pt-4 font-NeueMaksimaLight'}>
        <Trans
          i18nKey="index.paragraph-one"
          components={{
            1: <span className="text-theme-background" />,
            2: <span className="text-theme-background" />,
            3: <a className="text-blue-400 underline hover:text-blue-500 transition-all duration-300" href="https://www.aubg.edu/" />
          }}
        />
      </p>
      <p className='pt-2'>
        {t('index.paragraph-two')}
      </p>
      <Link
        className={'group text-2xl self-center mt-32'}
        to="/projects"
      >
        {t('index.link')}
        <span className="block h-0.5 bg-white max-w-0 animate-expand-once group-hover:animate-shrink" />
      </Link>
      <div className='flex flex-col gap-8 mt-32'>
        <div className='text-2xl self-center'>{t('index.social.title')}</div>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <ConnectCard
            icon={<GithubIcon className={`${iconsCn} fill-white`} />}
            name={t('index.social.github')} link="https://github.com/babajaga3"
          />
          <ConnectCard
            icon={<LinkedinIcon className={`${iconsCn} w-[40px]`} />}
            name={t('index.social.linkedin')} link="https://www.linkedin.com/in/toma-bourov/"
          />
          <ConnectCard
            icon={<EmailIcon className={`${iconsCn} fill-white`} />}
            name={t('index.social.email')} link="mailto:me@tomabourov.com"
          />
        </div>
      </div>
    </div>
  )
}
