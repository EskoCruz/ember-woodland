import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
	Product.create({ title: 'Tent', price: 10, description: 'This tent keeps you off the ground and protected from rain or snow during the night.' }),
	Product.create({ title: 'Sleeping Bag' price: 5, description: 'Double layer construction pairs with a zipper draft tube and adjustable hood to help seal in warmth and keep cold breezes at bay.' }),
	Product.create({ title: 'Flashlight', price: 2, description: 'This waterproof, floatable carabiner light features rugged shock-absorbing rubber construction and four super-bright LED lights.' }),
	Product.create({ title: 'First-Aid Kit', price: 3, description: 'This First Aid Kit is an extensively stocked first aid kit with everything you need for peace of mind.' })
];

export default Ember.Service.extend({
	getOrderById(id) {
		const orders = this.getOrders();
		return orders.findBy('id', id);
	},

	getOrders() {
		return [
			{ id: 1, name: 'Tom' },
			{ id: 2, name: 'Jerry' }
		];
	},

	getProducts() { return products; }
});
