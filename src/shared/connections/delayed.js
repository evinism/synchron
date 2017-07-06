import Basic from './basic';

export default function Delayed(delay){
  const leftPipe = Basic();
  const rightPipe = Basic();
  leftPipe.right.subscribe(
    msg => {
      setTimeout(() => rightPipe.left.send(msg), delay);
    }
  );
  rightPipe.left.subscribe(
    msg => {
      setTimeout(() => leftPipe.right.send(msg), delay);
    }
  );
  return {
    left: leftPipe.left,
    right: rightPipe.right,
  }
}
