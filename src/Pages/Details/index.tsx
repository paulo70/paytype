import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListDetails from './ListDetails'
import { useParams } from 'react-router'

import { IDetailsMovieProps } from '../../interfaces/DetailsMovieProps'

const Details = () => {
  const [data, setData] = useState<IDetailsMovieProps[]>([])
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e9da1b9b1bf2935bf963f9c98fd51e01&language=en-US`)
        const request = response
        setData([request.data])
      } catch (error) {
        console.log(error, 'ERROR')
      }
    }

    fetchData()
  }, [params.id])

  return (
    <>
      {data?.map(item => (
        <ListDetails {...item} key={item.id} />
      ))}
    </>
  )
}

export default Details