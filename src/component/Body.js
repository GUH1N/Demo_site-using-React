import React from 'react';
import ReactDOM from 'react-dom';
import 'D:/Work_Space/full_stack/react.js/demo/src/App.css';



function Body(){
    return(
        <div>
        <h1 className='body_h1'>Cast of The Walking Dead</h1>
        <div className='container_body'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Kills</th>
                    <th>Seasons</th>
                    <th>Episodes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rick Grimes</td>
                    <td>Former Sheriff's Deputy</td>
                    <td>100</td>
                    <td>1-9</td>
                    <td>131</td>
                </tr>
                <tr>
                    <td>Daryl Dixon</td>
                    <td>Survivalist</td>
                    <td>200</td>
                    <td>1-11</td>
                    <td>131</td>
                </tr>
                <tr>
                    <td>Michonne</td>
                    <td>Former Lawyer</td>
                    <td>150</td>
                    <td>3-10</td>
                    <td>102</td>
                </tr>
                <tr>
                    <td>Carol Peletier</td>
                    <td>Former Housewife</td>
                    <td>50</td>
                    <td>1-11</td>
                    <td>131</td>
                </tr>
                <tr>
                    <td>Negan</td>
                    <td>Former Leader of the Saviors</td>
                    <td>300</td>
                    <td>6-11</td>
                    <td>102</td>
                </tr>
            </tbody>
        </table>
        </div>

        <div className='session'>
        <div className='contact'>
            <legend>Log In</legend>
            <label>User Name</label>
            <br></br>
            <input type='text'></input>
            <br></br>
            <label>Password</label>
            <br></br>
            <input type='password'></input>
            <br></br>
            <br></br>
            <button>Log In</button>
        </div>
        </div>
        </div>     
    );
  }

export default Body;