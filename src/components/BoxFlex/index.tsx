import { Div } from './style'
import { TCommonProps } from '../../interface/ChildCommon'

const Box: React.FC<TCommonProps> = ({ children }) => {
  return (
    <Div>
      {children}
    </Div>
  )
}

export default Box