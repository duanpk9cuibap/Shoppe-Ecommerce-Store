import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchProducts } from '../../../redux/Product/product.actions';
import Signin from '../../Signin';
import { deleteProduct } from '../../../redux/Product/product.actions';
import {
  PageHeader,
  Button,
  Table,
  Tooltip,
  Popconfirm,
  Image,
  Tag
} from 'antd';
import _ from 'lodash';
import styled from "styled-components";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.scss';

const Container = styled.div`
.ant-spin-container{
  padding: 1.2rem;
}
.ant-btn-sm{
margin: 5px;
}
.anticon svg {
  display: block;
}
`

const mapState = (state) => ({
  products: Object.values(state.products),
  currentUser: state.user.currentUser
})

function FetchYourOwnProducts() {
  const { products, currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();

  const dataSource = products?.filter(item => currentUser?.id === item.userId)

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("products", products);
  }, [])

  const onDeleteProduct = id => {
    dispatch(deleteProduct(id));
  }


  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: 150,
      key: "title",
      render: (id, { title, image_1 }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            width={300}
            src={image_1}
          >
          </Image>
          <span style={{ marginLeft: "0.5rem" }}>{title}</span>
        </div>
      )
    },
    {
      title: "Category",
      dataIndex: "category",
      width: 120,
      align: "center",
      key: "category",
      render: (text, { id, category }) => (
        <Tag color={category === "Dog" ? 'geekblue' : 'green'} key={id}>
          {category}
        </Tag>
      )
    },
    {
      title: "Price",
      dataIndex: "price",
      width: 120,
      align: "center",
      key: "price",
      render: (id, { price }) => <span>$ {price}</span>
    },
    {
      title: "Action",
      width: 180,
      key: "action",
      align: "right",
      dataIndex: "actions",
      render: (id, record) => (
        <Container>
          <Tooltip title="Edit this product">
            <Button
              size="small"
              onClick={() => history.push(`/products/edit/${record.id}`)}
            >
              <EditOutlined theme="twoTone" />
            </Button>
          </Tooltip>
          <Tooltip title="Delete this product">
            <Popconfirm
              title="Are you sure delete this product?"
              placement="topRight"
              onConfirm={() => onDeleteProduct(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button size="small">
                <DeleteOutlined style={{ color: "red" }} />
              </Button>
            </Popconfirm>
          </Tooltip>
        </Container>
      ),
    }
  ]
  const tableWidth = _.sum(columns.map((c) => c.width));




  return (
    <Container>
      {currentUser
        ?
        <>
          <PageHeader
            ghost={true}
            title="YOUR PRODUCT LIST"
            extra={
              <Button
                onClick={() => history.push("/products/new")}>
                <PlusCircleOutlined /> Add your new product
              </Button>
            }
          />
          <Table
            rowKey={"id"}
            dataSource={dataSource}
            columns={columns}
            //loading={loading}
            scroll={{ x: tableWidth }} />
        </>
        :
        <div className="loadingToSelling">
          <br />
          <Signin />
        </div>
      }
    </Container>
  )
}



export default FetchYourOwnProducts;

