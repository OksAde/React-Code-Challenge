import React from 'react'

export default function Results({data}) {
  return (
    <div className='repoItem' role='listItem'>
        <h2><a href={data.html_url} target="_blank">{data.name}</a></h2>
            <p>Forks: {data.forks_count}</p>
            <p>Stargazers: {data.stargazers_count}</p>
            <p>Open Issues: {data.open_issues}</p>
    </div>
  )
}
