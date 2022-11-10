import Event from '../models/Event.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';


const createEvent = async (req, res) => {
    const {organizer, description} = req.body;

    if(!organizer || !description){
        throw new BadRequestError('Please provide all values');
    }
    req.body.createdBy = req.user.userId;
    const event = await Event.create(req.body);
    res.status(StatusCodes.CREATED).json({event});

}

const getEvents = async (req, res) => {
    const events = await Event.find({createdBy: req.user.userId});

    res.status(StatusCodes.OK).json({events, totalEvents: events.length, numOfPages: 1});
}

const getEvent = (req, res) => {
    res.status(200).json({msg: 'get event'});
}

const updateEvent = async (req, res) => {
    const { id: eventId } = req.params
    const { organizer, description } = req.body
  
    if (!organizer || !description) {
      throw new BadRequestError('Please provide all values')
    }
    const event = await Event.findOne({ _id: eventId })
  
    if (!event) {
      throw new NotFoundError(`No job with id :${eventId}`)
    }
    // check permissions
  
    //checkPermissions(req.user, job.createdBy)
  
    const updatedEvent = await Event.findOneAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    })
  
    res.status(StatusCodes.OK).json({ updatedEvent })
}

const deleteEvent = async (req, res) => {
    res.status(200).json({msg: 'delete event'});
}

export {getEvents, getEvent, createEvent, updateEvent, deleteEvent};