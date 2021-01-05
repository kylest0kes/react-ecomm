import React from 'react';

import './style.css';

export default function GoogleSignIn({ children, ...otherProps }) {
    return (
        <div>
            <button type="button" className="button social google-plus" {...otherProps}>  
                {children}
            </button>
        </div>
    )
}
