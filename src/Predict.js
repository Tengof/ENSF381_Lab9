import { React, useState } from 'react';
import './predict.css';

function Predict() {
    const [message, setMessage] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [lease_term, setLease_term] = useState('');
    const [type, setType] = useState('');
    const [beds, setBeds] = useState('');
    const [baths, setBaths] = useState('');
    const [sq_feet, setSq_feet] = useState('');
    const [furnishing, setFurnishing] = useState('Unfurnished');
    const [smoking, setSmoking] = useState('');
    const [pets, setPets] = useState(false);

    const backendEndpoint = 'http://127.0.0.1:5000/predict_house_price';

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                backendEndpoint,
                {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'city':city, 'province':province, 'latitude':latitude, 'longitude':longitude, 'lease_term':lease_term, 'type':type, 'beds':beds, 'baths':baths, 'sq_feet': sq_feet, 'furnishing':furnishing, 'smoking':smoking, 'pets':pets}),
                }
            );
            
            const data = await response.json();

            if (response.ok) {
                console.log(data);
            }
            else {
                console.log('Error during form submission')
            }
        }

        catch (error) {
            console.error('Error during form submission:', error);
        }
    
    }
    
    return (
        <div>
            <form className='predict' onSubmit={handleSubmit}>
                <h1>House Price Predictor</h1>
                <label>City:</label>
                <br/>
                <input className='predictField' name='city' type='text' required onChange={(e) => setCity(e.target.value)}/>
                <br/>
                <label>Province:</label>
                <br/>
                <input className='predictField' name='province'type='text' required onChange={(e) => setProvince(e.target.value)}/>
                <br/>
                <label>Latitude:</label>
                <br/>
                <input className='predictField' name='latitude' type='text' required onChange={(e) => setLatitude(e.target.value)}/>
                <br/>
                <label>Longitude:</label>
                <br/>
                <input className='predictField' name='longitude' type='text' required onChange={(e) => setLongitude(e.target.value)}/>
                <br/>
                <label>Lease Term:</label>
                <br/>
                <input className='predictField' name='lease' type='text' required onChange={(e) => setLease_term(e.target.value)}/>
                <br/>
                <label>Type:</label>
                <br/>
                <input className='predictField' name='type' type='text' required onChange={(e) => setType(e.target.value)}/>
                <br/>
                <label>Beds:</label>
                <br/>
                <input className='predictField' name='beds' type='text' required onChange={(e) => setBeds(e.target.value)}/>
                <br/>
                <label>Baths:</label>
                <br/>
                <input className='predictField' name='baths' type='text' required onChange={(e) => setBaths(e.target.value)}/>
                <br/>
                <label>Sqaure Feet:</label>
                <br/>
                <input className='predictField' name='area' type='text'
                 required onChange={(e) => setSq_feet(e.target.value)}/>
                <br/>
                <label>Furnishing:</label>
                <br/>
                <select className='predictField' name='furnishing' required onChange={(e) => setFurnishing(e.target.value)}>
                    <option>Unfurnished</option>
                    <option>Partially Furnished</option>
                    <option>Furnished</option>
                </select>
                <br/>
                <label>Smoking:</label>
                <br/>
                <input className='predictField' name='smoking' type='text' required onChange={(e) => setSmoking(e.target.value)}/>
                <br/>
                <label>I have a pet:</label>
                <input className='predictField' name='pet' type='checkbox' required onClick={(e) => setPets(!pets)}/>
                <br/>
                <button className='predictButton' type='submit'>
                    Predict
                </button>

                <div className='prediction' id='prediction'>
                    <p>
                        <b>Predicted Rent Price: {message}</b>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Predict;