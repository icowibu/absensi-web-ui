import { UserOutlined, WhatsAppOutlined, SmileOutlined } from '@ant-design/icons';
import { Input, Cascader, Radio, DatePicker, Space, Button } from 'antd';


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

const Anggota = () => {
  return (
    <div>
      <h1 className="font-headline-1 text-[2.5rem] font-[800] text-slate-800 text-center">Tambah Anggota</h1>
      <div className="md:w-[50%] h-full bg-white rounded-[9px] mx-auto block py-[50px] px-[30px]">
        <form action="" className="flex flex-col gap-[35px]">

          <Input placeholder="Nama" prefix={<UserOutlined />} />
          <Input placeholder="No Telp" prefix={<WhatsAppOutlined />} />
          <Input placeholder="Hobi" prefix={<SmileOutlined />} />

          <div className='flex justify-center gap-[20px]'>
            <Cascader options={DAFTAR_KELOMPOK} onChange={handleKelompok} placeholder="Kelompok" />
            <Radio.Group onChange={handleGender} defaultValue="a" className='shrink-0 gap-[20px]'>
              <Radio.Button value="laki-laki">laki-laki</Radio.Button>
              <Radio.Button value="perempuan">perempuan</Radio.Button>
            </Radio.Group>
            <Space direction="vertical">
              <DatePicker onChange={handleTanggal} placeholder="tanggal lahir" />
            </Space>
          </div>

          <Space className='mx-auto'>
            <Button type='primary' className='text-white bg-blue-400'>submit</Button>
          </Space>
        </form>
      </div>
    </div>
  );
}

export { Anggota }