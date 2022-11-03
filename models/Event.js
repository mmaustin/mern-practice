import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    organizer: {
      type: String,
      required: [true, 'Please provide organizer\'s name'],
      maxlength: 20,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the event'],
      maxlength: 200,
      trim: true,
    },
    eventType: {
        type: String,
        enum: ['sitter', 'celebration', 'tutoring', 'other'],
        default: 'other'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      }, 
    },
    {timestamps: true}
)

export default mongoose.model('Event', EventSchema);