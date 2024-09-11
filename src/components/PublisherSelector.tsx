import React, { useEffect } from "react";
import { Avatar, Tooltip, Space, Typography } from "antd";
import { useDispatch, useSelector } from "umi";
import { Publisher } from "@/models/publisher";

const { Text } = Typography;

const PublisherSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { publishers, selectedPublishers } = useSelector(
    (state: any) => state.publisher
  );

  useEffect(() => {
    dispatch({ type: "publisher/fetchPublishers" });
  }, [dispatch]);

  const togglePublisher = (publisherCode: string) => {
    dispatch({
      type: "publisher/updateSelectedPublishers",
      payload: [publisherCode],
    });
  };

  return (
    <Space wrap size="large" align="center">
      {publishers.map((publisher: Publisher) => (
        <div key={publisher.code} style={{ textAlign: "center" }}>
          <Tooltip
            title={`${publisher.name} (${
              publisher.status === 1 ? "在线" : "离线"
            })`}
          >
            <Avatar
              size={64}
              src={publisher.avatar}
              style={{
                cursor: "pointer",
                border: selectedPublishers.includes(publisher.code)
                  ? "3px solid #1890ff"
                  : "none",
                opacity: publisher.status === 1 ? 1 : 0.5,
                marginBottom: 8,
              }}
              onClick={() => togglePublisher(publisher.code)}
            />
          </Tooltip>
          <Text
            style={{
              display: "block",
              width: 64,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {publisher.name}
          </Text>
        </div>
      ))}
    </Space>
  );
};

export default PublisherSelector;
