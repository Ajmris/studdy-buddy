import {useState, useEffect} from 'react';

export const useWindowHeight = () => {
    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0
    });
    const handleWindowResize = () => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return dimensions;
};