const { Queue } = require('bullmq');

const myQueue = new Queue('foo', {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});

async function addJobs() {
  await myQueue.add('myJobName', { qux: 'baz' });
}

addJobs();