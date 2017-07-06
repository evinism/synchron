import nodeName from 'project-name-generator';

export default () => {
  const name = nodeName().dashed;
  return {
    attach: port => {
      port.subscribe(msg => {
        console.log(` -> ${name} recieved ${msg}`);
      });

      // periodically send the port a message, for testing purposes
      let seqCounter = 0;
      const sendMessage = () => {
        const evt = `[[ src: ${name}, seq #${seqCounter} ]]`;
        console.log(`<- ${name} sending ${evt}`);
        port.send(evt);
        seqCounter++;
      };

      const messageRepeater = () => {
        setTimeout(() => {
          sendMessage();
          messageRepeater();
        }, Math.random()*50000);
      }
      messageRepeater();
    },
  }
};
