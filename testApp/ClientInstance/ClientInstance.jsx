import React from 'react';

const dispEvt = (msg) => msg.payload + ' - ' + String(msg.parentId).slice(0,4);

export default ({name, sentMessages, recievedMessages, toToset}) => (
  <section>
    <h2>client {name}</h2>
    sent messages:
    <ul className="sent-messages">
      { sentMessages.map(
        (msg, idx) => <li key={idx}>{dispEvt(msg)}</li>
      )}
    </ul>

    recieved messages:
    <ul className="recieved-messages">
      { recievedMessages.map(
        (msg, idx) => <li key={idx}>{dispEvt(msg)}</li>
      )}
    </ul>

    total order:
    <ul className="ordered-messages">
      { toToset().map(
        (msg, idx) => <li key={idx}>{dispEvt(msg)}</li>
      )}
    </ul>
  </section>
)
