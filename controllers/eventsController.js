


const getEvents = (req, res) => {
    res.status(200).json({msg: 'all events'});
}

const getEvent = (req, res) => {
    res.status(200).json({msg: 'get event'});
}

const createEvent = (req, res) => {
    res.status(200).json({msg: 'create event'});
}

const updateEvent = (req, res) => {
    res.status(200).json({msg: 'update event'});
}

const deleteEvent = (req, res) => {
    res.status(200).json({msg: 'delete event'});
}

export {getEvents, getEvent, createEvent, updateEvent, deleteEvent};