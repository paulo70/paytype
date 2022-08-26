import { useEffect, useState, useContext } from 'react';
import ListMovies from "./ListMovies"
import Box from '../../components/BoxFlex'
import Button from '../../components/Button'
import Results from '../../components/Results'
import Loading from '../../components/Loading'

import { IMoviesProps } from '../../interfaces/MoviesProps'

import { SearchContext } from '../../contexts/Search';
import { API_URL, API_KEY } from '../../services/url'


const Movies = () => {
  const { value, currentPage, setCurrentPage, } = useContext(SearchContext)
  const [data, setData] = useState<IMoviesProps[]>([])
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(true)
  const [counts, setCounts] = useState({
    total_pages: 14,
    total_results: 262
  });

  const upcoming = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  const searching = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
    value
  )}&page=${currentPage}`

  const hasPage = counts.total_pages > currentPage;

  const loadMoreItems = () => {
    if (hasPage) setCurrentPage((page) => page + 1)
  };

  useEffect(() => {
    const endpoint =
      value === ""
        ? upcoming
        : searching

    setLoading(true)
    setDisabled(true)
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {

        setData((previous) =>
          currentPage === 1 ? json.results : [...previous, ...json.results]
        );

        setCounts({
          total_pages: json.total_pages,
          total_results: json.total_results
        });
        setDisabled(false)
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => setLoading(false))

  }, [value, currentPage, searching, upcoming])

  return (
    <>
      <Results>
        {value ? `Resultados para: ${value}` : "Últimos lançamentos"}
      </Results>

      <Box>
        {
          data.map(movies => (
            <ListMovies {...movies} key={movies.id} />
          ))
        }
      </Box>

      <Box>
        {loading && <Loading />}
      </Box>

      <Box>
        {hasPage ? (
          <Button onClick={loadMoreItems} disabled={disabled}>
            Load More
          </Button>
        ) : (
          <Results>
            Mostrando {counts.total_results} de {counts.total_results} Movies
          </Results>
        )}
      </Box>
    </>
  )
}

export default Movies