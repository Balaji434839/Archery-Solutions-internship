import {connect} from 'mongoose';


async function LoginDB (url) {
 connect(url)   
}

export default LoginDB;
