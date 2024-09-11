import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "inherit" }}>
      <Content className="container">{children}</Content>
    </Layout>
  );
};

export default PageLayout;
