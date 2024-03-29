import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
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
    await listings.deleteMany({});

    const randomTitles = ["Luxury Apartment", "Cozy Studio", "Modern Townhouse", "Spacious Villa", "Charming Cottage"];
    const randomPrices = [100000, 150000, 200000, 250000, 300000];
    const randomSizes = [1000, 1500, 2000, 2500, 3000];
    const randomRooms = [1, 2, 3, 4, 5];
    const randomFacilities = ["2 BHK", "Parking", "Facility 1", "Facility 2", "Facility 3"];
    const randomBooleans = [true, false];

    let createdListings = [];
    let featuredCount = 0;

    for (let i = 0; i < 20; i++) {
        let isFeatured = false;
        if (featuredCount < 3) {
            isFeatured = true;
            featuredCount++;
        }

        let data = await listings.create({
            title: getRandom(randomTitles),
            imgSrc: 'src/assets/house.jpg',
            details: [
                getRandom(randomFacilities),
                getRandom(randomFacilities),
                getRandom(randomFacilities),
                getRandom(randomFacilities)
            ],
            price: getRandom(randomPrices),
            size: getRandom(randomSizes),
            rooms: getRandom(randomRooms),
            parking: getRandom(randomBooleans),
            featured: isFeatured
        });

        createdListings.push(data);
        console.log(data);
    }

    res.send(createdListings);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})