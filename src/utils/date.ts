import dayjs, { ConfigType } from 'dayjs';

export const toLocalTime = (date: ConfigType): dayjs.Dayjs => {
  return dayjs(date).tz(dayjs.tz.guess());
};

export const formatDate = (date?: ConfigType): string => {
  return dayjs(date).format('YYYY-MM-DD HH:mm');
};

export const timeAgo = (date: ConfigType): string => {
  return dayjs(date).tz(dayjs.tz.guess()).fromNow();
};
