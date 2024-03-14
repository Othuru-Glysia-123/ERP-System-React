import React from 'react';
import { format } from 'date-fns';
import { getOrderStatus } from '../../assets/libs/helpers';
import './Orders.scss';

const recentOrderData = [
  {
    id: '1',
    product_id: '8501',
    customer_id: '32134',
    customer_name: 'Omar Darobe',
    order_date: '2024-03-11T03:24:00',
    order_total: '$899.99',
    current_order_status: 'PLACED',
    shipment_address: 'Broadway, CA 34521'
  },
  {
    id: '2',
    product_id: '2506',
    customer_id: '45123',
    customer_name: 'Fran Perez',
    order_date: '2024-02-04T05:24:00',
    order_total: '$59.49',
    current_order_status: 'SHIPPED',
    shipment_address: 'New York, CA 45123'
  },
  {
    id: '3',
    product_id: '1534',
    customer_id: '56789',
    customer_name: 'Vinet',
    order_date: '2024-01-10T07:14:00',
    order_total: '$250.99',
    current_order_status: 'DELIVERED',
    shipment_address: 'Greenwich, CA 82683'
  },
  {
    id: '4',
    product_id: '1845',
    customer_id: '90784',
    customer_name: 'Anika Viseer',
    order_date: '2024-03-20T12:40:00',
    order_total: '$199.49',
    current_order_status: 'SHIPPED',
    shipment_address: 'Lafayette, CA 74503'
  },
  {
    id: '5',
    product_id: '1654',
    customer_id: '32467',
    customer_name: 'Lulia albu',
    order_date: '2024-02-15T03:24:00',
    order_total: '$499.99',
    current_order_status: 'OUT_FOR_DELIVERY',
    shipment_address: 'Mercer St, CA 84203'
  },
  {
    id: '6',
    product_id: '2134',
    customer_id: '90345',
    customer_name: 'Miron Vitold',
    order_date: '2024-01-20T05:24:00',
    order_total: '$599.99',
    current_order_status: 'DELIVERED',
    shipment_address: 'Waverly PI, CA 10317'
  }
]

const RecentOrders = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Orders Management</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto text-gray-800">
          <thead>
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Product ID</th>
              <th className="p-4">Customer Name</th>
              <th className="p-4">Order Date</th>
              <th className="p-4">Order Total</th>
              <th className="p-4">Shipping Address</th>
              <th className="p-4">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-100 transition-all border-b border-gray-200"
              >
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.product_id}</td>
                <td className="p-4">{order.customer_name}</td>
                <td className="p-4">{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
                <td className="p-4">{order.order_total}</td>
                <td className="p-4">{order.shipment_address}</td>
                <td className={`p-4 ${getOrderStatusColor(order.current_order_status)}`}>
                  {getOrderStatus(order.current_order_status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Function to determine the color based on order status
const getOrderStatusColor = (status) => {
  switch (status) {
    case 'PLACED':
      return 'text-blue-500';
    case 'CONFIRMED':
      return 'text-green-500';
    case 'SHIPPED':
      return 'text-yellow-500';
    case 'OUT_FOR_DELIVERY':
      return 'text-orange-500';
    case 'DELIVERED':
      return 'text-green-700';
    default:
      return 'text-gray-700';
  }
};

export default RecentOrders;
