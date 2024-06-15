import * as amqp from 'amqplib';
import { Channel, Connection } from 'amqplib';

let connection: Connection | null = null;
let channel: Channel | null = null;

async function connect(): Promise<void> {
    try {
        const amqpUrl = 'amqp://wanderer:wanderer@172.166.224.130';
        connection = await amqp.connect(amqpUrl);
        channel = await connection.createChannel();
        console.log('Connected to RabbitMQ');
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        throw error;
    }
}

function getChannel(): Channel | null {
    return channel;
}

export { connect, getChannel };

