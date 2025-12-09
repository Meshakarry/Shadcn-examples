import { AppTabs } from '@/components/AppTabs';

export default function Test2() {
  return (
  <AppTabs 
    data={
        [
          { label: 'Test1', value: 'test-1', url: '/test-1'},
          { label: 'Test2', value: 'test-2', url: '/test-2'},
          { label: 'Test3', value: 'test-3', url: '/test-3'},
          { label: 'Test4', value: 'test-4', url: '/test-4'},
        ]
      } 
    />
  )
}
