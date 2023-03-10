import React, { useRef, useState } from 'react';
import { Button, Input, Space, Table } from 'antd';
import { data } from './AcaraData';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Link } from 'react-router-dom';


const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const AcaraView = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });

    const columns = [
      {
        title: 'Nama Acara',
        dataIndex: 'nama',
        key: 'name',
        width: '30%',
        ...getColumnSearchProps('nama'),
      },
      {
        title: 'Tempat',
        dataIndex: 'tempat',
        key: 'tempat',
        width: '30%',
        ...getColumnSearchProps('tempat'),
      },
      {
        title: 'Tanggal',
        dataIndex: 'tanggal',
        sorter: (a, b) => a.umur - b.umur,
        with: "20%"
      },
      {
        title: 'Waktu',
        dataIndex: 'waktu',
        key: 'waktu',
        width: '20%',
        ...getColumnSearchProps('waktu'),
      },
    ];

    return (
        <div>
            <h1 className='font-headline-1 text-[2.5rem] font-[800] text-slate-800 text-center mb-[20px]'>Acara Muda Mudi Jaten</h1>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <Link to="buat">
              <Button type='primary' className="bg-blue-400 font-headline-sub absolute bottom-[30px] right-[30px] flex items-center"><PlusOutlined /> tambah</Button>
            </Link>
        </div>
    );
}

export {AcaraView};
