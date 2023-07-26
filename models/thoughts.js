// Import required
const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs');

// Date formatting function
const dateFormat = (date) => {
    return dayjs(date).format('MMMM/DD/YYYY');
};

// This is the reactionSchema that is nested within this Thought Model
const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateFormat,
        },
    },
    {
        toJson: {
            getters: true,
        }
    }
);

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: dateFormat,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
);

//Virtual for reactionCount that retrieves the length of the thought's reaction
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;