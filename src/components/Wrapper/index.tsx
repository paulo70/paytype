import React, { ReactNode } from "react"
import { Container } from "./style"
import { TCommonProps } from '../../interface/ChildCommonProps'

const Wrapper: React.FC<TCommonProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Wrapper