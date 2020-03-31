import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import React, { Component } from "react";
const mapStyles = {
    width: '800px',
    height: '300px',
};
class MapContainer extends Component{
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 6.934277, lng: 79.858608}}
            >
                <Marker position={{ lat: 6.934277, lng: 79.858608}} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDB54f_9-MYkv0GQISMVDP14CK0uW4gK-8'
})(MapContainer);