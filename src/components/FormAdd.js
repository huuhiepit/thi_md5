import React, { useState } from 'react'
import FormInput from './FormInput'
import Button from './Button'
import {useDispatch} from 'react-redux'
import { addNewProduct } from '../redux/actions'
import { Link } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import toastr from 'toastr';


export default function FormAdd() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    title: '',
    description: '',
    price: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addNewProduct(formData))
    toastr.success("Thêm mới sản phẩm thành công")
    setFormData({
      id: uuidv4(),
      title: '',
      description: '',
      price: '',
    })
  }

  return (
    <div className='container'>
        <h3>Thêm sản phẩm</h3>
        <form onSubmit={handleSubmit}>
            <FormInput title="Tên sản phẩm" name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}/>
            <FormInput title="Giá" name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}/>
            <FormInput title="Mô tả" name="description" 
              type="text"
              value={formData.description}
              onChange={handleChange}/>
            <div>
            <button style={{background: 'orange'}} type='submit'>
              Thêm mới
            </button>
                <Link to="/"><Button title="Trở lại" color="blue" /></Link>
            </div>
        </form>
    </div>
  )
}
