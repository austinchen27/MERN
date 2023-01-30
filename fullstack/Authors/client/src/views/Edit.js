import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

const Edit = (props) => {
  const [ name, setName ] = useState("")

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8001/api/author/${id}`)
      .then(res => {
        setName(res.data.name)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Favorite authors</h1>
      <Link to="/">Home</Link>
      <h2>Edit this author</h2>
      <AuthorForm isCreate={false} id={id} name={name} setName={setName} />
    </>
  )
}

export default Edit;