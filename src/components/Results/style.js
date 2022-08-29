import styled from 'styled-components'

export const BoxResults = styled.div`
  display: flex;
  justify-content: left;
  
  text-transform: uppercase;
  text-align: left;
  color: #0054FF;
  font-size: 20px;
  border-bottom: 1px solid #0054FF;
  margin-top: ${props => props.margin ? props.margin : ''};
  &{
    h3{
      margin-left: 20px;
      margin-bottom: 10px;
    }
  }
`