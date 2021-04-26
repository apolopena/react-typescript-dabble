import React, { useState, useContext } from 'react'
import axios from 'axios'

import './styles.css'

import AnswerContext from '../../context/AnswerContext'
import { Form } from '../index'

export default function AnswersForm({ questionId }) {
  const MIN = 5
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const { setAnswers } = useContext(AnswerContext)

  const handleSubmit = e => {
    e.preventDefault()
    if (answer == null || answer.trim() === '') {
      setError('The answer field is required.')
      return
    }
    if (answer.length < MIN) {
      setError(`The answer must be at least ${MIN} characters.`)
      return
    }
    post({ description: answer, question_id: questionId })
  }

  // it works.
  const post = (data) => {
    axios.post('/api/answers', data)
      .then(res => {
        setAnswer('')
        setAnswers(res.data)
      })
      .catch(err => setError(err))
  }

  return (
    <Form className='card no-border'>
      <Form.Base onSubmit={handleSubmit} method='POST'>
        <Form.Title className='card-header smaller'>
          Answer the question.
        </Form.Title>
        <Form.TextArea
          rows='2'
          className={
            error ? 'form-control form-control-lg mt-3 is-invalid' : 'form-control form-control-lg mt-3'
          }
          value={answer}
          onChange={
            ({ target }) => {
              setAnswer(target.value)
              setError('')
            }
          }
        />
        {
          error && <Form.Error className='error mt-1'>{error}</Form.Error>
        }
        <div className='text-center py-3'>
          <Form.Submit className='btn btn-primary'>
            Answer Question
          </Form.Submit>
        </div>
      </Form.Base>
    </Form>
  )
}
