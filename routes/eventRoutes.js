import express from 'express';
const router = express.Router();

import { getEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/eventsController.js';

router.route('/').get(getEvents).post(createEvent);
router.route('/:id').get(getEvent).patch(updateEvent).delete(deleteEvent);

export default router;