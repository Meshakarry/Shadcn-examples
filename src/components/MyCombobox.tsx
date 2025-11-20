import { Fragment, useEffect, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty, CommandSeparator } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils";
// import { CommandLoading } from 'cmdk';

type Option = { label: string; value: string };

interface MultiSelectComboboxProps {
  options: Option[];
  title?: string;
  placeholder?: string;
}

export default function MultiSelectCombobox({
    options,
    title = "Select items",
    placeholder = "Search...",
  }: MultiSelectComboboxProps) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
      let active = true;
      setLoading(true);
    
      const fetchData = async () => {
        const result = await new Promise<Option[]>((resolve) =>
          setTimeout(() => {
            resolve(
              options.filter((o) =>
                o.value.toLowerCase().includes(query.toLowerCase())
              )
            );
          }, 1000)
        );
    
        if (active) {
          setFilteredOptions(result);
          setLoading(false);
        }
      };
    
      fetchData();
    
      return () => {
        active = false;
      };
    }, [query, options]);

    const toggleSelection = (value: string) => {
      setSelected(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]))
    };

    const removeSelection = (value: string) => {
      setSelected(prev => prev.filter(v => v !== value))
    }

    const clearAll = () => setSelected([]);

    // const filteredOptions =
    //   query.trim().length === 0
    //     ? options
    //     : options.filter((o) =>
    //         o.label.toLowerCase().includes(query.toLowerCase())
    //       );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        {/* INPUT / TRIGGER */}
        <PopoverTrigger asChild data-testid="trigger">
          <div
            className={cn(
              "relative w-full border rounded-md px-3 py-4 min-h-14 cursor-pointer",
              "hover:border-primary transition",
              selected.length > 0 && "pt-3 pb-2"
            )}
          >
            <span
              className={cn(
                "absolute left-3 top-4 transition-all pointer-events-none",
                selected.length > 0 || open
                  ? "text-xs -top-2 bg-white px-1"
                  : "text-sm"
              )}
              data-testid="title"
            >
              {title}
            </span>

            {/* Badges inside input */}
            { !!selected?.length && (
              <div className="flex flex-wrap gap-3 max-w-full pr-10">
                { selected.map((item) => {
                   const option = options.find(c => c.value === item);

                   return option ? (
                      <Badge
                        key={item}
                        variant="secondary"
                        className="flex items-center gap-2 text-sm rounded-lg border-0 ring ring-red-500 bg-[#E5E7EB] pl-3 py-1.5 pr-2"
                        data-testid="badge"
                      >
                        {option.label}
                        <X
                          className="w-3.5 h-3.5 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSelection(item);
                          }}
                          data-testid="remove-selection"
                        />
                      </Badge>

                   ) : null
                })}
              </div>
            )}
  
            {/* Actions on right side */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
              {selected?.length > 0 && (
                <X
                  className="w-5 h-5 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    clearAll();
                  }}
                  data-testid="clear-all"
                />
              )}
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </PopoverTrigger>
  
        {/* CONTENT */}
        <PopoverContent className="w-(--radix-popper-anchor-width) p-0 bg-white">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder={placeholder}
              onValueChange={(val) => setQuery(val)}
              data-testid="search-input"
            />
  
            <CommandList>
              {loading && (
                <div role="status" className="py-6 text-center text-muted-foreground">
                  Loading…
                </div>
              )}

              {/* {loading && <CommandLoading>Fetching words…</CommandLoading>} */}
  
              {!loading && filteredOptions?.length === 0 && (
                <CommandEmpty data-testid="empty-message">No results found.</CommandEmpty>
              )}
  
              {!loading &&
                filteredOptions.map((option) => {
                  const isSelected = !!selected.find((s) => s === option.value);
  
                  return (
                    <Fragment key={option.value}>
                      <CommandItem
                        className={`flex justify-between cursor-pointer rounded-none py-4 px-5 transition-colors hover:bg-[#E5E7EB] ${isSelected && 'bg-[#E5E7EB]'}`}
                        onSelect={() => toggleSelection(option.value)}
                        role="option"
                      >
                        {option.label}
    
                        <Checkbox checked={isSelected} />
                      </CommandItem>
                      <CommandSeparator className="bg-[#E5E7EB]" />
                    </Fragment>
                  );
                })}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
