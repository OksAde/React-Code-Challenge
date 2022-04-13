import axios from 'axios';




export const getRepos = username =>  {
    return async dispatch => {
        try {
            const {data} = await axios.get(`https://api.github.com/users/${username}/repos`)
            return data
        } catch(err) {
            throw new Error(err.message)
        }
    }
}
