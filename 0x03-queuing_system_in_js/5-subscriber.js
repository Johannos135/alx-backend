import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
  client.quit();
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('message', (channel, message) => {
  if (message === 'KILL_SERVER') {
    client.unsubscribe(channel);
    client.quit();
  }
  console.log(message);
});

client.subscribe('holberton school channel');
