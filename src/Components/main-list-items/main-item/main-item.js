import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import "./main-item.css";

class MainItem extends Component {
  render() {
    const { id, name, tagline, img } = this.props;
    console.log(id);
    return (
      <Card className="card__wrapper">
        <CardContent>
          <img src={img} alt="beer" className="card__img" />
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="h6" component="h2" className="tagline">
            {tagline}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Open
          </Button>
          <Button size="small" color="primary">
            Favorite
          </Button>
        </CardActions>
      </Card>
    );
  }
}

MainItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default MainItem;
