import React, { Component } from "react";
import CustomCard from "../../components/CustomCard/customCard.component";
import { connect } from "react-redux";
export class AddItemPage extends Component {
  render() {
    const { products, cartItems } = this.props;
    return (
      <div
        style={{
          width: "100%",
          paddingBottom: 55,
          overflowY: "scroll"
        }}
      >
        {products.milk
          ? products.milk.map(item => (
              <CustomCard
                group={item}
                key={item.name}
                cartItems={cartItems}
              ></CustomCard>
            ))
          : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cartItems: state.cart.items
  };
};

export default connect(mapStateToProps)(AddItemPage);
