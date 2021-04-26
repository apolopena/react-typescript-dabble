import React from 'react'
import { Header, QuestionForm, QuestionList } from '../components'
import { useDataApi } from '../hooks'

export function QuestionsContainer({ questions }) {
  const [payload] = useDataApi('/api/questions')

  return (
    <>
      <Header />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-xs-12 col-md-8 col-xl-6'>
            <QuestionForm />
            <p />
            <QuestionList
              payload={payload}
              isLoading={payload.isLoading}
            />
          </div>
        </div>
      </div>
    </>
  )
}
