import mongoose from 'mongoose'

const listingsSchema = new mongoose.Schema({
    listingID: String,
    title: String,
    mainImgSrc: String,
    otherImgs: [String],
    details: [String],
    price: Number,
    size: Number,
    rooms: Number,
    bathrooms: String,
    apartmentName: String,
    parking: Boolean,
    featured: Boolean
})

export const listings = mongoose.model('listings', listingsSchema)