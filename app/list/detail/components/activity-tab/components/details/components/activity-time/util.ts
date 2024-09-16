export function formatDateString(dateString: string): string {
  // 将字符串转换为 Date 对象
  const date = new Date(dateString);

  // 定义格式化选项
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',   // 双位数日
    month: 'long',     // 完整月份名称
    year: 'numeric'    // 完整年份
  };

  // 使用 Intl.DateTimeFormat 格式化日期
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
  return formattedDate.replace(/(\d{1,2})/, (match) => match.replace(/^0/, '')); // 去掉前导零
}

export function formatTimeString(dateString: string): string {
  // 将字符串转换为 Date 对象
  const date = new Date(dateString);

  // 获取小时和分钟
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  // 格式化小时和分钟，确保双位数
  const formattedMinutes: string = String(minutes).padStart(2, '0');

  // 确定 am/pm
  const ampm: string = hours >= 12 ? 'pm' : 'am';

  // 转换为12小时制
  const displayHours: string = String(hours % 12 || 12).padStart(2, '0');

  return `${displayHours}:${formattedMinutes} ${ampm}`;
}