import { Link } from 'react-router-dom'
import styled from 'styled-components'
import vairaveis from '../../styles/vairaveis'

export const Circulo = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: ${vairaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  list-styled: none;
  text-decoration: none;
`
