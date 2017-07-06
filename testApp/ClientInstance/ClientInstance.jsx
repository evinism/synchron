import React from 'react';
import { v4 } from 'uuid';

import evalSortStrength from '../../src/shared/util/evalSortStrength';

const dispEvt = (msg) => msg.payload + ' - ' + String(msg.parentId).slice(0,4);

window.evalSortStrength = evalSortStrength;

export default ({name, sentMessages, recievedMessages, toToset}) => {
  const toset = toToset();
  return (
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
        { toset.map(
          (msg, idx) => <li key={idx}>{dispEvt(msg)}</li>
        )}
      </ul>
      score:
      <div>
        {evalSortStrength(toset.map(msg => msg.payload))}
      </div>
    </section>
  );
}
