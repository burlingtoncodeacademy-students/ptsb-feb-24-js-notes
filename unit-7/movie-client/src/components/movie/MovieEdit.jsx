import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environment';

/*
! Challenge
    - import useState within this component.
    - establish a state variable & function for the Title input.
        - The default value will be an empty string.
    - connect the input to detail the value of the current state.
    - establish an event listener to trigger the setState function for the 
    title input. 
    
    - Console log the state variable within the handleSubmit() function
*/

function MovieEdit(props) {

    const { id } = useParams();
    const [ movieTitle, setMovieTitle ] = useState('');
    const [ movieGenre, setMovieGenre ] = useState('');
    const [ movieRating, setMovieRating ] = useState('');
    const [ movieLength, setMovieLength ] = useState('');
    const [ movieReleased, setMovieReleased ] = useState('');
    const navigate = useNavigate();

    const ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R'];
    const genre = [
        null, 'Comedy', 'Drama', 'Action', 'Horror', 'Thriller', 'Family', 'Documentary'
    ]

    const yearRange = () => {
        let years = [null]
        const thisYear = new Date().getFullYear();

        for (let i = thisYear; i >= 1888; i--) years.push(i);

        return (
            <>
                <Input type='select' value={movieReleased} onChange={e => setMovieReleased(e.target.value)} >
                    {years.map((year, index) => {
                        return <option key={index} value={year}>{year}</option>
                    })
                    }
                </Input>
            </>
        )
    }

    const fetchMovie = async () => {
        const url = `${baseURL}/movies/find-one/${id}`

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            console.log(data);

            const {
                title, genre, length, rating, releaseYear
            } = data.result

            setMovieTitle(title);
            setMovieGenre(genre);
            setMovieRating(rating);
            setMovieLength(length);
            setMovieReleased(releaseYear);

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        if(props.token) {
            fetchMovie();
        }
    }, [props.token])

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(movieTitle)

        let body = JSON.stringify({
            title: movieTitle,
            genre: movieGenre,
            length: movieLength,
            rating: movieRating,
            releaseYear: movieReleased
        })

        const requestOptions = {
            headers: new Headers({
                'Content-Type': "application/json",
                "Authorization": props.token
            }),
            body,
            method: 'PATCH'
        }

        const url = `${baseURL}/movies/${id}`;

        try {
            
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            console.log(data);

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h1
                style={{textAlign: 'center', textDecoration: 'underline'}}
            >Edit Movie</h1>
            <Container>
                <Row>
                    <Col md="4">
                        <p>
                            <b>{movieTitle}</b> 
                            <br />A {movieGenre} rated {movieRating} that runs {movieLength} minutes was released in {movieReleased}.
                            <br /> What needs to be changed?
                        </p>
                        <FullButton>
                            <Button
                                color='info'
                                outline
                                onClick={() => navigate('/movie')}
                            >Back to Table</Button>
                        </FullButton>
                    </Col>
                    <Col md="8">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input 
                                    value={movieTitle}
                                    onChange={e => setMovieTitle(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Genre</Label>
                                <Input 
                                    type='select'
                                    value={movieGenre}
                                    onChange={e => setMovieGenre(e.target.value)}
                                >
                                    {
                                        genre.map((g,i) => (
                                            <option
                                                key={i}
                                                value={g}
                                            >
                                                {g}
                                            </option>
                                        ))
                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Rating</Label>
                                <Input 
                                    type='select'
                                    value={movieRating}
                                    onChange={e => setMovieRating(e.target.value)}
                                >
                                    {
                                        ratings.map((r,i) => (
                                            <option
                                                key={i}
                                                value={r}
                                            >
                                                {r}
                                            </option>
                                        ))
                                    }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Length</Label>
                                <Input 
                                    type='number'
                                    value={movieLength}
                                    onChange={e => setMovieLength(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Release Year</Label>
                                {yearRange()}
                            </FormGroup>
                            <FullButton>
                                <Button type='submit' color='success'>Update</Button>
                            </FullButton>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieEdit