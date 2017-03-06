import * as React from 'react';
import Aside from './../aside/aside';


import './layout.css';

export default function Layout ({children}) {
    return (
        <section className="layout">
            <Aside
            />
            <div className="main">
                {children}
            </div>
        </section>
    );
}
