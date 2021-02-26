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

class DetailsPage extends Component {
  render() {
    const urlID = this.props.match.params.id;
    const singleBeer = this.props.beersItems.find((item) => item.id === +urlID);
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
              className="details__btn"
            >
              Add to favorites
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
                <div className="propertie__value">6.0</div>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="IBU" />
                <Tooltip title="IBU" arrow>
                  <ErrorOutlineIcon className="tooltip__icon" />
                </Tooltip>
                <div className="propertie__value">60.0</div>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="EBC" />
                <Tooltip title="EBC" arrow>
                  <ErrorOutlineIcon className="tooltip__icon" />
                </Tooltip>
                <div className="propertie__value">17.0</div>
              </ListItem>
              <Divider />
            </List>
          </div>
          <div className="pairing__wrapper">
            <Typography variant="h4">Food pairing</Typography>
            <List className="list__pairing">
              <ListItem>
                <ListItemText primary="Inbox" />
              </ListItem>
              <Divider />
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
                  <span className="ingridients__value">25 liters</span>
                </ListItem>
                <Divider />
                <ListItem className="li__item">
                  <span className="ingridient__name">Malt</span>
                  <span className="ingridients__value">
                    &quot;Extra Pale&quot; - 5.3 kilograms
                  </span>
                </ListItem>
                <Divider />
                <ListItem className="li__item">
                  <span className="ingridient__name">Hops</span>
                  <span className="ingridients__value">
                    &quot;Ahtanum&quot; - 17.5 grams, add when start
                  </span>
                  <span className="ingridients__value">
                    &quot;Chinook&quot; - 15 grams, add when start
                  </span>
                </ListItem>
                <Divider />
                <ListItem className="li__item">
                  <span className="ingridient__name">Yeast</span>
                  <span className="ingridients__value">
                    Wyeast 1056 - American Ale™
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
                  <span className="ingridients__value">75 minutes at 65℃</span>
                  <span className="ingridients__value">75 minutes at 65℃</span>
                </ListItem>
                <ListItem className="li__item">
                  <span className="ingridient__name">Fermentation</span>
                  <span className="ingridients__value">Perform at 19℃</span>
                </ListItem>
                <ListItem className="li__item">
                  <span className="ingridient__name">Twist</span>
                  <p className="ingridients__value">Heather Honey: 125g</p>
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
  };
};

DetailsPage.propTypes = {
  match: PropTypes.object.isRequired,
  beersItems: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(DetailsPage);
