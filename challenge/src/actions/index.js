import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchGitData = () => {
    const [ username, setUsername ] = useState("");
    const [ nameInput, setnameInput ] = useState("");
    const [ userData, setUserData] = useState([]);
    const [ status, setStatus ] = useState(false);

}

/*const loading = repos => ({ type: 'LOADING', payload: repos });

const loadResult = ({ results: { user, repos} }) => ({
    type: 'LOAD_RESULT',
    payload: { user, repos }
});

export const getResult = searchTerm => {
    return async diaspatch => {
        dispatch(l)ading(searchTerm)

try{}

            const gitUsers = await fetchGitUsers(username);            const reposUsers = await fetchRepos(repoData);
            dispatch(loadResult(repositories))
         catch ()err {}
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
         ;       ;
; ;

const fetchGitUsers = async searchTerm => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
        return data[0].repinfo;
    } catch(err) {
        if (data.status === 404) { throw Error('Not a valid Github Username') }
        throw new Error(err.message)
    };
};

const fetchRepos = async ([ ])*/   
// }
// }

export const getRepos = username =>  {
    return async dispatch => {
        try {
            const {data} = await axios.fetch(`https://api.github.com/users/${username}/repos`)
            return data
        } catch(err) {
            throw new Error(err.message)
        }
    }
}
