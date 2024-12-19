import API_URL from '../../../../../../../src copy/sites/mapawynajmu-pl/shared/constants/urls/api';
import { getAccessToken } from '../../../../../../../../../common/components/user/components/auth/functions/get-access-token';
import { UPDATE_VISIBLE_ROUTE_DATA } from '../constants/api_route_data';

export function triggerVisible(announcement, index) {
  if (this.props.connecting) return;
  this.props.setControl({ connecting: true });
  const access_token = getAccessToken();
  const { method, route } = UPDATE_VISIBLE_ROUTE_DATA;

  fetch(`${API_URL}/${route}/${announcement.id}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      access_token,
    },
    body: JSON.stringify({ visible: !announcement.visible }),
  }).then((response) => {
    if (response.ok) {
      this.props.setData({
        announcements: deepCloneAnnouncement.call(this, announcement, index),
      });
    }
    this.props.setControl({ connecting: false });
  });
}

function deepCloneAnnouncement(announcement, index) {
  const announcements = [...this.props.announcements];
  const copiedAnnouncement = { ...announcement };
  copiedAnnouncement.visible = !announcement.visible;

  announcements[index] = copiedAnnouncement;
  return announcements;
}
