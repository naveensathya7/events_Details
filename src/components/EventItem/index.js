// Write your code here
import './index.css'

const EventItem = props => {
  const {renderActiveEvent, eventDetails} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEvent = () => {
    renderActiveEvent(id)
  }

  return (
    <li className="list-item-event" onClick={onClickEvent}>
      <button className="event-button" type="button">
        <img className="event-image" src={imageUrl} alt="event" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}
export default EventItem
