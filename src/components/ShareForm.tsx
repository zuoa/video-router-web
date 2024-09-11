import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "umi";
import PublisherSelector from "./PublisherSelector";

const ShareForm: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedPublishers } = useSelector((state: any) => state.publisher);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    dispatch({
      type: "share/submitShare",
      payload: { ...values, publishers: selectedPublishers },
    });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      style={{ width: "100%" }}
    >
      <Form.Item
        name="shareText"
        label="分享内容"
        rules={[{ required: true, message: "请输入要分享的视频文本" }]}
      >
        <Input.TextArea placeholder="输入要分享的视频文本" rows={4} />
      </Form.Item>
      <Form.Item label="选择目标发布者">
        <PublisherSelector />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          分享
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ShareForm;
