import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrderById } from "../../services/order";
import { Avatar, Button, Drawer, Flex, List, Table } from "antd";

import avatarImage from "../../../images/f6.png";
import dayjs from "dayjs";
import { formatPrice } from "../../components/helper";

function OrderPage() {
  const [userOrders, setUserOrders] = useState([]);
  const [open, setOpen] = useState(false);

  const [userOrdersSelection, setUserOrdersSelection] = useState([]);

  const user = useSelector((state) => state.userToken.user);

  const showDrawer = (value) => {
    setOpen(true);
    setUserOrdersSelection(value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Sipariş Tarihi",
      dataIndex: "orderTime",
      render: (row) => dayjs(row).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "Sipariş Durumu",
      dataIndex: "status",
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      render: (row) => formatPrice(row),
    },
    {
      title: "Detay Görüntüle",
      render: (row) => <Button onClick={() => showDrawer(row)}> BAK </Button>,
    },
  ];

  useEffect(() => {
    if (user && user.id) {
      getOrderById(user.id)
        .then((response) => {
          if (response.data.isSuccess === true) {
            setUserOrders(response.data.orders);
          }
        })
        .catch((error) => {
          console.error("Error fetching basket items:", error);
        });
    }
  }, [user]);

  return (
    <div>
      {" "}
      <Table columns={columns} dataSource={userOrders} />
      <Drawer title="Sipariş Detay" onClose={onClose} open={open}>
        Siparişlerim
        <List
          itemLayout="horizontal"
          dataSource={userOrdersSelection.items}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={avatarImage} />}
                title={item.name}
                description={`${formatPrice(item.price)} x ${
                  item.quantity
                }= ${formatPrice(item.totalPrice)}`}
              />
            </List.Item>
          )}
        />
        <Flex vertical gap="large">
          <h>Ad Soyad: {userOrdersSelection.name}</h>
          <h>Adres: {userOrdersSelection.adress}</h>
          <h> Sipariş Notu: {userOrdersSelection.orderNote}</h>
        </Flex>
      </Drawer>
    </div>
  );
}

export default OrderPage;
