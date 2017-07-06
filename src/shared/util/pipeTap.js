export default function pipeTap(pipe, listener){
  pipe.subscribe(listener);
  return pipe;
}
