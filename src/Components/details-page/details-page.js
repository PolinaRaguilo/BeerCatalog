/* eslint-disable no-debugger */
/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
} from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "./details-page.css";
import { connect } from "react-redux";
import {
  addFavorite,
  deleteFavorite,
} from "../../Redux/actions/favoriteAction";

class DetailsPage extends Component {
  render() {
    const urlID = this.props.match.params.id;
    const singleBeer = this.props.beersItems.find((item) => item.id === +urlID);
    const maltList = singleBeer.ingredients.malt.map((item) => {
      return (
        <span className="ingridients__value">
          &quot;{item.name}&quot; - {item.amount.value} {item.amount.unit}
        </span>
      );
    });
    const hopsList = singleBeer.ingredients.hops.map((item) => {
      return (
        <span className="ingridients__value">
          &quot;{item.name}&quot; - {item.amount.value} {item.amount.unit}, add
          when {item.add}
        </span>
      );
    });

    const mashList = singleBeer.method.mash_temp.map((item) => {
      return (
        <span className="ingridients__value">
          {item.duration} minutes at {item.temp.value}℃
        </span>
      );
    });
    const addHandler = () => {
      const { id, name, tagline, description, image_url } = singleBeer;
      this.props.addToFav(id, name, tagline, description, image_url);
    };

    const deleteFavHandler = () => {
      this.props.deleteFav(singleBeer.id);
    };
    const favId = this.props.favoritesId.find((item) => item === +urlID);
    const isFavorite = this.props.favoritesId.indexOf(favId);

    return (
      <div className="details__wrapper">
        <div className="description__wrapper">
          <div className="description__inner">
            <Typography variant="h3" className="details__title">
              {singleBeer.name}
            </Typography>
            <Typography variant="h4" className="details__tagline">
              {singleBeer.tagline}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={`details__btn
                ${isFavorite === -1 ? "btn__show" : "btn__none"}`}
              onClick={addHandler}
            >
              Add to favorites
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={`details__btn
                ${isFavorite === -1 ? "btn__none" : "btn__show"}`}
              onClick={deleteFavHandler}
            >
              Remove from favorites
            </Button>
            <Typography variant="body2" className="details__description">
              {singleBeer.description}
            </Typography>
          </div>
          <img src={singleBeer.image_url} alt="beer" className="details__img" />
        </div>

        <div className="description__wrapper">
          <div className="properties__wrapper ">
            <Typography variant="h4">Properties</Typography>

            <List className="list__properties">
              <ListItem>
                <ListItemText primary="ABV" />
                <Tooltip title="Add" arrow>
                  <ErrorOutlineIcon className="tooltip__icon" />
                </Tooltip>
                <div className="propertie__value">{singleBeer.abv}</div>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="IBU" />
                <Tooltip title="IBU" arrow>
                  <ErrorOutlineIcon className="tooltip__icon" />
                </Tooltip>
                <div className="propertie__value">{singleBeer.ibu}</div>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="EBC" />
                <Tooltip title="EBC" arrow>
                  <ErrorOutlineIcon className="tooltip__icon" />
                </Tooltip>
                <div className="propertie__value">{singleBeer.ebc}</div>
              </ListItem>
              <Divider />
            </List>
          </div>
          <div className="pairing__wrapper">
            <Typography variant="h4">Food pairing</Typography>
            <List className="list__pairing">
              {singleBeer.food_pairing.map((item) => {
                return (
                  <>
                    <ListItem>
                      <ListItemText primary={item} />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </div>
        </div>
        <div className="brewing__wrapper">
          <Typography variant="h4">Brewing</Typography>
          <Typography variant="body2" className="details__description">
            {singleBeer.brewers_tips}
          </Typography>
          <div className="description__wrapper">
            <div className="ingridients__wrapper">
              <Typography variant="h4">Ingredients</Typography>

              <List className="ingridients__properties">
                <ListItem className="li__item">
                  <span className="ingridient__name">Water</span>
                  <span className="ingridients__value">
                    {singleBeer.boil_volume.value} {singleBeer.boil_volume.unit}
                  </span>
                </ListItem>
                <Divider />
                <ListItem className="li__item">
                  <span className="ingridient__name">Malt</span>
                  {maltList}
                </ListItem>
                <Divider />
                <ListItem className="li__item">
                  <span className="ingridient__name">Hops</span>
                  {hopsList}
                  <span className="ingridients__value">
                    &quot;Chinook&quot; - 15 grams, add when start
                  </span>
                </ListItem>
                <Divider />
                <ListItem className="li__item">
                  <span className="ingridient__name">Yeast</span>
                  <span className="ingridients__value">
                    {singleBeer.ingredients.yeast}
                  </span>
                </ListItem>
                <Divider />
              </List>
            </div>
            <div className="method__wrapper">
              <Typography variant="h4">Method</Typography>

              <List className="method__properties">
                <ListItem className="li__item">
                  <span className="ingridient__name">Mash</span>
                  {mashList}
                </ListItem>
                <ListItem className="li__item">
                  <span className="ingridient__name">Fermentation</span>
                  <span className="ingridients__value">
                    Perform at {singleBeer.method.fermentation.temp.value}℃
                  </span>
                </ListItem>
                <ListItem className="li__item">
                  <span className="ingridient__name">Twist</span>
                  <p className="ingridients__value">
                    {singleBeer.method.twist
                      ? `${singleBeer.method.twist}`
                      : "no information"}
                  </p>
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beersItems: state.beerReducer.beers,
    favoriteItems: state.favoriteReducer.favorites,
    favoritesId: state.favoriteReducer.favoritesId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (id, name, tagline, description, img) =>
      dispatch(addFavorite(id, name, tagline, description, img)),
    deleteFav: (id) => dispatch(deleteFavorite(id)),
  };
};

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  beersItems: PropTypes.array.isRequired,
  // favoriteItems: PropTypes.array.isRequired,
  addToFav: PropTypes.func.isRequired,
  deleteFav: PropTypes.func.isRequired,
  favoritesId: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
