import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import "./favorite-item.css";

class FavoriteItem extends Component {
  render() {
    return (
      <Card className="favorite-card__wrapper">
        <div className="favorite__inner">
          <CardContent>
            <Typography variant="h5" component="h2">
              Title
            </Typography>
            <Typography variant="h6" component="h2" className="tagline">
              Tagline
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className="favorite__description">
              descriptondescriptondescriptondescriptondescriptondescriptondescriptondescripton
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Open
            </Button>
            <Button size="small" color="primary">
              Remove
            </Button>
          </CardActions>
        </div>
        <CardMedia
          className="card__img"
          image="https://cdn.imgbin.com/2/1/8/imgbin-beer-glasses-computer-icons-drink-glass-of-beer-U8bqcA5q8ZKQdsKtgVCfj7xbt.jpg"
        />
      </Card>
    );
  }
}

export default FavoriteItem;
