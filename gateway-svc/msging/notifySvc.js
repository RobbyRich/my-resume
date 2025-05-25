const zmq = require("zeromq");

const requester = new zmq.Request;
const notifySvcAddr = process.env.NOTIFY_SVC_ADDR;

let connected = false;

const connect = () => {
    if (connected) {
        return;
    }
    requester.connect(notifySvcAddr);
    console.log(`Connected to notify-svc at ${notifySvcAddr}`);
    connected = true;
}

const send = async (payload) => {
    if (!connected) {
        return { success: false, result: "Not connected" };
    }

    await requester.send(JSON.stringify(payload));
    const [rawResponse] = await requester.receive();
    return JSON.parse(rawResponse.toString());
}


module.exports = {
    connect,
    send
}