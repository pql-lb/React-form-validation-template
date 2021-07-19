import React from 'react';
import './App.css';
import Form from './components/form'

class App extends React.Component {
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render() {
        return (
          <div className="App">
              <Form />
          </div>
        )
    }
}

export default App;
