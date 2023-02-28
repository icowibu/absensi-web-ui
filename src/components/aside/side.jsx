import Icon, { CalendarFilled, StockOutlined, DiffFilled, FileAddFilled, EditFilled, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { PeopleIcon } from '../../assets/icon';

import Dashboard from '../../views/dashboard/Dashboard';

const items = [
    {
        key: '1',
        label: 'dashboard',
        icon: <StockOutlined />,
        routes: '/dashboard',
        children: [
            {
                key: '1-a',
                label: 'absen',
                icon: <EditFilled />,
                routes: '/dashboard/absen',
            }
        ]
    },
    {
        key: '2',
        label: 'file',
        icon: <FileAddFilled />,
        routes: '/file',
        children: [
            {
                key: '2-a',
                label: 'tambah acara',
                icon: <CalendarFilled />,
                routes: '/file/acara',
            },
            {
                key: '2-b',
                label: 'tambah anggota',
                icon: <DiffFilled />,
                routes: '/file/anggota',
            }
        ]
    },



];

export default items