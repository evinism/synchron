import {
  SynchronServer,
  SynchronClient,
  StochasticConnection,
} from '../src';

import tap from '../src/shared/util/pipeTap';


export default (update) => {
  function asyncUpdate() {
    setTimeout(update, 10);
  };
  const server = SynchronServer();

  let numOfClients = 10;
  const clients = [];
  for(let i = 0; i < numOfClients; i++){
    const conn = StochasticConnection();
    const newClient = SynchronClient();
    newClient.attach(tap(conn.right, asyncUpdate));
    server.register(tap(conn.left, asyncUpdate));
    clients.push(newClient);
  }

  return {
    server: server,
    clients: clients,
  }
};
