import React, { Component } from "react";
import { Paper, Box, Grid, Typography, Button, Fab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ShippingIcon from "@material-ui/icons/LocalShipping";

import CartSubItem from "../../components/cartSubItem/cartSubItem.component";
import { connect } from "react-redux";
import {
  setCartItems,
  addStock,
  removeStock
} from "../../redux/cart/cart.actions";
// import { SET_CART } from "../../utils/actions/const";
const style = theme => ({
  root: {
    width: "100%",
    margin: 10,
    paddingBottom: 55,
    overflowY: "scroll"
  },
  paper: {
    marginTop: 90,
    padding: 15
  },
  totalTypo: {
    float: "right"
  },
  gridTitle: {
    paddingBottom: 24
  },
  addButton: {
    display: "flex",
    justifyContent: "center"
  },
  fab: {
    position: "absolute",
    bottom: 86,
    right: 29
  }
});
export class CartPage extends Component {
  // state = { cartItems: [] };
  // componentDidMount() {
  //   let cartItems = this.props.cartItems;
  //   this.setState({ cartItems });
  // }
  handleAddStock = item => {
    this.props.addStock(item);
  };
  handleRemoveStock = item => {
    this.props.removeStock(item);
  };

  render() {
    const { classes, cartItems } = this.props;
    // const { cartItems } = this.props;
    // console.log(cartItems);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Box>
            <Grid className={classes.gridTitle} container>
              <Grid item xs={6}>
                <Typography variant="body1"> Cart</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="button" align="right" component="h2">
                  TOTAL: {this.props.total} RS
                </Typography>
              </Grid>
            </Grid>
            {cartItems.map(val => (
              <CartSubItem
                key={val.name}
                itemDetails={val}
                handleAddStock={this.handleAddStock}
                handleRemoveStock={this.handleRemoveStock}
              ></CartSubItem>
            ))}

            <Box className={classes.addButton}>
              <Button variant="text" color="primary">
                Add Product
              </Button>
            </Box>
          </Box>
        </Paper>
        <Fab color="primary" aria-label="add" className={classes.fab}>
          <ShippingIcon />
        </Fab>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.items,
    total: state.cart.total
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCart: items => dispatch(setCartItems(items)),
    addStock: item => dispatch(addStock(item)),
    removeStock: item => dispatch(removeStock(item))
  };
};
const CartPageStyle = withStyles(style)(CartPage);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPageStyle);
