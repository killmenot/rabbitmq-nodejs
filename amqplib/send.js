var amqp = require('amqplib/callback_api');

amqp.connect(process.env.RABBITMQ_URL, function (error0, connection) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    var queue = 'hello';

    channel.assertQueue(queue, {
      durable: false
    });

    setInterval(() => {
      const msg ='Hello world ' + new Date().toISOString()
      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(" [x] Sent %s", msg);
    }, 10000)
  });
});