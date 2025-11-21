'use client'

import { useId, useState } from 'react'

import { CheckIcon, ChevronsUpDownIcon, CircleX, Ellipsis, X, ArrowBigUp } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

type Option = { label: string; value: string };

interface MultiSelectComboboxProps {
  options: Option[];
  title?: string;
  placeholder?: string;
}

const MultiSelectCombobox = ({
  options,
  title = "Select items",
  placeholder = "Search...",
}: MultiSelectComboboxProps) => {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleSelection = (value: string) => {
    setSelectedValues(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]))
  }

  const removeSelection = (value: string) => {
    setSelectedValues(prev => prev.filter(v => v !== value))
  }

  const clearAll = () => setSelectedValues([]);

  // Define maxShownItems before using visibleItems
  const maxShownItems = 4;
  const visibleItems = expanded ? selectedValues : selectedValues.slice(0, maxShownItems);
  const hiddenCount = selectedValues.length - visibleItems.length;

  return (
    <div className='w-full'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className="relative h-auto min-h-8 w-full justify-between hover:bg-transparent"
          >
            <div className="flex flex-wrap items-center gap-1.5 pr-10">
              {selectedValues.length > 0 ? (
                <>
                  {visibleItems.map(val => {
                    const option = options.find(c => c.value === val)

                    return option ? (
                      <Badge key={val} variant='outline' pill className="gap-1 font-normal">
                        {option.label}
                        <Button
                          variant='ghost'
                          iconOnly
                          onClick={e => {
                            e.stopPropagation()
                            removeSelection(val)
                          }}
                          asChild
                          className="p-0"
                        >
                          <CircleX className="w-3.5 h-3.5" />
                        </Button>
                      </Badge>
                    ) : null
                  })}
                  {hiddenCount > 0 || expanded ? (
                    <Badge
                      variant='outline'
                      onClick={e => {
                        e.stopPropagation()
                        setExpanded(prev => !prev)
                      }}
                      pill
                      tabIndex={1}
                    >
                      { expanded ? (
                          <span className="flex items-center gap-1.5">
                            Show Less <ArrowBigUp className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                        <span className="flex items-center gap-1">
                          +{hiddenCount} more
                          <Ellipsis className="w-3.5 h-3.5" />
                        </span>
                       )
                      }
                    </Badge>
                  ) : null}
                </>
              ) : (
                <span className='text-sm text-muted-foreground'>{ title }</span>
              )}
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2 text-neutral-600">
              {selectedValues?.length > 0 && (
                <X
                  className="w-5 h-5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearAll();
                  }}
                  data-testid="clear-all"
                />
              )}
              <ChevronsUpDownIcon className="w-5 h-5" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-(--radix-popper-anchor-width) p-0 my-1'>
          <Command>
            <CommandInput placeholder={placeholder} />
            <CommandList>
              <CommandEmpty>No Options found.</CommandEmpty>
              <CommandGroup>
                {options.map(option => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => toggleSelection(option.value)}
                    className={`${selectedValues.includes(option.value) && 'bg-primary-100'}`}
                  >
                    <span className='truncate'>{option.label}</span>
                    {selectedValues.includes(option.value) && <CheckIcon size={16} className='ml-auto' />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default MultiSelectCombobox
