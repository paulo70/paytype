import { CardWrapper, CardBody } from "./style"
import { IPropsCard } from '../../interfaces/CardProps'

const Card: React.FC<IPropsCard> = ({ children, width }) => {
  return (
    <CardWrapper width={width}>
      <CardBody>
        {children}
      </CardBody>
    </CardWrapper>
  )
}

export default Card