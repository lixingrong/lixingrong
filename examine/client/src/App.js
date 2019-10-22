import React from 'react'
import { HashRouter,Switch,Route,Link ,Redirect} from "react-router-dom";
import IndexLogin from './view/login'
import {Div} from "./view/div/div"
export class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect from={'/'} exact to={'/login'}/>
                    <Route path={'/login'} exact component={IndexLogin} />
                    <Route path={'/div'} exact component={Div}/>
                </Switch>
            </HashRouter>
           
        )
    }
}
