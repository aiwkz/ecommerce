import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItmes = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItmesCount = createSelector(
	[selectCartItmes],
	cartItems => cartItems.reduce(
		(accumalatedQuantity, cartItem) => 
		accumalatedQuantity + cartItem.quantity, 0
	)
);