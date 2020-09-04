'use strict';
 
import React from 'react';
import MapFactory from '../source/service/map-factory';
 
const factory = new MapFactory();
const StaticMap = React.createClass({
  propTypes: {
    provider: React.PropTypes.string.isRequired,
    providerKey: React.PropTypes.string,
    id: React.PropTypes.string.isRequired,
    lon: React.PropTypes.string.isRequired,
    lat: React.PropTypes.string.isRequired,
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    zoom: React.PropTypes.number
  },
 
  getDefaultProps(){
    return {
      provider: '',
      providerKey: '',
      id: 'map',
      lat: "0",
      lon: "0",
      height: 0,
      width: 0,
      zoom: 8
    }
  },
 
  getLocation () {
    return factory.getMap({
      providerKey: this.props.providerKey,
      provider: this.props.provider,
      id: this.props.id,
      lon: this.props.lon,
      lat: this.props.lat,
      height: this.props.height,
      width: this.props.width,
      zoom: this.props.zoom
    });
  },
 
  render () {
    const location = this.getLocation();
     let mapSrc;
    let style;
 
    if (!location.data || !location.data.mapSrc) {
      return null;
    }
 
    mapSrc = location.data.mapSrc;
 
    style = {
      width: '100%',
      height: this.props.height
    };
 
    return (
      <div style = { style }
        className = "map-container">
        <img style={ style }
          src={ mapSrc }
          className = "static-map" />
      </div>
    );
  }
});
export default StaticMap;
