import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export const EditUser = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const navigate = useNavigate();
const {id} = useParams();

useEffect(()=>{
   getUserByid();
}, []);

const updateUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:3000/users/${id}`,{
            name,
            email,
            gender
        });
        navigate("/")
    } catch (error) {
        console.log(error);
    }
};

const getUserByid = async () =>{
    const respone = await axios.get(`http://localhost:3000/users/${id}`);
    setName(respone.data.name);
    setEmail(respone.data.email);
    setGender(respone.data.gender);
}

  return (
   <div className="columns mt-5 is-centered">
    <div className="column is-half">
        <form onSubmit={updateUser}>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input 
                    type="text" 
                    className="input" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name' />
                </div>
            </div>
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input 
                    type="text" 
                    className="input"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder='Email' />
                </div>
            </div>
            <div className="field">
                <label className="label">Gender</label>
                <div className="control">
                    <div className="select is-fullwidth">
                        <select value={gender} 
                        onChange={(e) => setGender(e.target.value)}> 
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="field">
              <button type='submit' className='button is-succes'>Update</button>
            </div>
         </form>
     </div>
   </div>
  )
}

export default EditUser;