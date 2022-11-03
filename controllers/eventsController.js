import Event from '../models/Event';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors';



const createEvent = (req, res) => {
    res.status(200).json({msg: 'create event'});
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