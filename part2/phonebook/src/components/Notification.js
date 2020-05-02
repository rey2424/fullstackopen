import React from 'react'

const Notification = ({ message }) => {

    const added = {        
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }    

    const error = {        
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }  


    if (message === null) {
      return null
    }

    if(message.includes('Added')){
    return (
        
      <div style={added}>
        {message}
      </div>
    )
    }
    if(message.includes('Information')){
    return (
        <div style={error}>
          {message}
        </div>
      )
    }
  }

export default Notification