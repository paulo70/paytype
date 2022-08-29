import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const ContentIMG = styled.div`
  width: 100%;
  object-fit: contain;
`

export const Link = styled.a`
  width: 8%;
  padding: 8px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  color: #0054FF;
  cursor: pointer;
  display: inline-block;
  text-decoration: underline;
  font-weight: bold;

  :hover{
    color: #6284cb;
  }
`