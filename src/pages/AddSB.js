import React from 'react';
import { Link } from 'react-router-dom';
import AddSBForm from '../components/AddSBForm';

export default function AddSB(props) {
    return (
        <div>
            <Link to="/"><p className="form-logo"><i class="fas fa-infinity"></i></p></Link>
            <AddSBForm {...props}/>
        </div>
    )
}
