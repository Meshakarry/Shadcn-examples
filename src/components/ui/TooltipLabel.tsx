import { Info } from 'lucide-react'
import { FieldLabel } from "@/components/ui/field"
import { Button } from "@/components/ui/button"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TooltipLabelProps {
  label: string
  description: string
}

export default function TooltipLabel ({ label, description }: TooltipLabelProps) {
  return (
    <FieldLabel htmlFor="project">
      <span>{ label }</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" className="p-0 text-neutral-400">
            <Info />
          </Button>
        </TooltipTrigger>
        <TooltipContent>{ description }</TooltipContent>
      </Tooltip>
    </FieldLabel>
  )
}
