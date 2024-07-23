import React, { useEffect, useState } from "react";
import { deleteFood, getAllFood } from "../../../services/food";
import { Button, Form, Modal, Popconfirm, Popover, Space, Table } from "antd";
import { formatPrice } from "../../../components/helper";
import FoodForm from "../foodEdit/foodForm";

function FoodEdit() {
  const apiUrl = import.meta.env.VITE_API_URI;

  const [form] = Form.useForm();
  const [food, setFood] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState();

  const getAllFoods = () => {
    getAllFood()
      .then((res) => {
        if (res.data.isSuccess) {
          setFood(res.data.foods);
        }
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    getAllFoods();
  }, []);

  console.log("food", food);

  const handleDeleteFood = (row) => {
    deleteFood(row._id)
      .then((response) => {
        if (response.data.isSuccess) {
          getAllFoods();
        }
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedRow();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedRow();
    form.resetFields();
  };

  const columns = [
    {
      title: "Yemek İsmi",
      key: "foodName",
      dataIndex: "foodName",
    },
    {
      title: "Yemek Türü",
      dataIndex: "urunName",
      key: "urunName",
    },
    {
      title: "Yemek Fiyatı",
      dataIndex: "foodPrice",
      key: "foodPrice",
      render: (row) => formatPrice(row),
    },
    {
      title: "Yemek Açıklama",
      dataIndex: "foodDesc",
      key: "foodDesc",
    },
    {
      title: "Yemek Açıklama",
      dataIndex: "foodImage",
      key: "foodImage",
      render: (row) => (
        <img
          style={{ height: "60px", width: "60px" }}
          src={`${apiUrl}uploads/${row}`}
        />
      ),
    },

    {
      title: "İşlemler",
      render: (row) => (
        <Space>
          <Button
            onClick={() => {
              showModal();
              setSelectedRow(row);
            }}
          >
            Güncelle
          </Button>

          <Popconfirm
            title="Silmek İstediğinize Emin misiniz?"
            onConfirm={() => handleDeleteFood(row)}
          >
            <Button danger>Sil</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={food}
        title={() => <Button onClick={showModal}>Yeni Ekle</Button>}
      />

      <Modal
        title={selectedRow ? "Ürün Düzenle" : "Ürün Ekle"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <FoodForm
          selectedRow={selectedRow}
          form={form}
          handleOk={handleOk}
          getAllFoods={getAllFoods}
        />
      </Modal>
    </>
  );
}

export default FoodEdit;
