import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'



const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className='header'>
            <h1 >{ title }</h1>
            <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
        </div>
    )
}

/* CSS JS
const styling = {
    color : 'red',
    backgroundColor : 'black',
}*/

Header.defaultProps = {
    title : 'Task-Tracker',
}



export default Header
