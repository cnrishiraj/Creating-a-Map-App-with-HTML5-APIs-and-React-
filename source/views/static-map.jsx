'use strict';
 
import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
 
import Map from '../components/static-map.jsx';
 
const StaticMapView = React.createClass({
  propTypes: {
    provider: React.PropTypes.string.isRequired,
    providerKey: React.PropTypes.string,
    mapType: React.PropTypes.string,
    lon: React.PropTypes.number.isRequired,
    lat: React.PropTypes.number.isRequired,
    display_name: React.PropTypes.string,
    address: React.PropTypes.object.isRequired
  },
  getDefaultProps(){
    return {
      provider: 'google',
      providerKey: '',
      mapType: 'static',
      lon: 0,
      lat: 0,
      display_name: "",
      address: {}
    }
  },
 
  getInitialState(){
    return {
      zoom: 8
    }
  },
 
  lessZoom(){
    this.setState({
      zoom: this.state.zoom > 1 ?
       this.state.zoom -1 : 1
    });
  },
 
  moreZoom(){
    this.setState({
      zoom: this.state.zoom < 18 ?
       this.state.zoom + 1 : 18
    });
  }, getHeightWidth(){
    const w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
 
    const h = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
    return { w, h };
  }, render: function () {
    return (<div>
      <Button
        onClick = { this.lessZoom }
        bsStyle = "primary"
        className = "buttonMinus">
      -</Button>
      <Button
        onClick = { this.moreZoom }
        bsStyle = "primary"
        className = "buttonPlus">
      +</Button>
      <Button
        onClick = { this.props.goBack }
        bsStyle = "success"
        className = "buttonBack">
      Exit</Button>
 <div className="map-title" >
      { this.props.address.road }{ ", " }
      { this.props.address.county }
      </div>
       <Map provider = { this.props.provider }
        providerKey = { this.props.providerKey }
        id = { this.props.provider + "-map" }
        lon = { this.props.lon }
        lat = { this.props.lat }
        zoom = { this.state.zoom }
        height = { this.getHeightWidth().h-150 }
        width = { this.getHeightWidth().w-150 }
        />
        </div>)
  }
});
export default StaticMapView;
