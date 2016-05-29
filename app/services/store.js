import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';

const products = [
	Product.create({ title: 'Tent', price: 10, imageUrl: 'assets/images/tent.png', description: 'This tent keeps you off the ground and protected from rain or snow during the night.' }),
	Product.create({ title: 'Sleeping Bag', price: 5, imageUrl: 'assets/images/bag.png', description: 'Double layer construction pairs with a zipper draft tube and adjustable hood to help seal in warmth and keep cold breezes at bay.' }),
	Product.create({ title: 'Flashlight', price: 2, imageUrl: 'assets/images/light.png', description: 'This waterproof, floatable carabiner light features rugged shock-absorbing rubber construction and four super-bright LED lights.' }),
	Product.create({ title: 'First-Aid Kit', price: 3, imageUrl: 'assets/images/kit.png', description: 'This First Aid Kit is an extensively stocked first aid kit with everything you need for peace of mind.' })
];

const orders = [
	Order.create({ id: '1234', name: 'Blaise Blobfish',
		items: [
			LineItem.create({product: products[0], quantity: 1}),
			LineItem.create({product: products[1], quantity: 1}),
			LineItem.create({product: products[2], quantity: 0}),
			LineItem.create({product: products[3], quantity: 0})
		]
	})
];

export default Ember.Service.extend({
	getOrderById(id) { return orders.findBy('id', id); },
	getOrders() { return orders; },
	getProducts() { return products; },

	newOrder() {
		return Order.create({
			items: products.map((product) => {
				return LineItem.create({
					product: product
				});
			})
		});
	}

});
