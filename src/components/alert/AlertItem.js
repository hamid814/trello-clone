import React from 'react'

const AlertItem = ({ alert, deleteAlert }) => {
  const onXClicked = () => {
    deleteAlert(alert.id);
  }

  return (
    <div className={`trello-alert-item alert rounded-lg alert-${alert.type}`}>
        <div className='trello-alert-item-msg'>
          { alert.msg.charAt(0).toUpperCase() + alert.msg.slice(1) }
        </div>
        <div className='trello-alert-item-close close' onClick={onXClicked}>
          &times;
        </div>
    </div>
  )
}

export default AlertItem
