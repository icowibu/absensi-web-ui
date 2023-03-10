import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { layoutGenerator } from 'react-break';

import items from './side';
import { RTF } from '../../helpers';
import { switchCollapsed } from '../../redux/slice/layoutSlice';

const { Sider } = Layout;

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnMobile = layout.is('mobile');

const Aside = () => {
  const { collapsed } = useSelector((state) => state.layout)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const item = RTF(items)

  return (
    <>
      <OnMobile>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => dispatch(switchCollapsed(value))} trigger={null} style={{ position: "absolute", height: "100%", zIndex: "20" }} className={collapsed ? "left-[-80px]" : ""} >
          {collapsed ?
            <div className='aspect-auto h-fit'>
              <h1 className='font-headline-sub text-[1.5rem] text-center py-[15px] text-white'>MJ</h1>
            </div>
            :
            <div className="aspect-auto">
              <h1 className='font-headline-sub text-[1.5rem] text-white text-center py-[15px]'>MM JATEN</h1>
            </div>

          }

          <Menu
            theme='dark'
            defaultSelectedKeys={['1']} mode="inline" items={items}
            onClick={(e) => {
              let index = item.find(o => o.key == e.key)
              console.log(index)
              navigate(index.routes)
            }}
            className="font-navbar-side font-[400]"
          />
        </Sider>
      </OnMobile>

      <OnAtLeastTablet>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => dispatch(switchCollapsed(value))} trigger={null} style={{ position: "absolute", height: "100%", zIndex: "20" }}>
          {collapsed ?
            <div className='aspect-auto h-fit'>
              <h1 className='font-headline-sub text-[1.5rem] text-center py-[15px] text-white'>MJ</h1>
            </div>
            :
            <div className="aspect-auto">
              <h1 className='font-headline-sub text-[1.5rem] text-white text-center py-[15px]'>MM JATEN</h1>
            </div>

          }

          <Menu
            theme='dark'
            defaultSelectedKeys={['1']} mode="inline" items={items}
            onClick={(e) => {
              let index = item.find(o => o.key == e.key)
              navigate(index.routes)
            }}
            className="font-navbar-side font-[400]"
          />
        </Sider>
      </OnAtLeastTablet>

      <div className='flex-1 bottom-[20px] left-[20px] absolute w-[50px] h-[50px] bg-white rounded-full text-black text-center text-[25px] flex items-center justify-center z-30'>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: () => { dispatch(switchCollapsed(!collapsed)) }
        })}
      </div>
    </>


  )
};
export default Aside;