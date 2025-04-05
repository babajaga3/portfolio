import { createRootRoute, Outlet } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { Constellation } from '@/components/custom/constellation'


export const Route = createRootRoute({
  component: () => {
    const globalCn = cn([
      // 'text-theme-accent-two',
      // 'bg-theme-background-two',
      'font-NeueMaksima',
      'px-4 sm:px-16',
      'py-12',
      'h-screen',
      'overflow-auto',
      'relative'
    ])

    return (
      <div className={globalCn}>
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-transparent to-black pointer-events-none">
          <Constellation />
        </div>
        <div className='relative z-10'>
          <Outlet />
        </div>
      </div>
    )
  }
})
