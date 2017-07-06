import Pipe from './pipe';
import { v4 } from 'uuid';


function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

export default function EventSource(name, ownerId){
  const port = Pipe();

  // periodically send the port a message, for testing purposes
  let seqCounter = 0;
  let prevId = null;
  let keepGoing = true;
  const sendMessage = () => {
    const now = new Date();
    const dispTime = leftPad(Math.round((now.getSeconds() + (now).getMilliseconds()/1000)*1000), 6);
    const msg = {
      id: v4(),// disptime to make it work really well
      ownerId: ownerId,
      parentId: prevId,
      type: 'ping',
      payload: `${dispTime}: ${name}`,
    };
    prevId = msg.id;
    seqCounter++;
    if(seqCounter > 6){
      keepGoing = false;
    } else {
      port.send(msg);
    }
  };

  const messageRepeater = () => {
    setTimeout(() => {
      if(keepGoing){
        sendMessage();
        messageRepeater();
      }
    }, Math.random()*5000);
  }
  messageRepeater();

  return port;
}
