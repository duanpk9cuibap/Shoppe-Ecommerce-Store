import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';

import './styles.scss';
import { deleteProduct } from '../../redux/Product/product.actions';

Modal.setAppElement('#root')
function ModalForm({ product }) {
  const { title, image, description, id } = product;

  const [modalIsOPen, setModalIsOpen] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  const onCloseModal = () => {
    setModalIsOpen(false);
    history.push('/products');
  };

  const onDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    history.push('/products');
  }

  return (

    <Modal className="card modalStyle" isOpen={modalIsOPen}

      style={{
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          margin: '7rem',

        },
        content: {
          background: '#fff',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
        }
      }}>

      <h4 className="card-header alert alert-warning">Are you sure you want to delete this product?</h4>
      <div className="card-body">
        <img src={image} className="modal__image" alt="" />
        <h5 className="card-title modal__title">{title}</h5>
        <p className="card-text modal__description">{description}</p>
        <div className="modal__btn">
          <button className="delete" onClick={() => onDeleteProduct(id)}>Delete</button>
          <button className="cancel" onClick={onCloseModal}>Cancel</button>
        </div>
      </div>
    </Modal >

  )
}

export default ModalForm;
