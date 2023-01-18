import React, {useState} from 'react';
import styles from './Content.module.css'

const Content = (prop) => {
  return (
    <div>
      {
        prop.tab ?
        <p>{prop.tab} content is showing here.</p> : ''
      }
    </div>
  )
}

export default Content;