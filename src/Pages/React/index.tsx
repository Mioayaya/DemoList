import styled from '@emotion/styled'
import { FC, memo } from 'react'
import { Outlet } from 'react-router'

const ReactHomeDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ReactHome:FC = memo(() => {
  return (
    <ReactHomeDiv>
      <h1>React</h1>
      <Outlet />
    </ReactHomeDiv>
  )
})

export default ReactHome