import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return [
			{ id: 1, name: 'Tom' },
			{ id: 2, name: 'Jerry' }
		].findBy('id', params.order_id);
	}
});
