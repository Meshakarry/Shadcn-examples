import type { ElementType } from "react";
import { type VariantProps } from "class-variance-authority";
import { Tabs, TabsList, TabsTrigger, tabsListVariants } from '@/components/ui/tabs';

interface TabsData {
  label: string
  value: string
  icon?: ElementType
  url?: string
}

type TabsListVariantProps = VariantProps<typeof tabsListVariants>;

interface AppTabsProps extends TabsListVariantProps {
  data: TabsData[]
  onUrlChange?: () => void;
}

export const AppTabs: React.FC<AppTabsProps> = ({
  data,
  size,
  shape,
  onUrlChange
}) => {
  return (
    <Tabs defaultValue={data[0].value}>
      <TabsList size={size} shape={shape}>
        {data.map(({ icon: Icon, label, value, url }) => (
          <TabsTrigger
              key={value}
              value={value}
              size={size}
              asChild
           >
            <a
              href={url}
              role="link"
              onClick={onUrlChange}
            >
              { Icon && <Icon /> }
              {label}
            </a>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
