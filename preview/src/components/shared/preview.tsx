import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

export function Preview() {
  return (
    <Tabs defaultValue="html">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="html">In HTML</TabsTrigger>
        <TabsTrigger value="vue">In Vue.js</TabsTrigger>
        <TabsTrigger value="react">In React</TabsTrigger>
      </TabsList>
      <TabsContent value="html">
        <Card>
          <CardHeader>
            <CardTitle>In HTML</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="vue">
        <Card>
          <CardHeader>
            <CardTitle>In Vue.js</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="react">
        <Card>
          <CardHeader>
            <CardTitle>In React</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">

          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
