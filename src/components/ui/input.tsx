import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  pill?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, pill, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full border border-border bg-transparent px-3 py-2 text-base shadow-xs transition-colors md:text-sm",
          "file:border-0 file:bg-transparent file:text-sm file:text-foreground",
          "focus-visible:outline-none focus:ring-3 focus:ring-primary-200",
          "placeholder:text-muted-foreground",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "invalid:border-destructive focus:invalid:ring-ring",
          pill ? 'rounded-full' : 'rounded-lg',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
