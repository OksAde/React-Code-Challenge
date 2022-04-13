import axios from 'axios';

export const getRepos = (username) =>  {
    return async (dispatch) => {
        try {
            const datas = await axios.get(`https://api.github.com/users/${username}/repos`)
            const data = await datas.json();
            if(!Array.isArray(data)) throw data;
            dispatch({
                type: "LOAD_REPOS",
                payload: data
        });
    }catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        }
    }
}
