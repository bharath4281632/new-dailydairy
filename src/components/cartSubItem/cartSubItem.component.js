import React from "react";
// import Grid from '@material-ui/core/Grid'
import {
  Grid,
  Typography,
  ButtonGroup,
  Button,
  Divider
} from "@material-ui/core";
import ColorBox from "../colorBox/colorBox.component";
import AddIcon from "@material-ui/icons/Add";
import MinimizeIcon from "@material-ui/icons/Remove";
// import CartSubItem from "../common/cartSubItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},
  item: { paddingLeft: 5 },
  title: {
    fontSize: 16,
    letterSpacing: 0.15,
    color: "rgba(0, 0, 0, 0.87)"
  },
  subTitle: {
    fontSize: 12,
    letterSpacing: 0.21,
    color: "rgba(0, 0, 0, 0.6)"
  },
  divide: {
    margin: "9px 0"
  }
}));
function CartSubItem(props) {
  const classes = useStyles();
  const { name, color, rate, stock, quantity, purchase } = props.itemDetails;
  return (
    <div>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={1}>
          <ColorBox size={25} color={color}></ColorBox>
        </Grid>
        <Grid item xs={7}>
          <Grid container alignItems="center">
            <Grid item className={classes.item}>
              <Typography component="h2" className={classes.title}>
                {name}
              </Typography>
              <Typography component="h2" className={classes.subTitle}>
                Rate Rs {rate} / {quantity}ml
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
            style={{ float: "right" }}
          >
            <Button
              style={{ padding: 5 }}
              onClick={() => props.handleRemoveStock(props.itemDetails)}
            >
              <MinimizeIcon></MinimizeIcon>
            </Button>
            <Button style={{ padding: 5 }} color="default">
              {purchase}
            </Button>
            <Button
              style={{ padding: 5 }}
              onClick={() => props.handleAddStock(props.itemDetails)}
            >
              <AddIcon></AddIcon>
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Divider className={classes.divide}></Divider>
    </div>
  );
}

export default CartSubItem;
