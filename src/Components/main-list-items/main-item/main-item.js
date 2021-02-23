import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import "./main-item.css";

class MainItem extends Component {
  render() {
    return (
      <Card className="card__wrapper">
        <CardContent>
          <CardMedia
            className="card__img"
            image="https://cdn.imgbin.com/2/1/8/imgbin-beer-glasses-computer-icons-drink-glass-of-beer-U8bqcA5q8ZKQdsKtgVCfj7xbt.jpg"
          />
          <Typography variant="h5" component="h2">
            Title
          </Typography>
          <Typography variant="h6" component="h2" className="tagline">
            Tagline
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

export default MainItem;
