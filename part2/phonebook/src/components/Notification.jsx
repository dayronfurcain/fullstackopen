/* eslint-disable react/prop-types */
function Notification({ message, error }) {
  if (message === null) {
    return null
  }

  return <div className={`${error ? 'error' : 'success'}`}>{message}</div>
}

export default Notification
