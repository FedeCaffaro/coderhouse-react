import React from 'react';
import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

const CartWidget = ({ cartItemsCount }) => {
  return (
    <Link to="/cart">

    <IconButton aria-label="cart">
      <Badge badgeContent={cartItemsCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    </Link>
  );
};

export default CartWidget;
