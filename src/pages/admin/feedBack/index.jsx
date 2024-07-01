import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Flex, Select, Table, Tag } from "antd";
import { getAllFeedBack } from "../../../services/feedBack";
import { SmileOutlined, FrownOutlined, SendOutlined } from "@ant-design/icons";

function Index() {
  const [feedBacks, setFeedBacks] = useState([]);

  const getAllFeedBacks = () => {
    getAllFeedBack()
      .then((res) => {
        if (res.data.isSuccess) {
          setFeedBacks(res.data.feedBacks);
        }
      })
      .catch((err) => console.log("err", err));
  };
  useEffect(() => {
    getAllFeedBacks();
  }, []);

  const columns = [
    {
      title: "İsim Soyisim",
      key: "userName",
      dataIndex: "userName",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Görüş/Öneri",
      dataIndex: "feedBack",
      key: "feedBack",
    },
    {
      title: "Memnuniyet",
      dataIndex: "status",
      key: "status",
      render: (row) => (
        <>
          {row === "happy" ? (
            <SmileOutlined style={{ fontSize: "24px", color: "green" }} />
          ) : (
            <FrownOutlined style={{ fontSize: "24px", color: "red" }} />
          )}
        </>
      ),
    },
    {
      title: "Tarihi",
      dataIndex: "feedBackTime",
      key: "feedBackTime",
      render: (row) => dayjs(row).format("YYYY-MM-DD HH:mm:ss"),
    },
  ];

  return (
    <div>
      {" "}
      <Table columns={columns} dataSource={feedBacks} />
    </div>
  );
}

export default Index;
