import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { fetchProducts } from '../../../redux/Product/product.actions';
import Signin from '../../Signin';
import {
  PageHeader,
  Button,
  Table,
  Divider,
  Tooltip,
  Popconfirm,
  Image,
  Tag
} from 'antd';
import _ from 'lodash';
import styled from "styled-components";
import { PlusCircleOutlined, EditOutlined, DeleteOutlined, IdcardFilled } from '@ant-design/icons';
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
  const [dataSource, setDataSource] = useState([]);
  const { products, currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (currentUser) {
      setDataSource(products?.filter(item => currentUser.id === item.userId)
      )
    }
  }, [currentUser]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  console.log(dataSource);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: 150,
      key: "title",
      render: (id, { title, image }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            width={250}
            src={image}
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
              onConfirm={() => this.deleteProductType(record.id)}
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


  /* const renderProducts = () => {
    return products.map(product => {
      if (currentUser) {
        if (currentUser.id === product.userId) {
          return (
            <div className="col list-products__card">
              <div className="card h-100">
                <img src={product.image} className="card-img-top card__img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <Link to={`/products/edit/${product.id}`}><button id="edit">Edit</button></Link>
                  <Link to={`/products/delete/${product.id}`}><button id="delete">Delete</button></Link>
                </div>
              </div>
            </div>
          )
        }
      }
    })
  } */

  /* const renderYourDatas = () => {
    let count = 0;
    products.map(product => count = currentUser.id === product.userId ? count += 1 : count)
    return count > 0 ?
      ''
      :
      (<div className="yourProducts__datas">
        <h5>You haven't created any products yet!</h5>
      </div>)
  } */

  return (
    //<div className="yourProducts">
    /* <div className="yourProducts__title"><h4>LIST OF YOUR PRODUCTS</h4></div>
      {renderYourDatas()}
      <div className="yourProducts__addNew">
        <Link to='/products/new'>
          <button>Add your new product</button>
        </Link>
      </div> 
     
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 list-products">
        {renderProducts()}</div>
    </div>*/
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
            //rowKey={"id"}
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

