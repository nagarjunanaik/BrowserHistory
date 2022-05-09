import './index.css'

const History = props => {
  const {userDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails
  const Delete = () => onDelete(id)

  return (
    <li className="list">
      <div className="list1">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="img" className="img" />
        <h1 className="head">{title}</h1>
        <p className="url">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delet"
        onClick={Delete}
      />
    </li>
  )
}
export default History
