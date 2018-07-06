exports.getHiMsg = (req, res) => {
    return res.json({ message: `Hi my name is ${req.query.name}` });
};

exports.getHiMsgIfPassed = (req, res) => {
    if(req.query.name) {
        return res.json({ message: `Hi my name is ${req.query.name}` });
    } else {
        return res.json({ message: `I'm optional :)` });
    }
};

exports.passIdInParams = (req, res) => {
    return res.json({ message: `You ID is ${req.param.id}` });
};

exports.postTitle = (req, res) => {
    return res.json({ message: `You ID is ${req.body.id}` });
};