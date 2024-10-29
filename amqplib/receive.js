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

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(queue, function (msg) {
      console.log(" [x] Received %s", msg.content.toString());
    }, {
      noAck: true
    });
  });

  process.once('SIGINT', (signal) => {
    console.log('SIGINT')

    connection.close((error2) => {
      if (error2) {
        throw error2;
      }
      
      process.exit(0)
    })
  });
});