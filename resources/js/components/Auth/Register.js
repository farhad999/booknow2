import * as React from "react";
import axios from 'axios';


 export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            username: '',
            email : '',
            password: '',
            confirmedPass: '',
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

     submitHandler(event){
        event.preventDefault();
        axios.post('/api/register', {
            'firstName' : this.state.firstName,
            'lastName' : this.state.lastName,
            'username' : this.state.username,
            'email' : this.state.email,
            'password' : this.state.password,
        },
            {
                header:{
                    'Content-Type' : 'application/json'
                }
            }).then((response)=>{
                console.log(response);
        }).catch((error)=>{
            console.log(error.response);
        })
    }

    inputHandler(event){
        let name = event.target.name;
        this.setState({
            [name] : event.target.value,
        });
    }




    render() {
        return(
            <div className="container">
                <h3>Register</h3>
                <div className="row">
                    <div className="col-md-8">
                        <form>
                            <p>Required Field * </p>
                            <div className="form-group">
                                <label>First Name</label>
                                <input onChange={this.inputHandler} name="firstName" type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Last Name</label>
                                <input onChange={this.inputHandler} name="lastName" type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Username</label>
                                <input onChange={this.inputHandler} name="username" type="text" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input name="email" onChange={this.inputHandler} type="email" className="form-control"
                                       aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input onChange={this.inputHandler} name="password" type="password" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input onChange={this.inputHandler} name="password" type="password" className="form-control"/>
                            </div>

                            <button onClick={this.submitHandler} className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
