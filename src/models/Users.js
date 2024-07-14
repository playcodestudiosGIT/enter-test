import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
	id: {
		type: String,
		required: [true, 'id is required'],
		unique: true,
		trim: true
	},
	isActive: {
		type: Boolean,
		default: true
	},
	balance: {
		type: String,
		default: "$0.00"
	},
	picture: {
		type: String,
		default: "", // URL PLACEHOLDER IMAGE
		trim: true
	},
	name: {
		type: String,
		required: [true, 'Name is required'],
		trim: true
	},
	gender: {
		type: String,
		required: [true, 'Gender is required']
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		trim: true
	},
	address: {
		type: String,
		default: "",
		trim: true
	},
	about: {
		type: String,
		default: "",
		trim: true
	},
	registered: {
		type: String,
		default: ""
	}
}, {
	timestamps: true
})


export default models.User || model('User', userSchema);