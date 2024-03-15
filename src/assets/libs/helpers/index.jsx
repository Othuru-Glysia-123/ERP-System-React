// helpers.js
import './index.scss'
export function getOrderStatus(status) {
	switch (status) {
		case 'PLACED':
			return (
				<span className="order-status placed">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'CONFIRMED':
			return (
				<span className="order-status confirmed">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'SHIPPED':
			return (
				<span className="order-status shipped">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'OUT_FOR_DELIVERY':
			return (
				<span className="order-status out-for-delivery">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		case 'DELIVERED':
			return (
				<span className="order-status delivered">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
		default:
			return (
				<span className="order-status default">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			);
	}
}
