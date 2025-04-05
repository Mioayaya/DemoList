import { FC, memo } from 'react'
import { Outlet } from 'react-router'

const ReactHome:FC = memo(() => {
  return (
    <div>React
      <Outlet />
    </div>
  )
})

export default ReactHome