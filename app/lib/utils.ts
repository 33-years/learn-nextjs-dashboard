import { Revenue } from './definitions';

/**
 * 将给定的金额数字格式化为美元货币字符串。
 * @param amount - 代表金额的数字，预期为未格式化的整数（例如，100代表1美元）。
 * @returns 返回格式化后的美元金额字符串，例如"$1.00"。
 */
export const formatCurrency = (amount: number) => {
  // 将金额除以100，转换为美元格式，并使用toLocaleString方法进行本地化格式化
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

/**
 * 将日期字符串格式化为指定地区的本地化日期字符串。
 * @param dateStr 日期字符串，应遵循ISO 8601日期格式。
 * @param locale 指定的地区字符串，默认为'en-US'（美国英语）。
 * @returns 格式化后的本地化日期字符串。
 */
export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  // 创建一个Date对象，使用提供的日期字符串。
  const date = new Date(dateStr);
  // 定义日期格式化选项，包括日、月和年的表示方式。
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  // 根据提供的地区和格式化选项创建一个日期格式化器。
  const formatter = new Intl.DateTimeFormat(locale, options);
  // 使用格式化器将Date对象格式化为指定地区的本地化字符串。
  return formatter.format(date);
};
export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
