import React, { useContext} from 'react';
import { UserContext} from '../LoginPage/UserContext';

import './Dashboard.css';

export default function Dashboard() {
    // eslint-disable-next-line
    const { user, setUser } = useContext(UserContext);

  return (
    <div className='g'>
    <br></br>
    <br></br>
    <h2 className='e'>PROFILE</h2>
    <table cellPadding={10} className='f'>
        <tr>
            <b><td>NAME :</td></b>
            <td>{user.username}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>AGE :</td></b>
            <td>{user.age}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>GENDER :</td></b>
            <td>{user.gender}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>MOBILE NUMBER :</td></b>
            <td>{user.contact}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>EMAIL :</td></b>
            <td>{user.email}</td>
        </tr>
        <br></br>

    
        <tr>
            <b><td>DIABETES :</td></b>
            <td>{user.diabetes}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>BP :</td></b>
            <td>{user.bp}</td>
        </tr>
        <br></br>

        <tr>
            <b><td>HEALTH ISSUES :</td></b>
            <td>{user.diseases}</td>
        </tr>
    </table>
    </div>
  )
}
