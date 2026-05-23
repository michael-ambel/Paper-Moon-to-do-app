import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '../lib/theme'

export function Root() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export const Route = createRootRoute({
  component: Root,
})
