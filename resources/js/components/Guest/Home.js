import * as React from "react";
import LoggedIn from "../Functions/LoggedIn";
import {Redirect} from 'react-router-dom';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          cookie: '',
        };

    }



    render()
    {
        //Check Existence of localStorage existence
        if('login_info' in localStorage)
        {
            let info = JSON.parse(localStorage.getItem('login_info'));
            return (
                <div>

                </div>
            )
        }
        else{
            return (
                <div>
                    <Redirect to='/login'/>
                </div>
            )
        }

    }
}
