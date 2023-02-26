import { FileOutlined, PieChartOutlined, DashboardFilled, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';

import Dashboard from '../../views/dashboard/Dashboard';

const items = [
    {
        key: '1',
        label: 'dashboard',
        icon: <DashboardFilled />,
        routes: '/dashboard',
        children: [
            {
                key: '1-a',
                label: 'absen',
                icon: <PieChartOutlined />,
                routes: '/dashboard/absen',
            }, {
                key: '1-b',
                label: 'data muda mudi',
                icon: <PieChartOutlined />,
                routes: '/dashboard/mm',
                component: Dashboard,
            }
        ]
    },



];

export default items