import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

function Logout({setToken}) {

    const style = {
        float: 'right',
        margin: '.5em'
    }

    const navigate = useNavigate();

    const signout = () => {
        // remove localstorage info
        localStorage.removeItem('token')
        // reset sessionToken to an empty string
        setToken('')
        // route back to main page
        navigate('/')
    }

    return (
        <>
            <Button
                style={style}
                color='danger'
                outline
                onClick={signout}
            >Signout</Button>
        </>
    )
}

export default Logout