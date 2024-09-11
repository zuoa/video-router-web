import React from "react";
import { Typography, Button, Space } from "antd";
import { HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { history } from "umi";
import PageLayout from "@/components/PageLayout";
import ShareForm from "@/components/ShareForm";

const { Title } = Typography;

const IndexPage: React.FC = () => {
  const goToHistory = () => {
    history.push("/history");
  };

  const goToPublishers = () => {
    history.push("/publishers");
  };

  return (
    <PageLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <Title className="page-title" style={{ margin: 0 }}>
          视频分享
        </Title>
        <Space>
          <Button
            type="text"
            icon={<UserOutlined />}
            onClick={goToPublishers}
            size="large"
          >
            发布者管理
          </Button>
          <Button
            type="text"
            icon={<HistoryOutlined />}
            onClick={goToHistory}
            size="large"
          >
            分享历史
          </Button>
        </Space>
      </div>
      <div className="card">
        <ShareForm />
      </div>
    </PageLayout>
  );
};

export default IndexPage;
