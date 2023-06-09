// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        className="yet-to-register-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="yet-to-register-description">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form
      </p>
      <button className="yet-to-register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-container">
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registrations-closed-container">
      <img
        className="registrations-closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations are closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderNoActiveView = () => (
    <div className="default-text-container">
      <p className="default-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderActiveRegistration = () => {
    switch (status) {
      case registrationStatus.registered:
        return renderRegisteredView()
      case registrationStatus.registrationsClosed:
        return renderRegistrationsClosedView()
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      default:
        return renderNoActiveView()
    }
  }

  return <div className="main-container">{renderActiveRegistration()}</div>
}
export default ActiveEventRegistrationDetails
