import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export const UserList = () => {
const [users, setUser] = useState([]);

useEffect(()=>{
    getUser();
},[]);

const getUser = async () =>{
    const respone = await axios.get('http://localhost:3000/users');
    setUser(respone.data);
};

const deleteUser = async (id) =>{
    try {
        await axios.delete(`http://localhost:3000/users/${id}`);
        getUser();
    } catch (error) {
        console.log(error);
    }
}
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={(`add`)} className="button is-success">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                       <tr key={user.id}>
                       <td>{index + 1}</td>
                       <td>{user.name}</td>
                       <td>{user.email}</td>
                       <td>{user.gender}</td>
                       <td>
                        <Link to={`edit/${user.id}`} className="button is-small is-info">Edit</Link>
                        <button onClick={()=> deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                       </td>
                   </tr> 
                    ))} 
                </tbody>
            </table>
            </div>
    </div>
  )
}
