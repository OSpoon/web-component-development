import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function Introduction() {
  return (
    <div className="p-4 mt-auto">
      <Card>
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
  )
}
