import React from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      twitter: '',
      email:''
    }
  };

  handleChange = e =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Badge 
            firstName={this.state.form.firstName }
            lastName={this.state.form.lastName}
            jobTitle={this.state.form.jobTitle}
            twitter={this.state.form.twitter}
            email={this.state.form.email}
          ></Badge>
        </div>
        <div>
          <BadgeForm 
            onChange={this.handleChange} 
            formValues={this.state.form}
            ></BadgeForm>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew