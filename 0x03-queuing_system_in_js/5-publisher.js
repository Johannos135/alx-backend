import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
  client.quit();
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

/**
 * publish to the channel holberton school channel
 * the message passed in argument after the time passed
 * in arguments
 * param { string } message
 * param { integer } time
 */
function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send ${message}`);
    client.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
