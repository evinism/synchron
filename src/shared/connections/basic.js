import Pipe from '../util/pipe';

/*
  connection's of type
  {
    left: [port],
    right: [port]
  }
*/

function Basic(){
  // like miso/mosi but left and right
  const liro = Pipe();
  const lori = Pipe();
  return {
    left: {
      send: lori.send,
      subscribe: liro.subscribe,
      unsubscribe: liro.unsubscribe,
    },
    right: {
      send: liro.send,
      subscribe: lori.subscribe,
      unsubscribe: lori.unsubscribe,
    }
  }
}

export default Basic;
