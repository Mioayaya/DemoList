import { FC, memo } from 'react'
import { Outlet } from 'react-router'

const ReactHome:FC = memo(() => {
  return (
    <div>
      <h1>React</h1>
      <Outlet />
    </div>
  )
})

export default ReactHome