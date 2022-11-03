import Event from '../models/Event';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors';


const createEvent = async (req, res) => {
    const {organizer, description} = req.body;

    if(!organizer || !description){
        throw BadRequestError('Please provide all values');
    }
    req.body.createdBy = req.body.userId;
    const job = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({job});

}

const getEvents = (req, res) => {
    res.status(200).json({msg: 'all events'});
}

const getEvent = (req, res) => {
    res.status(200).json({msg: 'get event'});
}

const updateEvent = (req, res) => {
    res.status(200).json({msg: 'update event'});
}

const deleteEvent = (req, res) => {
    res.status(200).json({msg: 'delete event'});
}

export {getEvents, getEvent, createEvent, updateEvent, deleteEvent};