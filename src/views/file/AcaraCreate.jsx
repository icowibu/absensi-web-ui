import { UserOutlined, WhatsAppOutlined, SmileOutlined } from '@ant-design/icons';
import { Input, TimePicker, DatePicker, Space, Button } from 'antd';


const DAFTAR_KELOMPOK = [
    {
        value: 'Al-hikmah',
        label: 'Al-hikmah',
    },
    {
        value: 'Jati Endah',
        label: 'Jati Endah',
    },
    {
        value: 'Giri Mekar',
        label: 'Giri Mekar',
    },
    {
        value: 'husnudzon billah',
        label: 'husnudzon billah',
    },
];

const handleKelompok = (value) => {
    console.log(value);
};

const handleGender = (value) => {
    console.log(value);
};

const handleTanggal = (value) => {
    console.log(value);
};

const AcaraCreate = () => {
    return (
        <div>
            <h1 className="font-headline-1 text-[2.5rem] font-[800] text-slate-800 text-center">Tambah Acara</h1>
            <div className="md:w-[50%] h-full bg-white rounded-[9px] mx-auto block py-[50px] px-[30px]">
                <form action="" className="flex flex-col gap-[35px]">

                    <Input placeholder="Nama Acara" />
                    <Input placeholder="Tempat" />
                    <DatePicker onChange={handleTanggal} placeholder="hari" />
                    <TimePicker.RangePicker />

                    <Space className='mx-auto'>
                        <Button type='primary' className='text-white bg-blue-400'>submit</Button>
                    </Space>
                </form>
            </div>
        </div>
    );
}

export { AcaraCreate }