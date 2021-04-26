import React from 'react'
import './styles.css'

const QuestionListItem = ({ item }) => (
  <div className='row'>
    <div className='col-sm-10'>
      <h5>{item.description}</h5>
    </div>
    <div className='col-sm text-right align-self-center'>
      <span className='badge badge-primary p-2 pink-text'>
        <span className='badge badge-light mr-1'>{item.answers_count}</span>
      answers
    </span>
    </div>
  </div>
)
export default QuestionListItem
