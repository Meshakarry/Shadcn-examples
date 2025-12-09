import { useState } from 'react'
import {
  Eye,
  Search,
  Plus,
  Minus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from "@/components/ui/input"
import FileInput  from "@/components/FileInput"
import TooltipLabel from '@/components/TooltipLabel'
import { Switch } from '@/components/ui/switch'
import MultiSelectCombobox from '@/components/MultiSelectCombobox'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetBody,
} from "@/components/ui/sheet"

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "vue",
    label: "Vue",
  },
  {
    value: "vuetify",
    label: "Vuetify",
  },
]

const users = [
  {
    value: 'matt-lacey',
    label: 'Matt Lacey'
  },
  {
    value: 'matt-lacey1',
    label: 'Matt Lacey1'
  },
  {
    value: 'matt-lacey2',
    label: 'Matt Lacey2'
  }
]

export default function DesignSystem () {
  const [role , setRole] = useState('');
  const [file , setFile] = useState<File | null>();
  const addCollaboration = () => {
    console.log('submitted!!')
  }

  return (
    <div>
      <div className="my-3 grid gap-8 md:grid-cols-2">
               {/* Sizes */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Button Sizes</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="default">Default</Button>
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="lg">LG</Button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="default"><Eye /> Default</Button>
            <Button size="xs"><Eye /> XS</Button>
            <Button size="sm"><Eye /> SM</Button>
            <Button size="lg"><Eye /> LG</Button>
          </div>
        </div>

        {/* Variants */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Variants</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="ghost-muted">Ghost muted</Button>
            <Button variant="link">Link</Button>

          </div>
        </div>

        {/* Icon only variants */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Icon only</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs" iconOnly><Eye /></Button>
            <Button size="sm" iconOnly><Eye /></Button>
            <Button size="default" iconOnly><Eye /></Button>
            <Button size="lg" iconOnly><Eye /></Button>

            <Button size="xs" iconOnly pill><Eye /></Button>
            <Button size="sm" iconOnly pill><Eye /></Button>
            <Button size="default" iconOnly pill><Eye /></Button>
            <Button size="lg" iconOnly pill><Eye /></Button>
          </div>
        </div>

        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Rounded buttons</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs" pill>Rounded extra small</Button>
            <Button size="sm" pill>Rounded small</Button>
            <Button pill>Rounded default</Button>
            <Button size="lg" pill>Rounded large</Button>

            <Button size="xs" variant="secondary" pill>Rounded extra small</Button>
            <Button size="sm" variant="secondary" pill>Rounded small</Button>
            <Button variant="secondary" pill>Rounded default</Button>
            <Button size="lg" variant="secondary" pill>Rounded large</Button>

            <Button size="xs" variant="outline" pill>Rounded extra small</Button>
            <Button size="sm" variant="outline" pill>Rounded small</Button>
            <Button variant="outline" pill>Rounded default</Button>
            <Button size="lg" variant="outline" pill>Rounded large</Button>

            <Button size="xs" variant="ghost" pill>Rounded extra small</Button>
            <Button size="sm" variant="ghost" pill>Rounded small</Button>
            <Button variant="ghost" pill>Rounded default</Button>
            <Button size="lg" variant="ghost" pill>Rounded large</Button>

            <Button size="xs" variant="destructive" pill>Rounded extra small</Button>
            <Button size="sm" variant="destructive" pill>Rounded small</Button>
            <Button variant="destructive" pill>Rounded default</Button>
            <Button size="lg" variant="destructive" pill>Rounded large</Button>

            <Button size="xs" variant="ghost-muted" pill>Rounded extra small</Button>
            <Button size="sm" variant="ghost-muted" pill>Rounded small</Button>
            <Button variant="ghost-muted" pill>Rounded default</Button>
            <Button size="lg" variant="ghost-muted" pill>Rounded large</Button>

            <Button size="xs" variant="link" pill>Rounded extra small</Button>
            <Button size="sm" variant="link" pill>Rounded small</Button>
            <Button variant="link" pill>Rounded default</Button>
            <Button size="lg" variant="link" pill>Rounded large</Button>
          </div>
        </div>

        {/* Variants disabled */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Variants disabled</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="outline" disabled>Outline</Button>
            <Button variant="ghost" disabled>Ghost</Button>
            <Button variant="destructive" disabled>Destructive</Button>
            <Button variant="ghost-muted" disabled>Ghost muted</Button>
            <Button variant="link" disabled>Link</Button>
          </div>
        </div>
      </div>

      <div className="my-3 grid gap-8 md:grid-cols-2">
        {/* Variants */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Badge variants</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="default">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="positive">Positive</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="neutral">Neutral</Badge>

            <Badge variant="default" pill>Primary</Badge>
            <Badge variant="secondary" pill>Secondary</Badge>
            <Badge variant="outline" pill>Outline</Badge>
            <Badge variant="positive" pill>Positive</Badge>
            <Badge variant="destructive" pill>Destructive</Badge>
            <Badge variant="neutral" pill>Neutral</Badge>
          </div>
        </div>
      </div>

      <div className="my-3 grid gap-8 md:grid-cols-2">
        {/* Variants */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Input variants</h2>

          <div className="flex flex-wrap items-center gap-4">
            <Input />
            <Input placeholder="placeholder" />
            <Input value="Value" onChange={() => console.log('value updated')} />
            <Input value="" required onChange={() => console.log('value updated')} />
            <Input value="Disabled input" disabled onChange={() => console.log('value updated')} />
            <Input value="Rounded input" pill onChange={() => console.log('value updated')} />
          </div>
        </div>
      </div>

      <div className="my-3 grid gap-8 md:grid-cols-2">
        {/* Variants */}
        <div className="rounded-2xl border p-6 space-y-4">
          <h2 className="text-lg font-semibold">File variants</h2>

          <div className="flex flex-wrap items-center gap-4">
            <FileInput size="xs" value={file?.name} onValueChange={(f) => setFile(f)} />
            <FileInput size="xs" pill />
            <FileInput size="sm" />
            <FileInput size="sm" pill />
            <FileInput />
            <FileInput pill />
            <FileInput size="lg" />
            <FileInput size="lg" required />
            <FileInput pill size="lg" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 mb-10">
        <InputGroup className="max-w-80">
          <InputGroupInput placeholder="Search by name or email" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm">
              <Plus />
              Add Collaboration
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Collaboration</SheetTitle>
            </SheetHeader>
            <SheetBody>
              <div>
                <h4 className="mb-4 font-bold text-xl leading-tight">Add new Collaboration</h4>
                <p className="text-neutral-600 text-sm">
                  Enter the collaboration details below to create a new record. Ensure all information is correct before saving.
                </p>
              </div>

              <form action={addCollaboration}>
                <FieldGroup className="flex flex-col flex-1 gap-3.5">
                  <Field>
                    <InputGroup>
                      <InputGroupInput placeholder="Active" required />
                      <InputGroupAddon align="inline-end">
                        <Switch />
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>

                  <Field>
                    <TooltipLabel label="Project Name" description="This is content in a tooltip." />

                    <Input
                      id="project"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>

                  <FieldGroup className="grid grid-cols-2 gap-6">
                    <Field>
                      <TooltipLabel label="Front desk Phone Number" description="This is content in a tooltip." />

                      <Input
                        id="front-desk-phone"
                        placeholder="Evil Rabbit"
                        required
                      />
                    </Field>

                    <Field>
                      <TooltipLabel label="Front desk Email" description="This is content in a tooltip." />

                      <Input
                        id="front-desk-email"
                        placeholder="Evil Rabbit"
                        required
                        type="email"
                      />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel>Category of sector</FieldLabel>
                    <MultiSelectCombobox options={frameworks} />
                  </Field>

                  <Field>
                    <FieldLabel>
                      Project ID
                    </FieldLabel>

                    <Input
                      id="project-id"
                      placeholder="Project id (CRM)"
                      required
                    />
                  </Field>

                  <FieldGroup className="gap-2">
                    <TooltipLabel label="Persons" description="This is content in a tooltip." />
                    <div className="flex flex-col gap-3 -mt-2">
                      <FieldGroup className="flex-row items-center gap-3">
                        <Field className="flex-1">
                          <Input
                            id="front-desk-email"
                            placeholder="Evil Rabbit"
                            required
                            className="flex-1 min-h-9"
                          />
                        </Field>

                        <div className="flex items-center gap-3">
                          <Select>
                            <SelectTrigger id="person-type">
                              <SelectValue placeholder="type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="owner">
                                  Owner
                                </SelectItem>

                                <SelectItem value="organization">
                                  Organization
                                </SelectItem>

                                <SelectItem value="collaboration">
                                  Collaboration
                                </SelectItem>
                            </SelectContent>
                          </Select>

                          <Button variant="outline" iconOnly pill size="xs" className="shadow-sm">
                            <Plus />
                          </Button>
                        </div>
                      </FieldGroup>
                    </div>
                  </FieldGroup>

                  <FieldGroup className="gap-2">
                    <TooltipLabel label="Organisations" description="This is content in a tooltip." />
                    <div className="flex flex-col gap-3 -mt-2">
                      <FieldGroup className="flex-row items-center gap-3">
                        <Field className="flex-1">
                          <Input
                            id="front-desk-email"
                            placeholder="Evil rabbit"
                            required
                            className="flex-1 min-h-9"
                          />
                        </Field>

                        <div className="flex items-center gap-3">
                          <Select>
                            <SelectTrigger id="person-type">
                              <SelectValue placeholder="type" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="owner">
                                  Owner
                                </SelectItem>

                                <SelectItem value="organization">
                                  Organization
                                </SelectItem>

                                <SelectItem value="collaboration">
                                  Collaboration
                                </SelectItem>
                            </SelectContent>
                          </Select>

                          <Button variant="outline" iconOnly pill size="xs" className="shadow-sm">
                            <Minus />
                          </Button>
                        </div>
                      </FieldGroup>
                    </div>
                  </FieldGroup>

                  <Field>
                    <TooltipLabel label="Category of sector" description="Tooltip contentao" />
                    <MultiSelectCombobox options={users} />
                  </Field>

                  <Field>
                    <FileInput required value={file?.name} onValueChange={(e) => setFile(e)}/>
                  </Field>

                </FieldGroup>
              </form>
            </SheetBody>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">
                  Cancel
                </Button>
              </SheetClose>

              <Button type="submit" onClick={addCollaboration}>
                Add
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex items-center justify-between px-4">
        <InputGroup className="max-w-80">
          <InputGroupInput placeholder="Search by name or email" />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="sm">
              <Plus />
              Add User
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add User</SheetTitle>
            </SheetHeader>
            <SheetBody>
              <div>
                <h4 className="mb-4 font-bold text-xl leading-tight">Register a New User</h4>
                <p className="text-neutral-600 text-sm">
                  Provide accurate information to register a new user in the system. Ensure all required fields are completed before saving.
                </p>
              </div>

              <form>
                <FieldGroup className="flex flex-col flex-1 gap-3.5">
                  <FieldGroup className="grid grid-cols-2 gap-6">
                    <Field>
                      <TooltipLabel label="First Name" description="This is content in a tooltip." />

                      <Input
                        id="first-name"
                        placeholder="Evil Rabbit"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="last-name">Last Name</FieldLabel>

                      <Input
                        id="last-name"
                        placeholder="Evil Rabbit"
                        required
                      />
                    </Field>
                  </FieldGroup>
                  <Field>
                    <TooltipLabel label="Phone Nmber" description="This is content in a tooltip." />

                    <Input
                      id="phone"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Email Adress</FieldLabel>
                    <Input
                      id="email"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>

                  <Field>
                    <TooltipLabel label="Role" description="Select role" />

                    <Select defaultValue={role} onValueChange={setRole}>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select user role" />
                      </SelectTrigger>

                      <SelectContent>
                          <SelectItem value="admin">
                            Super admin
                          </SelectItem>

                          <SelectItem value="centre-staff">
                            Centre staff
                          </SelectItem>

                          <SelectItem value="research-provider">
                            Research provider
                          </SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  { role === 'research-provider' && (
                    <FieldGroup>
                      <Field>
                        <FieldLabel>Organization</FieldLabel>
                        <MultiSelectCombobox options={frameworks} />
                      </Field>

                      <Field>
                        <FieldLabel>Collaboration</FieldLabel>
                        <MultiSelectCombobox options={frameworks} />
                      </Field>
                    </FieldGroup>
                  )
                }

                </FieldGroup>
              </form>
            </SheetBody>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">
                  Cancel
                </Button>
              </SheetClose>

              <Button type="submit">
                Add
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
