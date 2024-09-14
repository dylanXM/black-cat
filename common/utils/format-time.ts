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