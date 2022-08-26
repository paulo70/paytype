import { CardWrapper, CardBody } from "./style"
import { TCommonProps } from '../../interface/ChildCommonProps'

const Card: React.FC<TCommonProps> = ({ children }) => {
  return (
    <CardWrapper>
      <CardBody>
        {children}
      </CardBody>
    </CardWrapper>
  )
}

export default Card