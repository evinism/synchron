import nodeName from 'project-name-generator';
import EventSource from '../shared/util/eventSource';
import tap from '../shared/util/pipeTap';
import { toToset } from '../shared/eventPoset';
import { v4 } from 'uuid';

// TODO: move this to be a class-- there's no reason it shouldn't be.
// it's a stateful actor.
export default () => {
  const name = nodeName().dashed;
  const recievedMessages = [];
  const sentMessages = [];
  const eventHash = {};
  const clientId = v4();
  const eventSource = EventSource(name, clientId);
  let lastEventIdSeen = null;

  const registerEvent = (event) => {
    lastEventIdSeen = event.id;
    eventHash[event.id] = event;
  }

  return {
    attach: port => {
      port.subscribe(msg => {
        recievedMessages.push(msg);
        registerEvent(msg);
        //console.log(` -> ${name} recieved ${msg}`);
      });

      eventSource.subscribe(msg => {
        const newMsg = {...msg, parentId: lastEventIdSeen }
        sentMessages.push(newMsg);
        registerEvent(newMsg);
        port.send(newMsg);
      });
    },
    toToset: () => toToset(eventHash),
    recievedMessages,
    sentMessages,
    name,
    clientId,
  }
};
