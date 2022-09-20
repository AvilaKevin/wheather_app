import React from 'react';
import { useAppcontext } from '../Context/AppContext';

function DinamicBackground({ children }) {

    //Context Called:
    const {
        appBackground
    } = useAppcontext();


    return (
        <div style={{ background: `url(${appBackground})` }} className='h-screen flex justify-center'>
            {children}
        </div>
    )
}

export { DinamicBackground }