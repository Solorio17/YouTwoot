import React, {Component} from 'react';


class SignUp extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      emailValidation: true
    }
  }


handleUsernameChange = (e) =>{
  this.setState({username: e.target.value});
};
handleEmailChange = (e) =>{
  this.setState({email: e.target.value});

};
handlePasswordChange = (e) =>{
  this.setState({password: e.target.value})
};

handleSignUp = () =>{
  fetch('http://localhost:3000/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    })
  })
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('token', data.user.token);
  });
};

validateForm = () =>{

  const validateUsername = () =>{
    if(this.state.username == ''){
    }
  }
  validateUsername()

  const validateEmail = () =>{
    if(this.state.email == ''){
      this.setState({emailValidation: false})
    }
    
  }
  validateEmail()

  const validatePassword = () =>{
    if(this.state.password == ''){
    }
  }
  validatePassword()

  if(this.state.emailValidation)
    this.handleSignUp()
}

  render(){
    return(
      <div className="container">
          <form>
            <h1 >Sign up!</h1>
            <hr/>

            <div className="form-group">
              <div>
                <label>Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                  ></input>
              </div>
              <hr></hr>
              <div>
                <label >Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  ></input>
                {this.state.emailValidation == false ? (<p>Please enter a valid email address</p>) : ''}
              </div>
              <hr></hr>
              <div>
                <label >Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  ></input>
              </div>

            </div>
            <button className="btn btn-info" type="button" onClick={this.validateForm}>Join the fun!</button>
          </form>
      </div>
    )
  }
}

export default SignUp;
