import { Div } from './style'
import { TCommonProps } from '../../interfaces/ChildCommonProps'

const Box: React.FC<TCommonProps> = ({ children }) => {
  return (
    <Div>
      {children}
    </Div>
  )
}

export default Box