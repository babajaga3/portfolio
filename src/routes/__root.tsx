import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className={'overflow-hidden bg-theme-background font-mono'}>
      <Outlet />
    </div>
  )
})
