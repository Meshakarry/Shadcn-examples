import HomePage from '@/pages/HomePage';
import TestDashboardShell from '@/pages/TestDashboardShell';
import DesignSystem from '@/pages/DesignSystem';

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
]
