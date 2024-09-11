import React from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const HistoryPage: React.FC = () => {
  return (
    <Layout>
      <Content className="container">
        <Title className="page-title">分享历史</Title>
        <div className="card">{/* 这里添加分享历史的具体实现 */}</div>
      </Content>
    </Layout>
  );
};

export default HistoryPage;
