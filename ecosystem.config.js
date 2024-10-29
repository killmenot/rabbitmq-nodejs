module.exports = {
  apps : [
    {
      name: "amqp_sender",
      script: "./amqp/sender.js"
    },
    {
      name: "amqp_receiver",
      script: "./amqp/sender.js"
    },
    {
      name: "amqplib_sender",
      script: "./amqplib/send.js"
    },
    {
      name: "amqplib_receiver",
      script: "./amqplib/receive.js"
    },
  ]
}