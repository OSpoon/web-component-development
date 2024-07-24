import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-end">
      <ThemeToggle></ThemeToggle>
    </header>
  )
}
