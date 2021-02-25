import React, { Component } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import "./favorite-item.css";

class FavoriteItem extends Component {
  deleteHandler = () => {
    this.props.deleteItem(this.props.id);
  };

  render() {
    const { name, tagline, description, img } = this.props;
    return (
      <Card className="favorite-card__wrapper">
        <div className="favorite__inner">
          <CardContent className="favorite__card-content">
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="h6" component="h2" className="tagline">
              {tagline}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="favorite__description"
            >
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Open
            </Button>
            <Button size="small" color="primary" onClick={this.deleteHandler}>
              Remove
            </Button>
          </CardActions>
        </div>
        <img src={img} className="card__img" alt="favorite-beer" />
      </Card>
    );
  }
}
FavoriteItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default FavoriteItem;
