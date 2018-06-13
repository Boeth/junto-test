import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <ListItem>
    <ListItemText
      primary={
        description + " - созданный " + moment(createdAt).format("DD-MM-YYYY")
      }
      secondary={numeral(amount / 100).format("0,0.00")}
    />
    <ListItemSecondaryAction>
      <IconButton aria-label="Edit">
        <Link to={`/edit/${id}`}>
          <EditIcon />
        </Link>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default ExpenseListItem;
