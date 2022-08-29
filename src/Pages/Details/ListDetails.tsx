import { Content, ContentIMG, Link } from './style'
import Card from '../../components/Card'
import Results from '../../components/Results'

import { IDetailsMovieProps } from '../../interfaces/DetailsMovieProps'
import { useNavigate } from 'react-router'

const ListDetails: React.FC<IDetailsMovieProps> = ({
  original_title,
  id,
  backdrop_path,
  overview,
  popularity,
  vote_average
}) => {
  const navigate = useNavigate()
  return (
    <>
      <Link onClick={() => navigate(-1)}>Voltar</Link>
      <Results margin='20px'>
        Título original: {original_title}
      </Results>
      <Card width="100%">
        <Content>
          <ContentIMG>
            <img src={`http://image.tmdb.org/t/p/w185/${backdrop_path}`} alt='poster' />
          </ContentIMG>
          <p>Popularidade: {popularity}</p>
          <p>Avaliação: {vote_average}</p>
          <p>Resumo:</p>
          <p>{overview}</p>
        </Content>
      </Card>
    </>
  )
}

export default ListDetails