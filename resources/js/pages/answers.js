import React from 'react'
import { Route, useParams, useRouteMatch } from 'react-router-dom'

import { AnswersContainer } from '../containers/answers'

export default function Answers({ match }) {
  const { id } = useParams()
  const { url, path } = useRouteMatch()
  return (
    <>
      <Route exact path={url}>You should not be here ;)</Route>
      <Route path={`${path}/:questionId`}>
        <AnswersContainer />
      </Route>
    </>
  )
}
