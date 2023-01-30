import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const Create = (props) => {
  const [ name, setName ] = useState("")

  return (
    <>
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <h2>Add a New Author:</h2>
      <AuthorForm isCreate={true} name={name} setName={setName} />
    </>
  )
}

export default Create;