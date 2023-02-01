import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = ({ cartItemsCount }) => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cartItemsCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
