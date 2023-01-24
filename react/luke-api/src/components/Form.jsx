import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
  const navigate = useNavigate();

  const handleUnit = (e) => {
    props.setUnit(e.target.value)
  }

  const handleId = (e) => {
    props.setOneId(e.target.value)
  }

  const sendCall = (e) => {
    e.preventDefault()
    navigate(`/${props.unit}/${props.oneId}`)
  }
  return(
    <>
      <form onSubmit={sendCall}>
        <label htmlFor="">Search for: </label>
        <select onClick={handleUnit}>
          <option value="people">people</option>
          <option value="planets">planets</option>
          <option value="films">films</option>
          <option value="species">species</option>
          <option value="vehicles">vehicles</option>
          <option value="starships">starships</option>
        </select>
        <label htmlFor="">ID: </label>
        <input type="number" onChanage={handleId} placeholder={1}/>
        <button>Search</button>
      </form>
    </>
  )

}

export default Form;