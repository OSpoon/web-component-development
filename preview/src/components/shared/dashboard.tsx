import { Preview } from './preview'
import { Header } from './header'
import { Introduction } from './introduction'
import { Title } from './title'

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Title></Title>
          <div className="flex-1">
            <nav className="grid px-4 items-start text-sm font-medium lg:px-8">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                Button
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                Card
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary bg-muted text-primary"
              >
                Form
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                Link
              </a>
            </nav>
          </div>
          <Introduction></Introduction>
        </div>
      </div>
      <div className="flex flex-col">
        <Header></Header>
        <main className="flex flex-1 flex-col p-4 gap-4 lg:gap-6 lg:p-6">
          <Preview></Preview>
        </main>
      </div>
    </div>
  )
}
