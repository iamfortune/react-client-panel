import React from 'react'
import Clients from '../clients/Clients';
import Sidebar from '../layout/Sidebar';

function Dashboard() {
    return (
      <div className="row">
        <div className="col-md-10">
          <Clients />
        </div>
        <div className="col-md-2">
            <Sidebar />
        </div>
      </div>
    );
}


export default Dashboard;