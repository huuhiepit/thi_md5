import React, { useEffect } from 'react'
import Button from './Button'
import { deleteProduct, fetchData } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import toastr from 'toastr';


const dataSelector = state => state.data
const errorSelector = state => state.error

export default function ListProduct() {
    const dispatch = useDispatch()
    const data = useSelector(dataSelector)
    const error = useSelector(errorSelector)

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])


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
    
    const handleDelete = (productId) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) {
            toastr.success("Xóa sản phẩm thành công!!")
            dispatch(deleteProduct(productId));
        }
    };
  return (
    <div className='container'>
        <h3 style={{marginTop: '2em'}}>Danh sách sản phẩm</h3>
        <Link to="/products/add"><Button title="Thêm mới" color="green"/></Link>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, loot) => (
                    <tr key={product.id}>
                        <td>{loot++ + 1}</td>
                        <td><Link to={`/products/${product.id}`}>{product.title}</Link></td>
                        <td>{product.description}</td>
                        <td>{formatCurrency(product.price)} VND</td>
                        <td>
                            <Link to={`/products/edit/${product.id}`}><Button title="Sửa" color="blue"/></Link>
                            <button style={{ background: 'red' }} onClick={() => handleDelete(product.id)}>
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    </div>
  )
}
