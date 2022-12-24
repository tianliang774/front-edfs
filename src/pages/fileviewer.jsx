import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { List, Typography, Button } from "antd";
import html from "../api/config";

export default function FileViewer() {
  const [filenames, setfilenames] = useState([]);
  const [directory_path, setdirectory_path] = useState("/");

  useEffect(() => {
    html
      .filename_get("api/v1/ls", {
        directory_path: directory_path,
        db: "sql",
      })
      .then((val) => {
        console.log(val);
        setfilenames(
          val.data.children.map((name, id) => ({ name: name, id: id }))
        );
      });
  }, [directory_path]);

  const navigate = useNavigate();
  return (
    <>
      <List
        header={<div>Path:{directory_path}</div>}
        footer={
          <div>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          </div>
        }
        bordered
        dataSource={filenames}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                key="list-loadmore-edit"
                onClick={() => {
                  if (directory_path === "/")
                    setdirectory_path(directory_path + item.name);
                  else setdirectory_path(directory_path + "/" + item.name);
                }}
              >
                open
              </Button>,
              <Button key="list-loadmore-more">delete</Button>,
            ]}
          >
            <Typography.Text mark>[+]</Typography.Text> {item.name}
          </List.Item>
        )}
      />
    </>
  );
}
