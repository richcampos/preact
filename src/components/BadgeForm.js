import React from 'react'

class BadgeForm extends React.Component {

  handleClick = e =>{
    console.log('Button Clicked')
  }

  handleSubmit = e =>{
    e.preventDefault();
    console.log('Form was Submitted')
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="firstName"
              value={this.props.formValues.firstName}
              >  
            </input>
          </div>

          <div>
            <label>Last Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="lastName"
              value={this.props.formValues.lastName}
            >
            </input>
          </div>

          <div>
            <label>Job Title</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            >
            </input>
          </div>
 
          <div>
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control" 
              type="text" 
              name="twitter"
              value={this.props.formValues.twitter}
            >
            </input>
          </div>
          <button onClick={this.handleClick} >Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm