import React, { Component } from 'react';

import './style.css'

class SBCounter extends Component {
    state = {
        sbTotal: 0
    }



    render() {
        return(
            <div>
                
                <button class="button-hover-addsb button addsb-btn"><span>Add Schrutebucks</span><i class="fas fa-dollar-sign"></i> <i class="fab fa-btc"></i></button>
            </div>
        )
    }
}

export default SBCounter