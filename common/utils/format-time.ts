import dayjs from 'dayjs';

// 将10位长度字符串时间戳转换为指定格式
export function formatTime(time: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(Number(time)).format(format);
}

export function formatTimeToDay(time: string) {
  return formatTime(time, 'MM/DD');
}

// 将Date转换为指定格式
export function formatDate(date: Date, format: string = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format);
}

export function formatDateToDay(date: Date) {
  return formatDate(date, 'DD/MM/YYYY');
}

// 将 Date 转换为 '14 May 2016 12:22' 格式
export function formatDateToMinute(date: Date) {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
  const day = ('0' + date.getDate()).slice(-2);
  const year = date.getFullYear();
  const hours = ('0' + date.getHours()).slice(-2);
  const minute = ('0' + date.getMinutes()).slice(-2);
  return `${day}${monthNames[date.getMonth()]} ${year} ${hours}:${minute}`;
}