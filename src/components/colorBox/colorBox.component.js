import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
const useStyle = makeStyles(theme => ({
  root: {
    width: props => props.size,
    height: props => props.size,
    background: props => props.color,
    borderRadius: 4,
    marginRight: 10
  }
}));
function ColorBox(props) {
  const classes = useStyle(props);
  return <div className={classes.root}></div>;
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};
export default ColorBox;
