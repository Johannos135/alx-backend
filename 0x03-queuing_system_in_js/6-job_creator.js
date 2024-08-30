import { createQueue } from 'kue';

const queue = createQueue();
const notifObj = {
  phoneNumber: '242064754373',
  message: 'This is the code to verify your account'
};

const job = queue.create('push_notification_code', notifObj);

job
  .on('enqueue', () => {
    console.log('Notification job created:', job.id);
  })
  .on('complete', () => {
    console.log('Notification job completed');
  })
  .on('failed attempt', () => {
    console.log('Notification job failed');
  });
job.save();
