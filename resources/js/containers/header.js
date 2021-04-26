import React from 'react'
import { Header } from '../components'

/*
 Use this for pages that need a different header like the home page,
 Auth pages, etc.. right now there are none of those pages so ignore this file.
*/
export function HeaderContainer({ children }) {
  return (
    <Header>
      {children}
    </Header>
  )
}
