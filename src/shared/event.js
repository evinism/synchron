/*
  this serves as a bit of documentation around events and such.
  why am i still writing javascript at this point

  events are of shape: {
    id: 'uuid',
    ownerId,
    parent: 'uuid' | null, // null for no parent, only one event should have this.
    type: 'typeString',
    payload: 'whatever you want dude',
  }

  Not only can events transform data, but they can also become lenses by which future events are judged
  So if I have two events, a, b which both have parent p, and a is toseted before b, then b should be transformed
  knowing that 1: we were operating on knowledge of p and 2: a transforms it in a different way. 
*/
