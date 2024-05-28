import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> */}
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
      /**
     * 渲染一个包含标题和值的装饰性组件。
     * @param Icon 可选，图标组件，用于在标题前展示图标。
     * @param title 标题文本。
     * @param value 显示的值文本。
     * @param lusitana 包含 className 属性的对象，用于自定义最内层 p 元素的样式。
     */
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} {/* 如果提供了Icon组件，则显示图标 */}
        <h3 className="ml-2 text-sm font-medium">{title}</h3> {/* 标题显示区域 */}
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value} {/* 显示的值 */}
      </p>
    </div>
  );
}
