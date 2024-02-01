const zmq = require("zeromq");

const requester = new zmq.Request;
const historySvcAddr = process.env.HISTORY_SVC_ADDR;

const messageTypes = {
    GET_SKILLS: "getSkills",
    GET_PROJECTS: "getProjects",
    GET_EXPERIENCES: "getExperiences",
}

let connected = false;

const connect = () => {
    if (connected) {
        return;
    }
    requester.connect(historySvcAddr);
    console.log(`Connected to history-svc at ${historySvcAddr}`);
    connected = true;
}

const send = async (messageType, payload) => {
    if (!connected) {
        return { success: false, result: "Not connected" };
    }

    await requester.send(JSON.stringify({ messageType, payload }));
    const [rawResponse] = await requester.receive();
    return JSON.parse(rawResponse.toString());
}


module.exports = {
    connect,
    send,
    messageTypes
}