import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Home from './pages/home';
import NotMatch from './pages/NotMatch';
import Login from './pages/login';

class IRouter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  

        };
    }
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                <Route path="/admin/home">
                                    <Home/>
                                </Route>
                                {/* <Route path="/admin/manage_user">
                                    <User/>
                                </Route> */}
                                <Route >
                                    <NotMatch/>
                                </Route>
                            </Switch>
                        </Admin>
                    }>
                    </Route>
                </App>
            </BrowserRouter>
        );
    }
}

export default IRouter;