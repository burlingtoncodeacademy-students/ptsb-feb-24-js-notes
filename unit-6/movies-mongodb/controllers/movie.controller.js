const router = require('express').Router();
const Movie = require('../models/movie.model');

//* Error Response Function
const errorResponse = (res, error) => {
    return(
        res.status(500).json({
            Error: error.message
        })
    )
} // helps us reduce our written code

//* POST
router.post('/', async (req,res) => {
    try {
        
        // console.log(potato)

        //1. Pull data from client (body)
        const { 
            title, genre, rating, length, releaseYear 
        } = req.body;

        //2. Create a new object using the Model
        const movie = new Movie({
            title, genre, rating, length, releaseYear
        })

        //3. Use mongoose method to save to MongoDB (database)
        const newMovie = await movie.save();

        //4. Client Response
        res.status(200).json({
            result: newMovie,
            message: `${newMovie.title} added to collection!`
        })

    } catch (err) {
        errorResponse(res, err)
    }
})

//TODO GET One
/* 
!   Challenge
        - By ID (think params)
        - Response should consider
            - If found
            - If no document found
        - Test the route within Postman
        
        Hint: Consider login within user.controller.js
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/
*/

router.get('/find-one/:id', async(req,res) => {
    try {

        const { id } = req.params;
        // console.log(id);
        const getMovie = await Movie.findOne({_id: id})

        getMovie ?
            res.status(200).json({
                result: getMovie
            }) : null
        
    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO Get All
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Test the route within Postman
        
        Docs: https://www.mongodb.com/docs/manual/reference/method/db.collection.find/
        
        Hint: parameters within method are optional
*/

router.get('/', async(req,res) => {
    try {
        
        const getAllMovies = await Movie.find();

        getAllMovies.length > 0 ?
            res.status(200).json({
                result: getAllMovies
            }) : null

    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO Get All by Genre
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
        - Test the route within Postman
*/

router.get('/genre/:genre', async(req,res) => {
    try {
        
        const { genre } = req.params;
        let buildWord;

        if(genre) {
            for(let i = 0; i < genre.length; i++) {
                i === 0 ?
                    buildWord = genre[i].toUpperCase():
                    buildWord += genre[i].toLowerCase();
            }
        }

        const getMovies = await Movie.find({genre: buildWord});

        getMovies.length > 0 ? 
            res.status(200).json({
                result: getMovies
            }) :
            res.status(404).json({
                result: `No movies found.`
            });

    } catch (err) {
        errorResponse(res,err);
    }
})

//TODO PATCH One

//TODO DELETE One

module.exports = router;