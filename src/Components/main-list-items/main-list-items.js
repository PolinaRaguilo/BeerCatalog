/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable arrow-parens */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Grid,
  IconButton,
  InputAdornment,
  Slider,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MainItem from "./main-item/main-item";
import "./main-list-items.css";
import { addFavorite } from "../../Redux/actions/favoriteAction";
import Spinner from "../Spinner/spinner";
import ErrorLoading from "../Error/error-loading";

class MainListItems extends Component {
  state = {
    searchText: "",
    filteredData: this.props.beerData,
    alcoholVolume: 0,
    ibuSlider: 0,
    ebcSlider: 0,
  };

  addToFavorite = (idBeer) => {
    const beer = this.props.beerData.find((item) => item.id === idBeer);
    const { id, name, tagline, description, image_url } = beer;
    this.props.onFavoriteBeer(id, name, tagline, description, image_url);
  };

  onSearchData = () => {
    let currentData;
    let newList;
    if (this.state.searchText !== "") {
      currentData = this.props.beerData;
      newList = currentData.filter((item) =>
        item.name
          .toLowerCase()
          .includes(this.state.searchText.toLocaleLowerCase())
      );
    } else {
      newList = this.props.beerData;
    }
    this.setState({ filteredData: newList });
  };

  onChangeText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  alcoholVolumeChange = (e, newValue) => {
    this.setState({ alcoholVolume: newValue });
  };

  ibuChange = (e, newValue) => {
    this.setState({ ibuSlider: newValue });
  };

  ebcChange = (e, newValue) => {
    this.setState({ ebcSlider: newValue });
  };

  render() {
    const filteredBeer = this.state.filteredData.map((item) => {
      const { id, name, tagline, image_url } = item;
      return (
        <MainItem
          key={id}
          id={id}
          name={name}
          tagline={tagline}
          img={image_url}
          addFavoriteBeer={this.addToFavorite}
        />
      );
    });
    const beerItems = this.props.beerData.map((item) => {
      const { id, name, tagline, image_url } = item;
      return (
        <MainItem
          key={id}
          id={id}
          name={name}
          tagline={tagline}
          img={image_url}
          addFavoriteBeer={this.addToFavorite}
        />
      );
    });
    const showItems =
      this.state.filteredData.length === 0 ? beerItems : filteredBeer;
    return (
      <>
        <TextField
          placeholder="Search beers..."
          id="outlined-basic"
          variant="outlined"
          className="search__input"
          onChange={this.onChangeText}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={this.onSearchData}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className="search__panel">
          <h3 className="res">Filter results</h3>
          <Grid container spacing={2} alignItems="center">
            <Grid>
              <span className="filter__title">Alcohol by volume</span>
            </Grid>
            <Grid>
              <span className="filter__value">
                {this.state.alcoholVolume === 0
                  ? null
                  : this.state.alcoholVolume}
              </span>
            </Grid>
            <Grid item xs>
              <Slider
                min={2}
                max={14}
                value={this.state.alcoholVolume}
                onChange={this.alcoholVolumeChange}
                aria-labelledby="input-slider1"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid>
              <span className="filter__title">
                International Bitterness Units
              </span>
            </Grid>
            <Grid>
              <span className="filter__value">
                {this.state.ibuSlider === 0 ? null : this.state.ibuSlider}
              </span>
            </Grid>
            <Grid item xs>
              <Slider
                min={0}
                max={120}
                value={this.state.ibuSlider}
                onChange={this.ibuChange}
                aria-labelledby="input-slider2"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid>
              <span className="filter__title">Color by EBC</span>
            </Grid>
            <Grid>
              <span className="filter__value">
                {this.state.ebcSlider === 0 ? null : this.state.ebcSlider}
              </span>
            </Grid>
            <Grid item xs>
              <Slider
                min={4}
                max={80}
                value={this.state.ebcSlider}
                onChange={this.ebcChange}
                aria-labelledby="input-slider"
              />
            </Grid>
          </Grid>
        </div>
        <InfiniteScroll
          className="infiniteScroll"
          dataLength={this.props.beerData.length}
          next={this.props.onLoadMore}
          hasMore
          loader={this.props.errorItem ? null : <Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b> You have seen it all!</b>
            </p>
          }
        >
          <div className="catalog__wrapper">
            {this.props.errorItem ? <ErrorLoading /> : null}
            {/* {this.props.loadingItems ? <Spinner /> : null} */}
            {!(this.props.errorItem || this.props.loadingItems)
              ? showItems
              : null}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beerData: state.beerReducer.beers,
    errorItem: state.beerReducer.errorItem,
    loadingItems: state.beerReducer.loadingItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFavoriteBeer: (id, name, tagline, description, img) =>
      dispatch(addFavorite(id, name, tagline, description, img)),
  };
};
MainListItems.propTypes = {
  beerData: PropTypes.array.isRequired,
  onFavoriteBeer: PropTypes.func.isRequired,
  errorItem: PropTypes.bool.isRequired,
  loadingItems: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);
