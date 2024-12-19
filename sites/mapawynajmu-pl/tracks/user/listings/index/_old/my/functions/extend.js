import API_URL from '../../../../../../../src copy/sites/mapawynajmu-pl/shared/constants/urls/api';
import { getAccessToken } from '../../../../../../../../../common/components/user/components/auth/functions/get-access-token';
import { UPDATE_ACTIVE_UNTIL_ROUTE_DATA } from '../constants/api_route_data';

export function extend(announcement, index) {
  if (this.props.connecting) return;
  this.props.setControl({ connecting: true });
  const access_token = getAccessToken();
  const { method, route } = UPDATE_ACTIVE_UNTIL_ROUTE_DATA;

  fetch(`${API_URL}/${route}/${announcement.id}`, {
    method,
    headers: { 'Content-Type': 'application/json', access_token },
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((json) => {
      this.props.setData({
        announcements: deepCloneAnnouncement.call(
          this,
          json,
          announcement,
          index,
        ),
      });
      this.props.setControl({ connecting: false });
    });
}

function deepCloneAnnouncement(json, announcement, index) {
  const announcements = [...this.props.announcements];
  const clonedAnnouncement = { ...announcement };
  clonedAnnouncement.activeUntil = json.activeUntil;
  announcements[index] = clonedAnnouncement;
  return announcements;
}
