import {  Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { logout } from "../Redux/actions/user_action";
function Dashboard(){
    const dispatch = useDispatch();
    const history=useHistory();
    const logoutHandler = () => {
        dispatch(logout(history));
      };
      
      
    return(
        <>
     <h1>Welcome Dashboard</h1>
        <Button onClick={logoutHandler} style={{justifyContent:'center'}}>Logout</Button>
</>
    );
}
export default Dashboard;