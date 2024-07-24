import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

export function Title() {
  return (
    <div className="flex justify-center h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Avatar className="mr-4">
        <AvatarImage className="size-8" src="https://raw.githubusercontent.com/hellof2e/static/main/quark-logo.png" alt="@quarkc" />
      </Avatar>
      <span className="font-semibold">Web Component Preview</span>
    </div>
  )
}
