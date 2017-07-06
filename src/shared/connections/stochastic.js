import Basic from './basic';

export default function Stochastic(){
  const leftPipe = Basic();
  const rightPipe = Basic();

  const generateDelay = () => {
    return Math.random()*2000 + 500;
  };

  leftPipe.right.subscribe(
    msg => {
      setTimeout(() => rightPipe.left.send(msg), generateDelay());
    }
  );
  rightPipe.left.subscribe(
    msg => {
      setTimeout(() => leftPipe.right.send(msg), generateDelay());
    }
  );
  return {
    left: leftPipe.left,
    right: rightPipe.right,
  }
}
