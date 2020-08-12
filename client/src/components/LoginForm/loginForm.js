import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import API from "../../utils/API";

const styles = {
  jumbotron: {
    background: "gray",
    minHeight: 250,
    width: 600,
    margin: 20
  }
}

class loginForm extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log(value);
    console.log(event.target);
    // Updating the input's state
    this.setState({
      [name]: value,
    });
    console.log(this.state)
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    console.log('handleSubmit')

        // axios.post('/user/login', {
        //         username: this.state.username,
        //         password: this.state.password
        //     })
        //     .then(response => {
        //         console.log('login response: ')
        //         console.log(response)
        //         if (response.status === 200) {
        //             // update App.js state
        //             this.props.updateUser({
        //                 loggedIn: true,
        //                 username: response.data.username
        //             })
        //             // update the state to redirect to home
        //             this.setState({
        //                 redirectTo: '/play'
        //             })
        //         }
        //     }).catch(error => {
        //         console.log('login error: ', error)
                
                
        //     })

            //kaylie
            API.loginUser(this.state).then(response => {
                      console.log('login response: ')
                      console.log(response)
                      if (response.status === 200) {
                          // update App.js state
                          // this.updateUser({
                          //     loggedIn: true,
                          //     username: response.data.username
                          // })
                          // update the state to redirect to home
                          this.setState({
                              redirectTo: '/play'
                          })
                      }
                  }).catch(error => {
                      console.log('login error: ', error)
                      
                      
                  })
      
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, 
  render() {

    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
  } else {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      
      <div  className="jumbotron" style = {styles.jumbotron}>
        <h3> Log in </h3>
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
};

export default loginForm;



  // <Container>
  //     <div  className="jumbotron" style = {styles.jumbotron}>
  //       <h3> Log in </h3>
  //     <Grommet>
  //         <Box>
  //         <FormField label="">
  //           <TextInput placeholder="username" />
  //           <TextInput placeholder="password" />
  //         </FormField>
  //          </Box>
  //         </Grommet>
  //         <Button color="b"> Log in </Button>
  //      </div> 
  // </Container>      
  

  