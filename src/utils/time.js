import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo('en-US');

export const timeAgoFrom = createdTicketTime => {
  return timeAgo.format(new Date(createdTicketTime));
};
