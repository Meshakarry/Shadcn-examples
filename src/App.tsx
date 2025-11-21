import {
  ArrowRightLeftIcon,
  CalendarClockIcon,
  CalendarX2Icon,
  ChartNoAxesCombinedIcon,
  ChartPieIcon,
  ChartSplineIcon,
  ClipboardListIcon,
  Clock9Icon,
  CrownIcon,
  FacebookIcon,
  HashIcon,
  InstagramIcon,
  LanguagesIcon,
  LinkedinIcon,
  SettingsIcon,
  SquareActivityIcon,
  TriangleAlertIcon,
  Info,
  TruckIcon,
  TwitterIcon,
  Eye,
  Search,
  Undo2Icon,
  UsersIcon,
  Plus
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

import {
  InputGroup,
  InputGroupAddon,
  // InputGroupButton,
  InputGroupInput,
  // InputGroupText,
  // InputGroupTextarea,
} from "@/components/ui/input-group"

import LanguageDropdown from '@/components/blocks/dropdown-language'
import ProductInsightsCard from '@/components/blocks/widget-product-insights'
import ProfileDropdown from '@/components/blocks/dropdown-profile'
import SalesMetricsCard from '@/components/blocks/chart-sales-metrics'
import StatisticsCard from '@/components/blocks/statistics-card-01'
import TotalEarningCard from '@/components/blocks/widget-total-earning'
import TransactionDatatable, { type Item } from '@/components/blocks/datatable-transaction'
import { Switch } from './components/ui/switch'

// Statistics card data
const StatisticsCardData = [
  {
    icon: <TruckIcon className='size-4' />,
    value: '42',
    title: 'Shipped Orders',
    changePercentage: '+18.2%'
  },
  {
    icon: <TriangleAlertIcon className='size-4' />,
    value: '8',
    title: 'Damaged Returns',
    changePercentage: '-8.7%'
  },
  {
    icon: <CalendarX2Icon className='size-4' />,
    value: '27',
    title: 'Missed Delivery Slots',
    changePercentage: '+4.3%'
  }
]

// Earning data for Total Earning card
const earningData = [
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/zipcar.png',
    platform: 'Zipcar',
    technologies: 'Vuejs & HTML',
    earnings: '-$23,569.26',
    progressPercentage: 75
  },
  {
    img: 'https://cdn.shadcnstudio.com/ss-assets/blocks/dashboard-application/widgets/bitbank.png',
    platform: 'Bitbank',
    technologies: 'Figma & React',
    earnings: '-$12,650.31',
    progressPercentage: 25
  }
]

// Transaction table data
const transactionData: Item[] = [
  {
    id: '1',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    avatarFallback: 'JA',
    name: 'Jack Alfredo',
    amount: 316.0,
    status: 'paid',
    email: 'jack@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '2',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    avatarFallback: 'MG',
    name: 'Maria Gonzalez',
    amount: 253.4,
    status: 'pending',
    email: 'maria.g@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '3',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    avatarFallback: 'JD',
    name: 'John Doe',
    amount: 852.0,
    status: 'paid',
    email: 'john.doe@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '4',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png',
    avatarFallback: 'EC',
    name: 'Emily Carter',
    amount: 889.0,
    status: 'pending',
    email: 'emily.carter@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '5',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    avatarFallback: 'DL',
    name: 'David Lee',
    amount: 723.16,
    status: 'paid',
    email: 'david.lee@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '6',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    avatarFallback: 'SP',
    name: 'Sophia Patel',
    amount: 612.0,
    status: 'failed',
    email: 'sophia.patel@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '7',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png',
    avatarFallback: 'RW',
    name: 'Robert Wilson',
    amount: 445.25,
    status: 'paid',
    email: 'robert.wilson@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '8',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    avatarFallback: 'LM',
    name: 'Lisa Martinez',
    amount: 297.8,
    status: 'processing',
    email: 'lisa.martinez@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '9',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-9.png',
    avatarFallback: 'MT',
    name: 'Michael Thompson',
    amount: 756.9,
    status: 'paid',
    email: 'michael.thompson@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '10',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-10.png',
    avatarFallback: 'AJ',
    name: 'Amanda Johnson',
    amount: 189.5,
    status: 'pending',
    email: 'amanda.johnson@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '11',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png',
    avatarFallback: 'KB',
    name: 'Kevin Brown',
    amount: 1024.75,
    status: 'paid',
    email: 'kevin.brown@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '12',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    avatarFallback: 'SD',
    name: 'Sarah Davis',
    amount: 367.2,
    status: 'failed',
    email: 'sarah.davis@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '13',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-13.png',
    avatarFallback: 'CG',
    name: 'Christopher Garcia',
    amount: 598.45,
    status: 'processing',
    email: 'christopher.garcia@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '14',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png',
    avatarFallback: 'JR',
    name: 'Jennifer Rodriguez',
    amount: 821.3,
    status: 'paid',
    email: 'jennifer.rodriguez@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '15',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-15.png',
    avatarFallback: 'DM',
    name: 'Daniel Miller',
    amount: 156.75,
    status: 'pending',
    email: 'daniel.miller@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '16',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    avatarFallback: 'NW',
    name: 'Nicole White',
    amount: 934.1,
    status: 'paid',
    email: 'nicole.white@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '17',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png',
    avatarFallback: 'AL',
    name: 'Anthony Lopez',
    amount: 412.85,
    status: 'failed',
    email: 'anthony.lopez@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '18',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-18.png',
    avatarFallback: 'MH',
    name: 'Michelle Harris',
    amount: 675.5,
    status: 'processing',
    email: 'michelle.harris@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '19',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-19.png',
    avatarFallback: 'JC',
    name: 'James Clark',
    amount: 289.95,
    status: 'paid',
    email: 'james.clark@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '20',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png',
    avatarFallback: 'RL',
    name: 'Rachel Lewis',
    amount: 1156.25,
    status: 'pending',
    email: 'rachel.lewis@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '21',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-21.png',
    avatarFallback: 'TY',
    name: 'Thomas Young',
    amount: 543.6,
    status: 'paid',
    email: 'thomas.young@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '22',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-22.png',
    avatarFallback: 'SB',
    name: 'Stephanie Brown',
    amount: 789.3,
    status: 'processing',
    email: 'stephanie.brown@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '23',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-23.png',
    avatarFallback: 'BM',
    name: 'Brandon Moore',
    amount: 425.75,
    status: 'failed',
    email: 'brandon.moore@shadcnstudio.com',
    paidBy: 'visa'
  },
  {
    id: '24',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-24.png',
    avatarFallback: 'KT',
    name: 'Kelly Taylor',
    amount: 1203.5,
    status: 'paid',
    email: 'kelly.taylor@shadcnstudio.com',
    paidBy: 'mastercard'
  },
  {
    id: '25',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-25.png',
    avatarFallback: 'MA',
    name: 'Mark Anderson',
    amount: 356.2,
    status: 'pending',
    email: 'mark.anderson@shadcnstudio.com',
    paidBy: 'visa'
  }
]

const DashboardShell = () => {
  return (
    <div className='flex min-h-dvh w-full'>
      <SidebarProvider>
        {/* <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ChartNoAxesCombinedIcon />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className='bg-primary/10 rounded-full'>5</SidebarMenuBadge>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Pages</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ChartSplineIcon />
                        <span>Content Performance</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <UsersIcon />
                        <span>Audience Insight</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ChartPieIcon />
                        <span>Engagement Metrics</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <HashIcon />
                        <span>Hashtag Performance</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className='bg-primary/10 rounded-full'>3</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ArrowRightLeftIcon />
                        <span>Competitor Analysis</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <Clock9Icon />
                        <span>Campaign Tracking</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <ClipboardListIcon />
                        <span>Sentiment Tracking</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <CrownIcon />
                        <span>Influencer</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Supporting Features</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <SquareActivityIcon />
                        <span>Real Time Monitoring</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <CalendarClockIcon />
                        <span>Schedule Post & Calendar</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <Undo2Icon />
                        <span>Report & Export</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <SettingsIcon />
                        <span>Settings & Integrations</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href='#'>
                        <UsersIcon />
                        <span>User Management</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar> */}
        <div className='flex flex-1 flex-col'>
          <header className='bg-card sticky top-0 z-50 border-b'>
            <div className='mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 sm:px-6'>
              <div className='flex items-center gap-4'>
                <SidebarTrigger className='[&_svg]:!size-5' />
                <Separator orientation='vertical' className='hidden !h-4 sm:block' />
                <Breadcrumb className='hidden sm:block'>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Free</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div className='flex items-center gap-1.5'>
                <LanguageDropdown
                  trigger={
                    <Button variant='ghost' size='icon'>
                      <LanguagesIcon />
                    </Button>
                  }
                />
                <ProfileDropdown
                  trigger={
                    <Button variant='ghost' size='icon' className='size-9.5'>
                      <Avatar className='size-9.5 rounded-md'>
                        <AvatarImage src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png' />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />
              </div>
            </div>
          </header>
          <main className='mx-auto size-full max-w-7xl flex-1 px-4 py-6 sm:px-6'>
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
              {/* Statistics Cards */}
              <div className='col-span-full grid gap-6 sm:grid-cols-3 md:max-lg:grid-cols-1'>
                {StatisticsCardData.map((card, index) => (
                  <StatisticsCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                    changePercentage={card.changePercentage}
                  />
                ))}
              </div>

              <div className='grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2'>
                {/* Product Insights Card */}
                <ProductInsightsCard className='justify-between gap-3 [&>[data-slot=card-content]]:space-y-5' />

                {/* Total Earning Card */}
                <TotalEarningCard
                  title='Total Earning'
                  earning={24650}
                  trend='up'
                  percentage={10}
                  comparisonText='Compare to last year ($84,325)'
                  earningData={earningData}
                  className='justify-between gap-5 sm:min-w-0 [&>[data-slot=card-content]]:space-y-7'
                />
              </div>

              <SalesMetricsCard className='col-span-full xl:col-span-2 [&>[data-slot=card-content]]:space-y-6' />

              <Card className='col-span-full w-full py-0'>
                <TransactionDatatable data={transactionData} />
              </Card>
            </div>

            {/* ADD A POSSIBILITY TO HAVE ROUNDED BUTTON AND ICON VARIANT WITH THE SIZES RANGE(xs, sm, default, lg) */}

            <div className="my-3 grid gap-8 md:grid-cols-2">
                {/* Sizes */}
                <div className="rounded-2xl border p-6 space-y-4">
                  <h2 className="text-lg font-semibold">Button Sizes</h2>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="default">Default</Button>
                    <Button size="xs">XS</Button>
                    <Button size="sm">SM</Button>
                    <Button size="lg">LG</Button>
                    <Button size="icon"><Eye /></Button>
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
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="ghost">Ghost</Button>
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
                  <h2 className="text-lg font-semibold">Icon only</h2>

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

                    <Button size="xs" variant="link" pill>Rounded extra small</Button>
                    <Button size="sm" variant="link" pill>Rounded small</Button>
                    <Button variant="link" pill>Rounded default</Button>
                    <Button size="lg" variant="link" pill>Rounded large</Button>

                    <Button size="xs" variant="destructive" pill>Rounded extra small</Button>
                    <Button size="sm" variant="destructive" pill>Rounded small</Button>
                    <Button variant="destructive" pill>Rounded default</Button>
                    <Button size="lg" variant="destructive" pill>Rounded large</Button>

                    <Button size="xs" variant="ghost" pill>Rounded extra small</Button>
                    <Button size="sm" variant="ghost" pill>Rounded small</Button>
                    <Button variant="ghost" pill>Rounded default</Button>
                    <Button size="lg" variant="ghost" pill>Rounded large</Button>
                  </div>
                </div>

                {/* Variants disabled */}
                <div className="rounded-2xl border p-6 space-y-4">
                  <h2 className="text-lg font-semibold">Variants disabled</h2>

                  <div className="flex flex-wrap items-center gap-4">
                    <Button variant="default" disabled>Primary</Button>
                    <Button variant="secondary" disabled>Secondary</Button>
                    <Button variant="outline" disabled>Outline</Button>
                    <Button variant="link" disabled>Link</Button>
                    <Button variant="destructive" disabled>Destructive</Button>
                    <Button variant="ghost" disabled>Ghost</Button>
                  </div>
                </div>
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
                    Add Collaboration
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Add Collaboration</SheetTitle>
                    {/* <SheetDescription>
                      Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription> */}
                  </SheetHeader>
                  {/* try to make this globally accessible(this flex-1 wrapper should somehow appears inside SheetBody) */}
                  <div className="flex flex-col gap-3.5 flex-1">
                    <div>
                      <h4 className="mb-4 font-bold text-xl leading-tight">Add new Collaboration</h4>
                      <p className="text-neutral-600 text-sm">
                        Enter the collaboration details below to create a new record. Ensure all information is correct before saving.
                      </p>
                    </div>

                    <form>
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
                          <FieldLabel htmlFor="project">
                            <span>Project Name</span>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="link">
                                  <Info />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>This is content in a tooltip.</TooltipContent>
                            </Tooltip>
                          </FieldLabel>

                          <Input
                            id="project"
                            placeholder="Evil Rabbit"
                            required
                          />
                        </Field>

                        <FieldGroup className="grid grid-cols-2 gap-6">
                          <Field>
                            <FieldLabel htmlFor="front-desk-phone">
                              <span>Front desk Phone Number</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="link">
                                    <Info />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>This is content in a tooltip.</TooltipContent>
                              </Tooltip>
                            </FieldLabel>

                            <Input
                              id="front-desk-phone"
                              placeholder="Evil Rabbit"
                              required
                            />
                          </Field>

                          <Field>
                            <FieldLabel htmlFor="front-desk-email">
                              <span>Front desk Email</span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="link">
                                    <Info />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>This is content in a tooltip.</TooltipContent>
                              </Tooltip>
                            </FieldLabel>

                            <Input
                              id="front-desk-email"
                              placeholder="Evil Rabbit"
                              required
                              type="email"
                            />
                          </Field>
                        </FieldGroup>
                      </FieldGroup>
                    </form>
                  </div>
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
          </main>
          <footer>
            <div className='text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6'>
              <p className='text-sm text-balance max-sm:text-center'>
                {`©${new Date().getFullYear()}`}{' '}
                <a href='#' className='text-primary'>
                  Shadcn/studio
                </a>
                , Made for better web design
              </p>
              <div className='flex items-center gap-5'>
                <a href='#'>
                  <FacebookIcon className='size-4' />
                </a>
                <a href='#'>
                  <InstagramIcon className='size-4' />
                </a>
                <a href='#'>
                  <LinkedinIcon className='size-4' />
                </a>
                <a href='#'>
                  <TwitterIcon className='size-4' />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  )
}

export default function App() {
  return (
    <DashboardShell />
  )
}
