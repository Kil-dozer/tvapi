import React, { useState, useEffect } from 'react'
// import HelloWorld from '../components/HelloWorld'
import Show from '../components/Show'
// import ShowProfile from '../components/ShowProfile'
// import axios from 'axios'

// import items from '../data/grocery-items.json'

const HomePage = () => {
  const [tvShows, setTvShows] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [showRandom, setShowRandom] = useState([])

  // older use effect but it works, so go
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1/`
    )
      .then((response) => response.json())
      .then((apiData) => {
        const allShows = apiData.results
        setTvShows(allShows)
        console.log(tvShows)
      })
  }, [])

  // useEffect(() => {
  //   console.log('maybe using axios now?')
  //   getAllShows()
  // }, [])

  // const getAllShows = async () => {
  //   const response = await axios.get(
  //     'https://api.themoviedb.org/3/tv/top_rated?api_key=1dec07b813675b0a973263be687652ca&language=en-US&page=1'
  //   )
  //   console.log(response.data)
  //   setTvShows(response.data)
  // }

  // useEffect(() => {
  //   console.log('try-a random')
  //   getARandom()
  // }, [])

  const updateSearchFilter = (e) => {
    setSearchFilter(e.target.value)
    console.log(e.target.value)
  }

  const getARandom = Math.floor(Math.random() * tvShows.length)

  return (
    <main>
      <header>
        <h1>These are TV shows</h1>
        <p>Made by Rob</p>
        <input
          type="search"
          placeholder="search your list"
          onChange={updateSearchFilter}
        />
      </header>
      <ul class="featured-show">
        {getARandom}
        {/* .map((show) => {
          // return (
          //   <Show
          //     name={show.name}
          //     poster_path={show.poster_path}
          //     popularity={show.popularity}
          //     overview={show.overview}
          //     vote_average={show.vote_average}
          //     vote_count={show.vote_count}
          //   />
          // )
        })} */}
      </ul>
      <ul class="show">
        {tvShows
          .filter((show) => {
            // console.log('Will this work?')
            return show.name.toLowerCase().includes(searchFilter.toLowerCase())
          })
          .map((show, index) => {
            return (
              <Show
                key={show.id}
                id={show.id}
                name={show.name}
                poster_path={show.poster_path}
                popularity={show.popularity}
                overview={show.overview}
                vote_average={show.vote_average}
                vote_count={show.vote_count}
              />
            )
          })}
        <li>{/* name, overview, poster_path, vote_average vote_count */}</li>
        {/* {tvShows
          .filter((show) => {
            return show.name.toLowerCase().includes(searchFilter.toLowerCase())
          }) */}

        {/* {tvShows.map((show) => {
          console.log('got here', show)
          return (
            <Show
              key={show.id}
              id={show.id}
              name={show.name}
              rating={show.rating}
            />
          )
        })} */}
      </ul>
    </main>
  )
}

export default HomePage
