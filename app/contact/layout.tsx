import React, { ReactNode } from 'react'

type PropsType = {
    children: ReactNode
  }
const layout = (props:PropsType) => {
  return (
    <div>{props.children}</div>
  )
}

export default layout