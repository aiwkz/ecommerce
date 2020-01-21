import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItmes = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

export const selectCartItmesCount = createSelector(
	[selectCartItmes],
	cartItems => cartItems.reduce(
		(accumalatedQuantity, cartItem) => 
		accumalatedQuantity + cartItem.quantity, 0
	)
);

export const selecCartTotal = createSelector(
	[selectCartItmes],
	cartItems => cartItems.reduce(
		(accumalatedQuantity, cartItem) => 
		accumalatedQuantity + cartItem.quantity * cartItem.price, 0
	)
);