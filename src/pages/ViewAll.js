import React from 'react';
import Header from '../components/Header';
import SBTally from '../components/SBTally';
import ViewAllContainer from '../components/ViewAllContainer';

export default function ViewAll(props) {
    return (
        <div>
            <Header {...props}/>
            <SBTally {...props}/>
            <ViewAllContainer {...props} />
        </div>
    )
}
