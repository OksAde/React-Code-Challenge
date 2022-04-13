import React, {useEffect} from 'react'
import { getRepos } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux';


export default function Result() {
    const username = useSelector(state => state.username);
    const results = useSelector(state =>state.results)
    const loading = useSelector(state =>state.loading)
    const error = useSelector(state =>state.error)

    const renderResult = results.map(result => (
        <ResultItem key={result.id} data={result} />
    ));

    useEffect(() => {
        username && dispatch(getRepos(username));
    }, [username])


  return (
    <>
    {username && <h3>{username}'s Repositories'</h3> }
    {!username && <h2 >No Repositories Found</h2>}
        <div className='repo'>
            
        </div>
    </>
  )
}
