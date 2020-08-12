import React, { Component } from "react";
import axios from 'axios';
import API from "../../utils/API";
import { Box, FormField, TextInput,Grommet } from 'grommet';
import { Container, Button } from "reactstrap";

const styles = {
	jumbotron: {
	  background: "gray",
	  minHeight: 250,
	  width: 600,
	  margin: 20
	}
  }

class SignUpForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: ''

		}
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
		this.handleInputChange = this.handleInputChange.bind(this)
	}
	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleFormSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state)
		event.preventDefault()

		//request to server to add a new username/password
		// return axios.post('/signup', {
		// 	username: this.state.username,
		// 	password: this.state.password
		// })
		// API.signUpUser(this.sate).then(response => {
		// 		console.log(response)
		// 		if (!response.data.errmsg) {
		// 			console.log('successful signup')
		// 			this.setState({ //redirect to login page
		// 				redirectTo: '/login'
		// 			})
		// 		} else {
		// 			console.log('username already taken')
		// 		}
		// 	}).catch(error => {
		// 		console.log('signup error: ', error)

		// 	})

			//kaylie 
			API.signUpUser(this.state).then(function(data) {
				console.log(data);
				window.location.replace("/login")
			}).catch(err => {console.log(err)})
	}

	

  render() {
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
    )
  }
}

export default SignUpForm;