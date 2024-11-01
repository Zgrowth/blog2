import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Breadcrumb, Layout, ConfigProvider, theme } from 'antd';
import HeadContent from './components/HeadContent';
import routers from "./routers";
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  // 使用 useRoutes 获取路由组件
  const element = useRoutes(routers);
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: '#00b96b',
        },
        cssVar: true
      }}
    >
      <Layout>
        <Header className="layout-header">
          <HeadContent />
        </Header>
        <Content>
          {/* 路由组件展示位置，fallback 属性值可以时组件 */}
          <Suspense fallback={<div>loading...</div>}>{element}</Suspense>
        </Content>
        <Footer className="layout-footer">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
