import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import AllProducts from '../components/AllProducts';
import axios from 'axios';

const Main = (props) => {
  const [ allProducts, setProduct ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8001/api/allProducts')
      .then(res => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ProductForm />
      <hr />
      {loaded && <AllProducts allProducts={allProducts} />}
    </div>
  )
}

export default Main;