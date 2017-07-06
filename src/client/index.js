// store wraps and keeps track of datums and events
// bleh bleh bleh bleh bleh

/*
  stories:
  clientside merging:
    server just shoves events around,
    clients merge based on recieve event time.
    datum never updated

  serverside merging:
    server looks at all events, and decides the ordering of events, sending established order back to client.
    datum never updated

  both:
    clients merge based on recieve time.


  datum strats:
    datum never updated: the easiest.
    datum updated when persistent source signals version recognized
    datum updated when persistent and all clients signal recognized
    easiest: datum updates when server decides.

  event strats:
    events have no version, and are just applied to the latest datum
    events have a datum version they work on.
    events have a datum and an event version they work on.

  What even is a datum?
    Datum is the conglomeration of all previous events
    It's a perf optimization, that we don't need to reconstruct all events prior to to figure out what is even happening.
    Therefore a datum prepresents a partially infintes set of events

  Therefore:
    Events come before datum
    Events are the source of truth.

  Store is eventStream + initialState;

  so the only thing that matters is mergeEventStream.
    You can't merge datums, it doesn't make semantic sense.

  The event model is gonna change over time

*/

/*
  event shape:
  {
    hostId: 'uuid',
    id: 'uuid',
    localParent: 'uuid',
    foreignParent: 'uuid',
    action: 'String'
    payload: [opt]
  }

  poset: { events }
  toset: [ events ];
*/

console.log('yee');

export default from './testClient';
