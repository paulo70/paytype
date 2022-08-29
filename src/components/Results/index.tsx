import { BoxResults } from "./style"

import { IResultsProps } from "../../interfaces/ResultsProps"

const Results: React.FC<IResultsProps> = ({ children, margin }) => {
  return (
    <BoxResults margin={margin}>
      <h3>{children}</h3>
    </BoxResults>
  )
}

export default Results