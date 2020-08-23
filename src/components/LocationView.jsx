import React, { Component } from 'react'
import SimpleMap from './SimpleMap'

export default class LocationView extends Component {

    render() {
        return (
            <div>
                <div className="location">
                    <h2 className="locationname">Location Name: {this.props.location.city}</h2>
                    <h6>Coordinates: {this.props.location.latitude}, {this.props.location.longitude}</h6>
                    <img src="data:image/jpeg;base64, {this.props.location.image}" alt="uploaded" />
                    <h6>Desription: <p>{this.props.location.description}</p></h6>
                    <SimpleMap lat={parseFloat(this.props.location.latitude)} lng={parseFloat(this.props.location.longitude)} API_KEY={this.props.API_KEY} height='40vh' width='60%' />
                </div>
            </div>
        )
    }
}
