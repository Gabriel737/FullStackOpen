import React from 'react';

const Banner = ({message}) => {

  const bannerStyle = {
    color: 'blue',
    fontStyle: 'bold',
    fontSize: 20,
    backgroundColor: 'lightgrey',
    width: 500
  }


  if(message === null) {
    return null
  }

  return (
    <div style={bannerStyle}>
      {message}
    </div>
  )
}

export default Banner