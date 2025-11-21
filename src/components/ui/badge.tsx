import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "cursor-pointer inline-flex items-center rounded-full px-2 py-1 gap-1.5 text-xs rounded-lg transition-colors focus:outline-none focus:ring-3 focus:ring-primary-200",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-500",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-500",
        outline: "outline outline-border text-foreground bg-white/10 hover:bg-black/5",
        destructive:
          "bg-destructive text-white focus:ring-ring",
        positive:
          "bg-transparent text-foreground hover:bg-black/5 focus:bg-transparent",
        neutral:
          "bg-neutral-400 text-white hover:bg-neutral-300 focus:ring-sidebar-ring",
      },
      pill: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, pill, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, pill }), className)} {...props} tabindex="0" />
  )
}

export { Badge, badgeVariants }
