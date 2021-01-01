import React, { Component } from 'react';

import './style.css';

class ItemCategoryTab extends Component {
   state = {
            selectedBG: "",
            selectedBorder: ""
        }
    

    selectTab = (e) => {
        this.setState({
            selectedBG: "rgb(201, 201, 201)",
            selectedBorder: "rgb(201, 201, 201)"
        })
        if(this.state.selectedBG === "rgb(201, 201, 201)") {
            this.setState({
                selectedBG: "",
                selectedBorder: ""
            })  
        }
    }
    
    render(){
        return(
            <div className="tabs" style={{backgroundColor: this.state.selectedBG, borderColor: this.state.selectedBorder}} onClick={this.selectTab}>Category Tab</div>
        )
    }
}

export default ItemCategoryTab