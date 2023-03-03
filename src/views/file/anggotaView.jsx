import React from 'react';
import { Table } from 'antd';
import {columns, data} from "./anggotaData"

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const AnggotaView = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    );
}

export default AnggotaView;
