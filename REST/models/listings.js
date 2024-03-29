import mongoose from 'mongoose'

const listingsSchema = new mongoose.Schema({
    title: String,
    imgSrc: String,
    details: [String],
    price: Number,
    size: Number,
    rooms: Number,
    parking: Boolean,
    featured: Boolean
})

export const listings = mongoose.model('listings', listingsSchema)