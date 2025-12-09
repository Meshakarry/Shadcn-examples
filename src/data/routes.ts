import HomePage from '@/pages/HomePage';
import TestDashboardShell from '@/pages/TestDashboardShell';
import DesignSystem from '@/pages/DesignSystem';
import Test1 from '@/pages/Test1';
import Test2 from '@/pages/Test2';
import Test3 from '@/pages/Test3';
import Test4 from '@/pages/Test4';

export const routes = [
  {
    id: 'home',
    url: '/',
    label: 'Home',
		component: HomePage,
  },
  {
    id: 'test-dashboard',
    url: '/test-dashboard',
    label: 'Test Dashboard',
		component: TestDashboardShell,
  },
  {
    id: 'design-system',
    url: '/design-system',
    label: 'Design system',
		component: DesignSystem
  },
  {
    id: 'test-1',
    url: '/test-1',
    label: 'Label',
		component: Test1,
  },
  {
    id: 'test-2',
    url: '/test-2',
    label: 'Label',
		component: Test2,
  },
  {
    id: 'test-3',
    url: '/test-3',
    label: 'Home',
		component: Test3,
  },
  {
    id: 'test-4',
    url: '/test-4',
    label: 'Home',
		component: Test4,
  },
]
