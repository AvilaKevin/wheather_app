import React from 'react';
import { useAppcontext } from '../Context/AppContext';

// Render:
// - Background
// - Childrens
// Props:
// - AppContext(appBackground)

function DinamicBackground({ children }) {

    // Context Called:
    const {
        appBackground
    } = useAppcontext();


    return (

        <div
            style={{ background: `url(${appBackground})` }}
            className='h-screen w-full overflow-hidden flex justify-end flex-col-reverse sm:flex-row content-div'
        >
            {children}
        </div>

    )

}

export { DinamicBackground }