import React, { useEffect, useState } from "react";
import { getAllOrder, updateOrder } from "../../../services/order";
import { formatPrice } from "../../../components/helper";
import dayjs from "dayjs";
import { Flex, Select, Table, Tag } from "antd";

function OrderView() {
  const [orders, setOrders] = useState([]);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const getAllOrders = () => {
    getAllOrder()
      .then((res) => {
        if (res.data.isSuccess) {
          setOrders(res.data.orders);
        }
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  const handleSelectOnChange = (value, rowValue) => {
    const createData = { orderId: rowValue._id, status: value };
    updateOrder(createData)
      .then((response) => {
        if (response.data.isSuccess) {
          getAllOrders();
        }
      })
      .catch((error) => console.log("error", error));
  };

  const columns = [
    {
      title: "İsim Soyisim",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Adres",
      dataIndex: "adress",
      key: "adress",
    },
    {
      title: "Sipariş Tarihi",
      dataIndex: "orderTime",
      key: "orderTime",
      render: (row) => dayjs(row).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "Sipariş Durumu",
      dataIndex: "status",
      key: "status",
      render: (row, rowValue) => (
        <Flex vertical>
          <Select
            defaultValue={row}
            onChange={(row) => handleSelectOnChange(row, rowValue)}
          >
            <Select.Option value="Hazırlanıyor">Hazırlanıyor</Select.Option>
            <Select.Option value="Bekliyor">Bekliyor</Select.Option>
            <Select.Option value="Teslim Edildi">Teslim Edildi</Select.Option>
            <Select.Option value="İptal Edildi">İptal Edildi</Select.Option>
          </Select>
        </Flex>
      ),
    },
    {
      title: "Sipariş Notu",
      dataIndex: "orderNote",
      key: "orderNote",
    },
    {
      title: "Kapıya Bırak",
      dataIndex: "doorOK",
      key: "doorOK",
      render: (row) => (
        <Tag color={row === false ? "red" : "green"}>
          {row === false ? "Hayır" : "Evet"}
        </Tag>
      ),
    },
    {
      title: "Zili Çalma",
      dataIndex: "dontRing",
      key: "dontRing",
      render: (row) => (
        <Tag color={row === false ? "red" : "green"}>
          {row === false ? "Hayır" : "Evet"}
        </Tag>
      ),
    },

    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (row) => formatPrice(row),
    },
    // {
    //   title: "Detay Görüntüle",
    //   render: (row) => <Button onClick={() => showDrawer(row)}> BAK </Button>,
    // },
  ];

  const onExpand = (expanded, record) => {
    const keys = expanded ? [record._id] : [];

    setExpandedRowKeys(keys);
  };

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <>
              {record.items.map((item) => (
                <div key={item._id}>
                  {item.name} x {item.quantity} = {formatPrice(item.totalPrice)}
                </div>
              ))}
            </>
          ),
          onExpand: onExpand,
          expandedRowKeys: expandedRowKeys,
        }}
        dataSource={orders.map((order) => ({ ...order, key: order._id }))}
      />
    </>
  );
}

export default OrderView;
