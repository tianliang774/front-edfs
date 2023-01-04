import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Upload, Button } from "antd";
import moment from "moment";
import html from '../api/config'

export default function NewFile() {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    html.postFormData("api/v1/put",values)
  };
  const uploadArmProps = {
    name: "file",
    headers: {},
    showUploadList: false,
    maxCount: 1,
    beforeUpload: (file) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (result) => {
        form.setFieldsValue({
          date: moment().format("DD-MM-YYYY"),
          content: result.target.result,
        });
      };
      return false;
    },
    listType: "picture-card",
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item label="Date" name="date">
          <Input />
        </Form.Item>
        <Form.Item label="TextArea" name="content">
          <TextArea rows={20} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Upload {...uploadArmProps}>
        <div>
          <PlusOutlined />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </div>
      </Upload>
    </>
  );
}
