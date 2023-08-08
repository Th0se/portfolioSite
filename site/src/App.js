/** @format */

import About from './about/About';
import Display from './works/Display';
import Footer from './footer/Footer';
import { useState } from 'react';
function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <div className='App'>
            <About theme={theme}></About>
            <Display theme={theme}></Display>
            <Footer theme={theme}></Footer>
        </div>
    );
}

export default App;
