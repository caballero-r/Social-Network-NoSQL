// Import required 
const { Schema, model } = require('mongoose');
const Thoughts = require('./thoughts');

const usersSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                },
                message: props => `${props.value} is not a valid email address.`
            },
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        ],    
    },
    {
        toJson: {
            virtuals: true,
        }
    },
);

//Virtual for friendCount that retrieves the length of the user's friends
usersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Users = model('users', usersSchema);

module.exports = Users;