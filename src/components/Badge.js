import React from 'react';

class Badge extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      twitter
    } = this.props

    return (
      <div>
        <h1> {firstName} <br /> {lastName} </h1>
        
        <div>
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
      </div>
    )
  }
}

export default Badge;