import React, { Component } from 'react'

class Clients extends Component {
    render() {
        const clients = [{
            id: '3536272828',
            firstNmae: 'kevin',
            lastName: 'Johsnson',
            email: 'keving@gmail.com',
            phone: '0810912715',
            balance: '30'
        }]
        return (
            <div>
                <h1>Clients</h1>
            </div>
        )
    }
}

export default Clients;