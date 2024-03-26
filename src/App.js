import { Provider } from 'react-redux';
import store from './redux/store'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import ListProduct from './components/ListProduct';
import ProductDetail from './components/ProductDetail';
import FormAdd from './components/FormAdd';
import FormEdit from './components/FormEdit';
import axios from 'axios';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<ListProduct />} />
          <Route path='/products/:id' element={<ProductDetail />} />
          <Route path='/products/add' element={<FormAdd />} />
          <Route path='/products/edit/:id' element={<FormEdit />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
