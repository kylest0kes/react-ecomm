import React, { Component } from 'react';

import './style.css';

class ItemCategoryTab extends Component {
   state = {
            selectedBG: ""
        }
    

    selectTab = (e) => {
        this.setState({
            selectedBG: "rgb(201, 201, 201)"
        })
        if(this.state.selectedBG === "rgb(201, 201, 201)") {
            this.setState({
                selectedBG: ""
            })  
        }
    }
    
    render(){
        return(
            <h1 style={{backgroundColor: this.state.selectedBG}} onClick={this.selectTab}>fff</h1>
        )
    }
}

export default ItemCategoryTab