import { getAnnouncementAmount } from "../../index/functions/get-announcement-amount";

export function componentDidMount() {
  if (announcementEditing()) {
    this.getAnnouncement()
    this.props.changeControl({ editing: true })
  }
}

function announcementEditing() {
  const path = window.location.pathname
  let result = false;
  (['/edytowanie_ogloszenia/', '/announcement_editing/']).map(indexPath => {
    if (path.indexOf(indexPath) != -1) {
      result = true
    }
  })
  return result
}

export function componentWillUnmount() {
  if (this.props.userCreating || this.props.phoneVerifying) return
  this.props.resetControl()
  this.props.resetInputs()
  this.props.resetErrors()
}
