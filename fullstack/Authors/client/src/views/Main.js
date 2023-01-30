import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AllAuthors from '../components/AllAuthors';

const Main = (props) => {
  const [ allAuthors, setAllAuthors ] = useState([])
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8001/api/allAuthors')
      .then(res => {
        setAllAuthors(res.data)
        setLoaded(true)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1>Favorite Authors</h1>
      <Link to='/author/create'>Add an author</Link>
      {
          loaded &&
            <AllAuthors allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>
        }
    </>
  )

}

export default Main;