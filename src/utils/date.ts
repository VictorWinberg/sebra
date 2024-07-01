// thid-party
import dayjs, { ConfigType } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

// Load plugins
dayjs.extend(utc);
dayjs.extend(timezone);

export const toLocalTime = (date: ConfigType): dayjs.Dayjs => {
  return dayjs(date).tz(dayjs.tz.guess());
};
