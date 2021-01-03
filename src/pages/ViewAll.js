import React from 'react';
import Header from '../components/Header';
import SBTally from '../components/SBTally';
import ViewAllContainer from '../components/ViewAllContainer';

export default function ViewAll() {
    return (
        <div>
            <Header />
            <SBTally />
            <ViewAllContainer />
        </div>
    )
}
