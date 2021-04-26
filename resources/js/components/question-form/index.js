import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import './styles.css'
import { Form } from '../index'

export default function QuestionForm() {
  const MIN = 5
  const history = useHistory()
  const [question, setQuestion] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (question == null || question.trim() === '') {
      setError('The question field is required.')
      return
    }
    if (question.length < MIN) {
      setError(`The question must be at least ${MIN} characters.`)
      return
    }
    if (question[question.length - 1] !== '?') {
      setError('A question must end with a question mark.')
      return
    }
    post({ description: question })
  }

  // it works.
  const post = (data) => {
    axios.post('/api/questions', data)
      .then(res => {
        console.log(`response: ${JSON.stringify(res, null, 2)}`)
        console.log(`STATUS: ${res.status}`)
        console.log(`question_id: ${res.data.id}`)
        history.push(`/answers/${res.data.id}`)
      })
      .catch(err => setError(err))
  }

  return (
    <Form className='card no-border'>
      <Form.Base onSubmit={handleSubmit} method='POST'>
        <Form.Title className='card-header'>
          Ask a new question
        </Form.Title>
        <Form.TextArea
          rows='2'
          className={
            error ? 'form-control form-control-lg mt-3 is-invalid' : 'form-control form-control-lg mt-3'
          }
          placeholder='What is the meaning of humane?'
          value={question}
          onChange={
            ({ target }) => {
              setQuestion(target.value)
              setError('')
            }
          }
        />
        {
          error && <Form.Error className='error mt-1'>{error}</Form.Error>
        }
        <div className='text-center py-3'>
          <Form.Submit className='btn btn-primary'>
            Ask away
          </Form.Submit>
        </div>
      </Form.Base>
    </Form>
  )
}
