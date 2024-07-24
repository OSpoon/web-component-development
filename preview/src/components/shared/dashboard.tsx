import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Preview } from './preview'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex justify-center h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Avatar className="mr-4">
              <AvatarImage className="size-8" src="https://raw.githubusercontent.com/hellof2e/static/main/quark-logo.png" alt="@quarkc" />
              <AvatarFallback>Quarkc</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Web Component Preview</span>
          </div>
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
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>I'm OSpoon</CardTitle>
                <CardDescription>
                  Front-end development engineer. Focus on building web applications and websites using Vue.js, Angular, Typescript, and Node.js.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <a href="https://github.com/OSpoon" target="_blank">
                  <Button size="sm" className="w-full">
                    He's on Github
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <main className="flex flex-1 flex-col p-4 gap-4 lg:gap-6 lg:p-6">
          <Preview></Preview>
        </main>
      </div>
    </div>
  )
}
