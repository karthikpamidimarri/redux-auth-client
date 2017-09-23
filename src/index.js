/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { initialize } from './App';
/*import config from './config';
const apiUrl = config.apiUrl;*/

const dest = document.getElementById('root');

initialize({ apiUrl: 'http://localhost:3001' /*window.__API_URL__*/ }).then(({ provider }) => {
    ReactDOM.render(
        provider,
        dest
    );
});

if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger

    if (
        !dest || !dest.firstChild || !dest.firstChild.attributes ||
        !dest.firstChild.attributes['data-react-checksum']
    ) {
        console.error(
            'Server-side React render was discarded. Make sure that your initial ' +
            'render does not contain any client-side code.'
        );
    }
}
