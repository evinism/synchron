import React from 'react';
import ClientInstance from '../ClientInstance';

const App = ({instances: {clients, server}}) => (
  <div>
    <h1> app </h1>
    <div className="clients">
      {clients.map( (client, idx) => (<ClientInstance key={client.name} {...client} />))}
    </div>
  </div>
);

export default App;
