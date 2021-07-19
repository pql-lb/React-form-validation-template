import React from 'react';
import '../App.css';
import Input from './input';

class Form extends React.Component {
    render() {
        return (
            <form className="form" action="" method="POST">
                  <Input 
                  handleChange={this.handleChange}
                  type="text" 
                  size="small" 
                  label="First Name" 
                  name="first_name" 
                  required="true" />
                  <Input 
                  handleChange={this.handleChange}
                  type="text" 
                  size="small" 
                  label="Last Name" 
                  name="last_name" 
                  required="true" />
                  <Input 
                  handleChange={this.handleChange}
                  type="file" 
                  accept='.doc,.docx'
                  size="none" 
                  label="CV" 
                  name="cv" 
                  required="true" />
              </form>
        )
    }
}

export default Form;