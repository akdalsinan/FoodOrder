import {
  Col,
  Flex,
  List,
  Row,
  Space,
  Spin,
  Button,
  Drawer,
  Form,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import "./style.css";
import { InputNumber } from "antd";
import {
  addBasket,
  deleteBasket,
  getAllUserBasket,
} from "../../services/basket";
import { basketCount } from "../../reducer/basket";
import DrawerForm from "./drawerForm";

import pizzaMoney from "../../../images/pizzaMoney.jpg";
import oturumAc from "../../../public/images/oturumAc.png";
import CreditCard from "./creditCard";
import Loading from "../../components/loading";

import { useNavigate } from "react-router-dom";
import { addOrder } from "../../services/order";
import SignIn from "./signIn";
import BasketEmpty from "./basketEmpty";

function Index() {
  const [form] = Form.useForm();
  const [basketUrun, setBasketUrun] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genelTotal, setGenelTotal] = useState(0);
  const [campaignCode, setCampaignCode] = useState(false);
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.userToken.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("useruseEffect", user);
    if (user && user.id) {
      // setLoading(true); // API çağrısı öncesi yüklenme durumunu true yapıyoruz

      getAllUserBasket(user.id)
        .then((response) => {
          if (response && response.data) {
            setBasketUrun(response.data.cartItems);
          }
        })
        .catch((error) => {
          console.error("Error fetching basket items:", error);
        })
        .finally(() => {
          setLoading(false); // API çağrısı tamamlandıktan sonra yüklenme durumunu false yapıyoruz
        });
    }
  }, [user]);

  const handleDeleteProduct = (item) => {
    const createData = { userId: user.id, foodId: item.foodId };
    deleteBasket(createData).then((response) => {
      if (response.data) {
        const basketLength = response.data.cart.items;
        dispatch(basketCount(basketLength));

        getAllUserBasket(user.id)
          .then((response) => {
            if (response && response.data) {
              setBasketUrun(response.data.cartItems);
            }
          })
          .catch((error) => {
            console.error("Error fetching basket items:", error);
          });
      }
    });
  };

  useEffect(() => {
    // basketUrun değiştiğinde genelTotal değerini güncelliyoruz
    const total = basketUrun.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setGenelTotal(total);
  }, [basketUrun]);

  const onChangeBasket = (value, item) => {
    const createData = {
      userId: user.id,
      foodId: item.foodId,
      quantity: value,
    };
    addBasket(createData).then((response) => {
      if (response.data.message === "Product added to cart") {
        getAllUserBasket(user.id)
          .then((response) => {
            if (response && response.data) {
              setBasketUrun(response.data.cartItems);
            }
          })
          .catch((error) => {
            console.error("Error fetching basket items:", error);
          });
      }
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  //Fiyatı biçimlendirmek için
  const formatPrice = (price) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).format(price.toFixed(2));
  };
  //indirmli sepet tutarını hesaplamak için
  const calculateDiscount = (discount, value) => {
    const discountRate = value * (discount / 100);
    const result = value - discountRate;
    return formatPrice(result);
  };

  const handleFooterSubmit = () => {
    form.submit(); // Programmatically trigger form submission
  };

  const infosOnFinish = (value) => {
    const createData = {
      user: user.id,
      items: basketUrun,
      adress: value.adress,
      orderNote: value.orderNote,
      name: value.name,
      dontRing: value.dontRing === undefined ? false : true,
      doorOK: value.doorOK === undefined ? false : true,
      totalAmount: genelTotal,
    };
    if (value.cartSave === true) {
      // addUserCart
      const createDataCart = {
        cvc: value.cvc,
        cardNumber: value.number,
        expiry: value.expiry,
        cartName: value.cartName,
      };
      console.log("createDataCart", createDataCart);
    }

    addOrder(createData).then((response) => {
      if (response.data.isSuccess === true) {
        navigate("/orderOk");
        setBasketUrun([]);
      }
    });
  };

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  let totalPrice = 0;

  return (
    <Row>
      <Col span={2}></Col>
      <Col span={16}>
        {loading ? (
          <Loading />
        ) : basketUrun.length === 0 ? (
          user === null ? (
            <>
              <SignIn />
            </>
          ) : (
            <BasketEmpty />
          )
        ) : (
          <div className="scrollable-list">
            <List
              className="listAnt"
              itemLayout="vertical"
              size="small"
              dataSource={basketUrun}
              renderItem={(item) => (
                (totalPrice = item.quantity * item.price),
                (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                      />,
                      <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                      />,
                    ]}
                    extra={
                      <Flex vertical gap="large">
                        <InputNumber
                          min={1}
                          defaultValue={item.quantity}
                          onChange={(value) => onChangeBasket(value, item)}
                        />
                        <Button onClick={() => handleDeleteProduct(item)}>
                          Sil
                        </Button>
                      </Flex>
                    }
                  >
                    <List.Item.Meta
                      title={<a href={item.href}>{item.name}</a>}
                      description={<>Birim Fiyat: {formatPrice(item.price)}</>}
                    />
                    {formatPrice(totalPrice)}
                  </List.Item>
                )
              )}
            />
          </div>
        )}
      </Col>
      <Col span={2}></Col>
      {!loading && basketUrun.length != 0 && (
        <Col span={4}>
          <div className="totalPrice">
            <h3 className="totalPrice-h3">
              Genel Toplam: {formatPrice(genelTotal)}
            </h3>
            <img className="w-1/3" src={pizzaMoney} />
            <Button onClick={showDrawer}>Ödeme Adımına Geç</Button>
          </div>
        </Col>
      )}

      <Drawer
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        footer={
          <Row style={{ height: "100px" }}>
            <Col span={14}></Col>
            <Space>
              {campaignCode ? (
                <>
                  <Typography.Title level={3} type="danger" delete>
                    {formatPrice(genelTotal)}
                  </Typography.Title>

                  <Typography.Title level={2}>
                    {calculateDiscount(25, genelTotal)}
                  </Typography.Title>
                </>
              ) : (
                <Typography.Title level={2}>
                  {formatPrice(genelTotal)}
                </Typography.Title>
              )}

              <Button onClick={handleFooterSubmit}>Submit</Button>
            </Space>
          </Row>
        }
        extra={<Button onClick={onClose}>Cancel</Button>}
      >
        <DrawerForm
          setCampaignCode={setCampaignCode}
          infosOnFinish={infosOnFinish}
          form={form}
        />
        <CreditCard infosOnFinish={infosOnFinish} page="basket" />
      </Drawer>
    </Row>
  );
}

export default Index;
