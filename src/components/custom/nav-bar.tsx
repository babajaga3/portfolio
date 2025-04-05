import {
  Menubar,
  // MenubarContent,
  // MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { useTranslation } from 'react-i18next'


export function NavBar() {
  const { t } = useTranslation('translation', { keyPrefix: 'components.nav-bar' })
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <>
      <Menubar className='hidden md:flex'>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/">
              {t('home')}
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to="/projects">
              {t('projects')}
            </Link>
          </MenubarTrigger>
          {/* <MenubarContent> // TODO add soon when project pages exist
            <MenubarItem>
              <Link to="/projects">
                CleverEV
              </Link>
            </MenubarItem>
            <MenubarItem>
              Portfolio
            </MenubarItem>
          </MenubarContent> */}
        </MenubarMenu>
      </Menubar>

      <span className='inline-flex items-center justify-center p-0 md:hidden'>
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger className='bg-black p-2 rounded-md border-accent border-2'>
            <Menu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t('title')}</DrawerTitle>
              <DrawerDescription>{t('description')}</DrawerDescription>
            </DrawerHeader>

            <Button asChild variant='secondary' className='mx-8 mt-8 mb-4'>
              <Link to="/" onClick={() => setIsOpen(false)}>
                {t('home')}
              </Link>
            </Button>

            <Button asChild variant='secondary' className='mx-8 mb-8'>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                {t('projects')}
              </Link>
            </Button>

            {/* <span className='border-t-2 border-accent mx-14' /> // TODO add soon when settings page exists

            <Button asChild variant='outline' className='mx-8 mt-8 mb-12'>
              <Link to="/projects">
                Settings
              </Link>
            </Button> */}

          </DrawerContent>
        </Drawer>
      </span>

    </>
  )
}
