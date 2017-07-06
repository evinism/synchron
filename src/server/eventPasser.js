/*
  start off with sending all messages to all ports.
*/

// TODO: same thing with making this a stateful object
export default () => {
  const ports = [];
  return {
    register: newPort => {
      ports.forEach(oldPort => {
        newPort.subscribe(oldPort.send);
        oldPort.subscribe(newPort.send);
      });
      ports.push(newPort);
    }
  };
};
