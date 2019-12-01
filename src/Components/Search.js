import React from 'react';

const Search = props =>  (
            <form onSubmit={props.getWeather}>
                <input type='text' name='city' placeholder='city...' />
                <input type='text' name='country' placeholder='country...'/>
                <br />
                <input type='text' name='zipcode' placeholder='zip (optional. US only)'/>
                <button>Submit</button>
            </form>
    );


export default Search;