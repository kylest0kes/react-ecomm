import React, { Component } from 'react';

import './style.css'

class ItemCounter extends Component {
    state = {
        itemTotal: 0
    }

    addItem = (e) => {
        this.setState(state => ({
            itemTotal: state.itemTotal + 1            
        }))
    }

    removeItem = (e) => {
        this.setState(state => ({
            itemTotal: state.itemTotal - 1            
        }))
    }

    render() {
        return(
            <div className="input-group plus-minus-input">
                <div className="input-group-button">
                    <button type="button" className="button hollow circle" data-quantity="minus" data-field="quantity" onClick={this.removeItem}>
                    <i className="fa fa-minus" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="item-total" type="number" name="quantity">{this.state.itemTotal}</div>
                <div className="input-group-button">
                    <button type="button" className="button hollow circle" data-quantity="plus" data-field="quantity" onClick={this.addItem}>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </div>
                </div>
        )
    }
}

export default ItemCounter
