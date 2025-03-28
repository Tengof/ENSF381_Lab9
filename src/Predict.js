import React from 'react';

function Predict() {
    return (
        <div>
            <form>
                <h1>House Price Predictor</h1>
                <label>City:</label>
                <br/>
                <input
                    name='city'
                    type='text'/>
                <br/>
                <label>Province:</label>
                <br/>
                <input
                    name='province'
                    type='text'/>
                <br/>
                <label>Latitude:</label>
                <br/>
                <input
                    name='latitude'
                    type='text'/>
                <br/>
                <label>Longitude:</label>
                <br/>
                <input
                    name='longitude'
                    type='text'/>
                <br/>
                <label>Lease Term:</label>
                <br/>
                <input
                    name='lease'
                    type='text'/>
                <br/>
                <label>Type:</label>
                <br/>
                <input
                    name='type'
                    type='text'/>
                <br/>
                <label>Beds:</label>
                <br/>
                <input
                    name='beds'
                    type='text'/>
                <br/>
                <label>Baths:</label>
                <br/>
                <input
                    name='baths'
                    type='text'/>
                <br/>
                <label>Sqaure Feet:</label>
                <br/>
                <input
                    name='area'
                    type='text'/>
                <br/>
                <label>Furnishing:</label>
                <br/>
                <select>
                    <option>Furnished</option>
                    <option>Unfurnished</option>
                </select>
                <br/>
                <label>Smoking:</label>
                <br/>
                <input
                    name='smoking'
                    type='text'/>
                <br/>
                <label>I have a pet:</label>
                <input
                    name='pet'
                    type='checkbox'/>
                <br/>
            </form>
        </div>
    );
}

export default Predict;