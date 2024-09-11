import React from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

const PublishersPage: React.FC = () => {
  return (
    <Layout>
      <Content className="container">
        <Title className="page-title">发布者管理</Title>
        <div className="card">{/* 这里添加发布者管理的具体实现 */}</div>
      </Content>
    </Layout>
  );
};

export default PublishersPage;
