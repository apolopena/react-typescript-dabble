import React from 'react'
import { Link } from 'react-router-dom';

import './styles.css'
import { QuestionListItem } from '../index'

const QuestionList = ({ payload, isLoading }) => (
  <div className='card'>
    <div className='card-header'>Questions</div>
    <div className='card-body'>
      {
        payload.data.map(item => (
          <React.Fragment key={item.id}>
            <Link to={`/answers/${item.id}`}>
              <QuestionListItem item={item} />
            </Link>
            <hr />
          </React.Fragment>
        ))
      }
      {isLoading ? <p>'Loading data...</p> : null}
    </div>
  </div>
)
export default QuestionList
