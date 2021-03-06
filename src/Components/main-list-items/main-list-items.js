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
import { filterBeers } from "../../Redux/actions/beerAction";

class MainListItems extends Component {
  state = {
    searchText: "",
    filteredData: this.props.beerData,
    alcoholVolume: 0,
    ibuSlider: 0,
    ebcSlider: 0,
    searchRes: false,
  };

  addToFavorite = (idBeer) => {
    const beer = this.props.beerData.find((item) => item.id === idBeer);
    this.props.onFavoriteBeer(beer.id);
  };

  onSearchData = () => {
    this.setState({ searchRes: true });
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

  onFilter = () => {
    const { alcoholVolume, ibuSlider, ebcSlider } = this.state;
    this.props.onFilterBeers(
      alcoholVolume,
      ibuSlider,
      ebcSlider,
      this.state.filteredData
    );
  };

  onFilterHandler = () => {
    this.onFilter();
    this.onSearchData();
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
                <IconButton onClick={this.onFilterHandler}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className={this.state.searchRes ? "search__panel" : "hide"}>
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
                min={0}
                max={14}
                step={0.1}
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
          loader={!this.props.errorItem && <Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b> You have seen it all!</b>
            </p>
          }
        >
          <div className="catalog__wrapper">
            {this.props.errorItem !== null && <ErrorLoading />}
            {/* {this.props.loadingItems ? <Spinner /> : null} */}
            {/* {this.props.errorItem === null || this.props.loadingItems
              ? showItems
              : null} */}
            {showItems}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beerData: state.beerReducer.beers,
    errorItem: state.beerReducer.errorMsg,
    loadingItems: state.beerReducer.isLoading,
    forFilterData: state.beerReducer.forFilter,
    favoritesId: state.favoriteReducer.favoritesId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFavoriteBeer: (id) => dispatch(addFavorite(id)),
    onFilterBeers: (alcoholFilter, ibuFilter, ebcFilter, data) =>
      dispatch(filterBeers(alcoholFilter, ibuFilter, ebcFilter, data)),
  };
};
MainListItems.propTypes = {
  beerData: PropTypes.array.isRequired,
  onFavoriteBeer: PropTypes.func.isRequired,
  errorItem: PropTypes.bool.isRequired,
  // loadingItems: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onFilterBeers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainListItems);
