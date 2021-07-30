import React, { Component } from 'react'
import axios from 'axios';
import md5 from 'md5';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      }
    }
  }
  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }
  iniciarSesion = async () => {
    console.log(`Bienvenido ${this.state.form.email}` )
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h1 className="h4 mb-3 front-weight-normal">
            Inicio de sesión
          </h1>

          <input
            type="email"
            id="inputEmail"
            name="email"
            className="form-control mt-1"
            placeholder="Email"
            required
            onChange={this.handleChange}
          />
          <input
           type="password"
           id="password"
           name="password"
           className="form-control mt-1"
           placeholder="password"
           required
           onChange={this.handleChange}
          />
          
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={() => this.iniciarSesion()}
          >
            Login
          </button>
          <div>
            <p>Login with social networks</p>

            <div className="google-btn btn-primary">
              <div className="google-icon-wrapper">
                <img className="google-icon" src="" />
              </div>
              <p className="btn-text">
                <b>Sing in with google</b>
              </p>
              
            </div>
          </div>
        </form>
      </div>
    )
  }
}
