import React from 'react'
import { Link } from 'react-router-dom'
const Show = (props) => {
  const { id, name, popularity, vote_average, vote_count, overview } = props
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`
  return (
    <li>
      <li>
        <Link to={`/show/${id}`}>
          <h2>{name}</h2>
        </Link>
        {/* name */}
        <img src={posterURL} />
        <h3>Rating: {popularity}</h3>
        {/* overview */}
        <h3>Plot: {overview}</h3>
        {/* vote_average */}
        <p>Average vote: {vote_average}</p>
        {/* vote count */}
        <p>Vote count: {vote_count}</p>
      </li>
    </li>
  )
}

// const Cast = (props) => {
//   const {character, id, name,}
//   const actorURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`
//   return (
//     <li>
//       <h1>Cast for show</h1>
//       <h2>{character}</h2>
//       <img src ={actorURL}/>
//       <p>Played by {name} </p>
//     </li>
//   )
// }

export default Show
