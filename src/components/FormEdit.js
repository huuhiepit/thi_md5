import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';

export default function FormEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setFormData(response.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchProduct();
  }, [id]);

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/products/${id}`, formData);
      navigate("/");
      toastr.success("Sửa sản phẩm thành công")
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='container'>
      <h3>Chỉnh sửa sản phẩm</h3>
      <form onSubmit={handleSubmit}>
        <FormInput title="Tên sản phẩm" name="title" type="text" value={formData.title || ''} onChange={handleChange} />
        <FormInput title="Giá" name="price" type="number" value={formData.price || ''} onChange={handleChange} />
        <FormInput title="Mô tả" name="description" type="text" value={formData.description || ''} onChange={handleChange} />
        <div>
          <button style={{ background: 'orange' }} type='submit'>
            Lưu
          </button>
          <Button title="Trở lại" color="blue" onClick={() => navigate("/")} />
        </div>
      </form>
    </div>
  );
}
