import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import { listings } from './models/listings.js';

const app = express()
const port = 3000
await mongoose.connect('mongodb://localhost:27017/listings')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

let getRandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1));
    return arr[rno];
}

app.get('/generate', async (req, res) => {
    const { id } = req.query;

    if (id) {
        const listing = await listings.findOne({ listingID: id });
        if (!listing) {
            return res.status(404).send('Listing not found');
        }
        return res.json(listing);
    } else {
        const count = await listings.countDocuments({})

        if (count === 0) {
            await listings.deleteMany({})

            const Titles = ["Luxury Apartment", "Cozy Studio", "Modern Townhouse", "Spacious Villa", "Charming Cottage"]
            const Prices = [100000, 150000, 200000, 250000, 300000]
            const Sizes = [1000, 1500, 2000, 2500, 3000]
            const Rooms = [1, 2, 3, 4, 5]
            const Bathrooms = [1, 2, 3, 4, 5]
            const Images = ['src/assets/house.jpg', 'src/assets/house.jpg', 'src/assets/house.jpg']
            const Apartment = ["Apartment A", "Apartment B", "Apartment C", "Apartment D", "Apartment E"]
            const Facilities = ["2 BHK", "Parking", "Facility 1", "Facility 2", "Facility 3"]
            const Booleans = [true, false]

            let createdListings = []
            let featuredCount = 0

            for (let i = 0; i < 20; i++) {
                let isFeatured = false;
                if (featuredCount < 3) {
                    isFeatured = true;
                    featuredCount++;
                }

                let data = await listings.create({
                    listingID: uuidv4(),
                    title: getRandom(Titles),
                    imgSrc: Images[0],
                    details: [
                        getRandom(Facilities),
                        getRandom(Facilities),
                        getRandom(Facilities),
                        getRandom(Facilities)
                    ],
                    price: getRandom(Prices),
                    size: getRandom(Sizes),
                    rooms: getRandom(Rooms),
                    bathrooms: getRandom(Bathrooms),
                    apartmentName: getRandom(Apartment),
                    parking: getRandom(Booleans),
                    featured: isFeatured
                });

                createdListings.push(data);
                // console.log(data);
            }
            return res.send(createdListings);
        } else {
            const existingListings = await listings.find({})
            res.send(existingListings)
        }
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})