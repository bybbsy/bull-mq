const { Worker } = require('bullmq');

const worker = new Worker('foo', async job => { console.log(job.data) }, {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});

worker.on('completed', job => {
    console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
});