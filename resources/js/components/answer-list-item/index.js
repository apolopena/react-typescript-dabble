import React from 'react'

const AnswerListItem = ({ item }) => (
  <div className='row'>
    <div className='col-sm-9'>
      <h5>{item.description}</h5>
    </div>
  </div>
)
export default AnswerListItem
