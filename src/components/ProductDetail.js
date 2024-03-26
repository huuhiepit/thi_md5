import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchProductDetail } from '../redux/actions'
import Button from './Button'

const productSelector = state => state.product

export default function ProductDetail() {
    const dispatch = useDispatch()
    const {id} = useParams();
    const product = useSelector(productSelector)

    useEffect(() => {
      dispatch(fetchProductDetail(id))
    }, [dispatch, id])

    const formatCurrency = (amount) => {
      amount = '' + amount;
  
      const parts = amount.split('.');
      
      let integerPart = parts[0];
      
      const formattedParts = [];
      while (integerPart.length > 3) {
          formattedParts.unshift(integerPart.slice(-3));
          integerPart = integerPart.slice(0, -3);
      }
      
      formattedParts.unshift(integerPart);
      
      const formattedInteger = formattedParts.join(',');
      
      const decimalPart = parts[1] ? '.' + parts[1] : '';
      
      return formattedInteger + decimalPart;
    };
  return (
    <div className='container'>
      <h3>Chi tiết sản phẩm</h3>
      <div className='product-body'>
        <h1>Tên sản phẩm {product.title}</h1>
        <p>Mô tả: {product.description}</p>
        <p>Giá: {formatCurrency(product.price)} VND</p>
        <Link to="/"><Button title="Trở lại" color="blue" /></Link>
      </div>
    </div>
  )
}
