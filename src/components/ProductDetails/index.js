import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../../redux/Product/product.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//import './styles.scss';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { addProduct } from '../../redux/Cart/cart.actions';
import { Card, Row, Col, Image, Typography, Divider, Button, Checkbox, Carousel } from 'antd';
import { StarOutlined, StarFilled, EnvironmentOutlined, LockOutlined, MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

const Container = styled.div`
.ant-col{
  padding: 2rem 1rem;
}
.anticon svg {
  display: block;
}
.ant-btn{
  background-color: #F7CA00;
    border-radius: 1rem;
    width: 100%;
}
`
const { Title } = Typography;

const ProductDetails = (props) => {
  const [visible, setVisible] = useState(false); //Preview Image

  const mapState = (state) => ({
    product: state.products[props.match.params.id]
  })

  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchProduct(props.match.params.id))
  }, [props.match.params.id])

  const handleAddToCart = (product) => {
    dispatch(
      addProduct(product)
    );
    history.push('/checkout')
  }

  const renderFetchProduct = () => {
    if (!product) {
      return <div>Loading...</div>
    } else {
      const { title, image_1, image_2, image_3, price, description } = product;
      console.log((Number(price) / 7));
      return (
        <Container>
          <Row>
            <Col span={24} md={7}>
              <Carousel effect="fade" autoplay>
                <div>
                  <Image
                    preview={{ visible: false }}
                    width="100%"
                    src={image_1}
                    onClick={() => setVisible(true)}
                  />
                </div>
                <div>
                  <Image
                    preview={{ visible: false }}
                    width="100%"
                    src={image_2}
                    onClick={() => setVisible(true)}
                  />
                </div>
                <div>
                  <Image
                    preview={{ visible: false }}
                    width="100%"
                    src={image_3}
                    onClick={() => setVisible(true)}
                  />
                </div>
              </Carousel>

              <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                  <Image src={image_1} />
                  <Image src={image_2} />
                  <Image src={image_3} />
                </Image.PreviewGroup>
              </div>
            </Col>
            <Col span={24} md={11}>
              <Title level={4}>{title}</Title>
              <StarFilled style={{ color: "#f0c14b" }} />
              <StarFilled style={{ color: "#f0c14b" }} />
              <StarFilled style={{ color: "#f0c14b" }} />
              <StarFilled style={{ color: "#f0c14b" }} />
              <StarOutlined />
              <Divider />
              <Title level={5} >About this item:</Title>
              <p>{description}</p>
            </Col>
            <Col span={24} md={6}>
              <Card style={{ borderRadius: "1rem" }}>
                <Title level={4} style={{ color: "#B82704" }}>$ {product.price}</Title>
                <strong>+ ${Math.ceil(Number(price) / 7)}</strong>
                <Title level={5} style={{ color: "#5680B9" }}>Shipping & Import Fees Deposit to Vietnam</Title>
                <Divider dashed />
                <span><EnvironmentOutlined /> Deliver to Viet Nam.</span>
                <br />
                <br />
                <Title level={5} style={{ color: "#B82704" }}>In stock soon.</Title>
                <Title level={5} style={{ marginTop: "-5px" }}>Order it now.</Title>
                <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
                <Divider dashed />
                <span style={{ color: "#5680B9" }}><LockOutlined /> Secure transaction</span>
                <br />
                <span>Ships from Shoppe.com</span>
                <br />
                <span>Sold by Shoppe.com</span>
                <Divider style={{ marginBottom: "5px" }} />
                <Title level={5} style={{ color: "#B82704" }}>Details</Title>
                <span>Return Policy:</span> <span style={{ color: "#5680B9" }}>This item is returnable</span>
                <Checkbox>Add a gift receipt for easy returns</Checkbox>
              </Card>
              <span>Share: <MailOutlined style={{ marginRight: "0.3rem", marginLeft: "0.3rem" }} /> <FacebookOutlined style={{ marginRight: "0.3rem" }} /> <TwitterOutlined style={{ marginRight: "0.3rem" }} /> <InstagramOutlined />
              </span>
            </Col>
          </Row>
        </Container>

      )
    }
  }

  return (
    <div>{renderFetchProduct()}</div>
  )
}

export default ProductDetails;

