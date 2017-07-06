// wooo

/*
  Not only can events transform data, but they can also become lenses by which future events are judged
  So if I have two events, a, b which both have parent p, and a is toseted before b, then b should be transformed
  knowing that 1: we were operating on knowledge of p and 2: a transforms it in a different way.
*/

function popNextEvent(eventHash, leafNodes){
  const nextNodeId = Object.values(eventHash).filter(
    event => leafNodes.includes(event.parentId)
  ).map(event => event.id).sort()[0];
  const nextNode = eventHash[nextNodeId];
  let newLeafNodes = leafNodes;
  if (!newLeafNodes.includes(nextNodeId)) {
    newLeafNodes = [nextNodeId, ...leafNodes];
  }
  const restOfEvents = Object.assign({}, eventHash);
  delete restOfEvents[nextNodeId];
  if(!nextNode && Object.keys(restOfEvents).length > 0) debugger;
  return [ nextNode, restOfEvents, newLeafNodes ];
}

export const toToset = eventHash => {

  // we take null as the initial element, think of it as the first element
  let leafNodes = [ null ];
  // additionally, if we haven't seen the parent node to a certain event yet, we should probably treat it as null
  const eventIdsWithoutParents = [];
  /*Object.values(eventHash).filter(
    event => !(eventHash[event.parentId])
  ).map(event => event.id);*/
  const culledEventHash = {...eventHash};
  eventIdsWithoutParents.forEach(
    id => culledEventHash[id] = ({...eventHash[id], parentId: null})
  );
  // b
  let next;
  let rest = culledEventHash;
  let ordered = [];

  [next, rest, leafNodes] = popNextEvent(rest, leafNodes);
  while(next !== undefined) {
    ordered.push(next);
    [next, rest, leafNodes] = popNextEvent(rest, leafNodes);
  }
  return ordered;
};
