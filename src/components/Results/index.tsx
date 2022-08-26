import { BoxResults } from "./style"
import { TCommonProps } from '../../interface/ChildCommonProps'

const Results: React.FC<TCommonProps> = ({ children }) => {
  return (
    <BoxResults>
      <h3>{children}</h3>
    </BoxResults>
  )
}

export default Results