import {Button} from '@restart/ui/esm/';
import {connect} from 'react-redux';
import React from 'react';
import Header from './Header';

const Home = (props) => {
    return (
        <div className="login">
            <Header/>
            <Button variant="info" type="submit">
                Login to Spotify
            </Button>
        </div>
    )
}

export default connect () (Home);
