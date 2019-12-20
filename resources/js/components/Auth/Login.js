import * as React from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';


export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',

        };
        this.inputHandler = this.inputHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

    inputHandler(event){

        let name = event.target.name;
        this.setState({
            [name] : event.target.value,
        });

    }

    loginHandler(event){
        event.preventDefault();
        axios.post('/api/login', {
            'email' : this.state.email,
            'password' : this.state.password,
        }, {
            headers:{
                'Content-Type' : 'application/json',
            }
        }).then((response)=>{
            //console.log(response);
            localStorage.setItem('login_info', JSON.stringify(response.data));
            console.log(response.data.user);
        }).catch((error)=>{
            console.log(error.response);
            }
        )
    }

    render() {

        if('login_info' in localStorage)
        {
            let info = JSON.parse(localStorage.getItem('login_info'));
            console.log(info.token);
            return (
                <div>
                    <Redirect to="/"/>
                </div>
            )
        }
        else
        {
            return(
                <div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input name="email" onChange={this.inputHandler} type="email" className="form-control"
                                   aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onChange={this.inputHandler} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button onClick={this.loginHandler} className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            )
        }

    }
}
