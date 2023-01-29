import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const [ title, setTitle ] = useState("")
  const [ price, setPrice ] = useState("")
  const [ description, setDescription ] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:8001/api/oneProduct/${id}`)
      .then(res => {
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
      })
      .catch(err => console.log(err))
  }, [id])

  const updateProduct = e => {
    e.preventDefault()
    axios.put(`http://localhost:8001/api/product/edit/${id}`, {
      title,
      price,
      description
    })
      .then(res => {
        console.log(res)
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <form onSubmit={updateProduct}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Price: </label>
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <button>Update</button>
      </form>
    </>
  )

}