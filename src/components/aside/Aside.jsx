import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined, MenuFoldOutlined
} from '@ant-design/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { layoutGenerator } from 'react-break';
import { SwitchCollapsed } from '../../redux/actions/layout/LayoutAction';
import items from './side';
import { RTF } from '../../helpers';
import { useNavigate } from 'react-router';

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
  i
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { collapsed } = useSelector((state) => state.LayoutReducer)
  const item = RTF(items)

  return (
    <>
      <OnMobile>

      </OnMobile>

      <OnAtLeastTablet>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => dispatch(SwitchCollapsed(value))} trigger={null} style={{ position: "absolute", height: "100%" }}>
          {collapsed ?
            <div className='aspect-auto h-fit'>
              <h1 className='font-headline-1 text-[1.5rem] text-center py-[15px] text-white'>MJ</h1>
            </div>
            :
            <div className="aspect-auto">
              <h1 className='font-headline-1 text-[1.5rem] text-white text-center py-[15px]'>MM JATEN</h1>
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
        <div className='flex-1 bottom-[20px] left-[20px] absolute w-[50px] h-[50px] bg-white rounded-full text-black text-center text-[25px] flex items-center justify-center'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => { dispatch(SwitchCollapsed(!collapsed)) }
          })}
        </div>
      </OnAtLeastTablet>
    </>


  )
};
export default Aside;