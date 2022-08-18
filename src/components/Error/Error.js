import React from 'react';

const Error = (props) => {
  return (
    <div style={{color: 'red'}}>
      {props.error}
    </div>

  )
}

export default Error;