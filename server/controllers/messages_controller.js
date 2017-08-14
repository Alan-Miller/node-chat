let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push( {id, text, time} );
        id++;
        res.status(200).send(messages); 
    }
    ,
    read: (req, res) => {
        res.status(200).send(messages);
    }
    ,
    update: (req, res) => {
        const { text } = req.body;
        const updateId = req.param.id;
        // for (var msg of messages) {
        //     if (msg.id === id) msg.text = text;
        // }
        const msgIndex = messages.findIndex(msg => msg.id === updateId);
        let message = messages[msgIndex];
        messages[msgIndex] = {
            id: message.id,
            time: message.time,
            text: text || message.text
        };
        res.status(200).send(messages);
    }
    ,
    delete: (req, res) => {
        const msgIndex = messages.findIndex(msg => msg.id === req.param.id);
        messages.splice(msgIndex, 1);
        res.status(200).send(messages);
    }
}