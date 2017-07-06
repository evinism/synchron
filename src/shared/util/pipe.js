/*
  rn pipes are infinite, and can't close... a serious memory hog.
*/


function Pipe(){
  const listeners = [];
  return {
    send: msg => listeners.forEach(fn => fn(msg)),
    subscribe: fn => listeners.push(fn),
    unsubscribe: id => delete listeners[id - 1],
  };
}

export default Pipe;
