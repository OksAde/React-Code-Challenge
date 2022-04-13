import React, {useState} from 'react';
import axios from 'axios';

export const UserSearch = () => {
    const [ userName, setUserName ] = useState("");
    const [ nameInput, setNameInput ] = useState("");
    const [ userData, setUserData] = useState([]);

    const handleInput = e => setNameInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        setUserName(nameInput);
        fetchUser(nameInput);
        setNameInput("");
    }

    const fetchUser = async (nameInput) => {
        try {
            let { data } = await axios.get(`https://api.github.com/users/${nameInput}/repos`)
            console.log(data[0].name)
            setUserData(data)
        } catch (err) {
            console.log("User not found")
        }
    };

    return (
        <div>
          <form onSubmit={handleFormSubmit}>
              <label htmlFor='username'>Username</label>
              <input type='text' id = 'username' placeholder = 'Add GitHub username' value = {nameInput} onChange = {handleInput} />
              <input type = "submit" />
          </form>

          <div className = 'userData'>
              <ul> {
                  userData.map( e => (
                      <li key = {e.id} >
                      <button className="gitButton" > Repository Name: {e.name} </button>
                    </li>
                  ))}
                </ul>
          </div>
        </div>
    )
}
