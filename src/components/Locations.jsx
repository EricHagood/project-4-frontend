import React, { Component } from 'react'

export default class Locations extends Component {
    render() {
        return (
            this.props.myLocations.map( (location, index) =>{
                return (
                    <div key={index}>
                        <p className="name" onClick={this.props.ChangeLocation(location)} >{location.city}</p>
                        {location.image ? (
                            <img src={atob(location.image)} alt={location.city}></img>
                        ): (
                            <></>
                        )}
                        <p>Latitude: {location.latitude}, Longitude: {location.longitude}</p>
                    </div>
                )
            })
        )
    }
}
