import { ReactHTMLElement, ReactNode } from "react"
import { useNavigate } from "react-router-dom"

import Card from "../../components/Card"
import Button from '../../components/Button'

import { IMoviesProps } from '../../interfaces/MoviesProps'

const ListMovies: React.FC<IMoviesProps> = ({
  poster_path,
  id,
  title,
  release_date,
  overview }) => {

  const navigate = useNavigate()
  const handleDetails = (id: string) => {

    navigate({
      pathname: `/details/${id}`
    })
  }

  return (
    <>
      <Card>
        {poster_path ? (
          <img src={`http://image.tmdb.org/t/p/w185/${poster_path}`} alt='poster' />
        ) : "IMAGE NOT FOUND"}

        <p>Title: {title}</p>
        <p>Release: {release_date}</p>
        <p>Overview: {overview}</p>
        <Button onClick={() => handleDetails(id)} disabled={false}>ver mais</Button>
      </Card>
    </>
  )
}

export default ListMovies