import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
    render() {
        const clients = [
            {
            id: '3536272828',
            firstNmae: 'kevin',
            lastName: 'Johsnson',
            email: 'keving@gmail.com',
            phone: '0810912715',
            balance: '30'
        },
         {
            id: '3536272828',
            firstNmae: 'Bob',
            lastName: 'Jackson',
            email: 'bob@gmail.com',
            phone: '0810912715',
            balance: '30'
        }
    ];
        if(clients){
            return (
             <div>
               <div className="row">
                   <div className="col-md-6">
                    <h2> 
                        {' '}
                        <i className="fas fa-users"></i> Clients {' '} 
                    </h2>
                   </div>
                   <div className="col-md-6" />

               </div>
               <table className="table-striped">
                   <thead className="thead-inverse">
                       <tr>
                           <th>Name</th>
                           <th>Email</th>
                           <th>Balance</th>
                           <th />
                       </tr> 
                   </thead>
                   <tbody>
                       {clients.map(client => (
                           <tr key={client.id}> 
                           <td>{client.firstName} {client.lastName} 
                           </td>
                           <td>{client.email}</td>
                           <td>${parseFloat(client.balance).toFixed(2)}</td>
                           <td>
                               <Link
                                to={`/client/${client.id}`} 
                                className="btn btn-secondary btn-sm"
                                >
                                <i className="fas fa-arrow-circle-right"></i>  Details 
                               </Link>
                           </td>
                           </tr>
                        ))}
                   </tbody>
               </table>
             </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default Clients;