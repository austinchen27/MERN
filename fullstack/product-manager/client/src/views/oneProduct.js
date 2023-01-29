import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default () => {
  const [ data, setData ] = useState({})
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8001/api/oneProduct/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <>
      <h1>{data.title}</h1>
      <p>Price: ${data.price}</p>
      <p>Description: {data.description}</p>
      <Link to={`/product/edit/${id}`}><button>Edit</button></Link>
    </>
  )

}