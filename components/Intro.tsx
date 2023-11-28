'use client'

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {

    return (
        <div className="folder-container">

            <div className="folder-content p-6 rounded-lg bg-white shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Hello, I'm Aster Wu!</h1>
                <div className="text-2xl">
                    <TypeAnimation
                        sequence={[
                            'I am a Web Developer',
                            1200,
                            'I am a Problem Solver',
                            1200,
                            'I am a Team Player',
                            1200,
                            'I am eager to learn',
                            1200
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />

                </div>
                <div className="text-lg pt-3">
                    <p>Java Script | Typescript | Ruby | Python</p>
                    <p>React Native | Vue.js | Vite | Ajax | JQuery | SASS | Bootstrap | Tailwind CSS</p>
                    <p>Next.js | Node.js | Express | Rails</p>
                    <p>Storybook | Cypress | Jest | Mocha | Chai</p>
                    <p>Git | PostgreSQL | WordPress</p>
                </div>
            </div>
        </div>
    );
}
