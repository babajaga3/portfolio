import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { IconoirProvider } from 'iconoir-react'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

// Render the app
const rootElement = document.querySelector('#root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<StrictMode>
    <IconoirProvider
      iconProps={{
        color: '#EAB595',
        strokeWidth: 1.3,
        width: '1.3em',
        height: '1.3em'
      }}
    >
      <RouterProvider router={router} />
    </IconoirProvider>
  </StrictMode>)
}
