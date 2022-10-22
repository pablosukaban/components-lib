import React, { useRef, useState } from 'react';
import cssStyles from './MagnetButton.module.css';

type styleType = {
    transform: string;
    transition?: string;
};

export const MagnetButton = () => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [styles, setStyles] = useState<styleType[]>([]);

    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current) return;
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        setStyles([
            {
                transform: `translate(${x * 0.01 * 70}px, ${y * 0.01 * 70}px)`,
                transition: 'all 0.05s ease-in-out',
            },
            {
                transform: `translate(${x * 0.01 * 25}px, ${y * 0.01 * 25}px)`,
            },
        ]);
    };

    const mouseLeaveHandler = () => {
        setStyles([
            {
                transform: `none`,
                transition: 'all 0.05s ease-in-out',
            },
            {
                transform: `none`,
            },
        ]);
    };

    // const trans = (e) => {
    //     if (!buttonRef.current) return;
    //     console.log('trans');
    //     let rect = buttonRef.current.getBoundingClientRect();
    //     let x = e.clientX - rect.left - 100; //x position within the element.
    //     let y = e.clientY - rect.top - 100; //y position within the element.

    //     for (let i = 1; i < 10; i++) {
    //         x = -x * 0.8;
    //         y = -y * 0.8;
    //         setStyles({
    //             transform: `translate(${x}px, ${y}px)`,
    //         });

    //          console.log(x, y);
    //     }
    // };

    return (
        <div
            className={cssStyles.button}
            onMouseMove={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
            ref={buttonRef}
            style={styles[0]}
        >
            <h1 className={cssStyles['text-block']} style={styles[1]}>
                Get started
            </h1>
            <div className={cssStyles['hover-color']}></div>
        </div>
    );
};
