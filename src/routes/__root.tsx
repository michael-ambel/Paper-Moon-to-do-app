import { createRootRoute, Outlet } from '@tanstack/react-router'
import { ThemeProvider } from '../lib/theme'
import { PullTestBadge } from '../components/PullTestBadge'
import { PullTestFooter } from '../components/PullTestFooter'

export function Root() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
        <Outlet />
        <PullTestBadge />
        <PullTestFooter />
      </div>
    </ThemeProvider>
  )
}

export const Route = createRootRoute({
  component: Root,
})
