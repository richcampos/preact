import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <Link to="/">
          <img src="" alt="Logo"></img>
          <span>Platzi</span>
          <span>Conf</span>
        </Link>
      </div>
    )
  }
}

export default Navbar