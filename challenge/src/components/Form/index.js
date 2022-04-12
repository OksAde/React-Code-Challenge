import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  const initialUsername = useSelector(state => state.username);
  const [username, setUsername] = useState(initialUsername);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({type: "SET_USERNAME", payload: username});
      e.target.reset();
  };

  const handleInput = (e) => {
      setUsername(e.target.value);
  };
  return(
    <div>
            <p>Search a GitHub username to see their repositories!</p>
            <br></br>
        <form    role="search" 
            aria-label="Search Bar" 
            onSubmit={handleSubmit}>
              
          <input arial-label="Github username"
            className='user-search'
            onChange={handleInput}
            type="search"
            placeholder='Github username'
            value={username}
            />
            <button type="submit" className='submit-button'>Search</button>
        </form>
    </div>
  )
}

export default Form
