import React from 'react'
import moment from 'moment'
function TimeAgo({date}) {
  const momentData = moment(date)
  return (
    <span title={momentData.toString()}>&nbsp; <i>{momentData.fromNow()}</i></span>
  )
}

export default TimeAgo