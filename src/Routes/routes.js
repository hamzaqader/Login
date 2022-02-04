import { BrowserRouter as Router} from "react-router-dom";
import Login from '../components/Login';
import Register from "../components/register";
import { PrivateRoute } from '../components';
import {PublicRoute} from '../components'
import Dashboard from '../components/Dashboard'
function Routes() {
    return (
        <Router >
                            <div>
                                <PublicRoute  exact path="/" component={Login} />
                                <PrivateRoute path="/dashboard" component={Dashboard} />
                                <PublicRoute path="/register" component={Register} />
                            </div>
                        </Router>
    );
}

export default Routes;
