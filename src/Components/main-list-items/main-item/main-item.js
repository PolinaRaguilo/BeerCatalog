/* eslint-disable arrow-parens */
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
import { connect } from "react-redux";
import { deleteFavorite } from "../../../Redux/actions/favoriteAction";

class MainItem extends Component {
  // isFavorite = this.props.favoritesData.find(
  //   (item) => item.id === this.props.id
  // );

  // showRemoveBool = this.props.favoritesData.favorites.filter(
  //   (item) => item.id === this.props.id
  // );

  addFavoriteHandler = () => {
    this.props.addFavoriteBeer(this.props.id);
  };

  deleteHandler = () => {
    this.props.onDeleteFavorite(this.props.id);
  };

  render() {
    const { name, tagline, img } = this.props;
    // console.log(this.showRemoveBool);
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
          <Button
            size="small"
            color="primary"
            onClick={this.addFavoriteHandler}
            // className={this.showRemoveBool ? "btn__show" : "btn__none"}
          >
            Favorite
          </Button>
          <Button
            size="small"
            color="primary"
            // className={this.showRemoveBool ? "btn__none" : "btn__show"}
            onClick={this.deleteHandler}
          >
            Remove favorite
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    favoritesData: state.favoriteReducer.favorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteFavorite: (id) => dispatch(deleteFavorite(id)),
  };
};

MainItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  addFavoriteBeer: PropTypes.func.isRequired,
  onDeleteFavorite: PropTypes.func.isRequired,
  // favoritesData: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainItem);
