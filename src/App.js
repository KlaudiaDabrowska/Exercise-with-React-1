import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './style.css';

const initialStateArray = [{
    image: 'https://www.researchgate.net/profile/Simon-Fokt/publication/290315261/figure/fig2/AS:317361396699137@1452676261878/Kazimir-Malevich-Black-square-1915-Oil-on-Canvas-State-Tretyakov-Gallery.png',
    name: 'Dan Abramov',
    description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
},
{
    image: 'https://www.researchgate.net/profile/Simon-Fokt/publication/290315261/figure/fig2/AS:317361396699137@1452676261878/Kazimir-Malevich-Black-square-1915-Oil-on-Canvas-State-Tretyakov-Gallery.png',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
},
{
    image: 'https://www.researchgate.net/profile/Simon-Fokt/publication/290315261/figure/fig2/AS:317361396699137@1452676261878/Kazimir-Malevich-Black-square-1915-Oil-on-Canvas-State-Tretyakov-Gallery.png',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
},
{
    image: 'https://www.researchgate.net/profile/Simon-Fokt/publication/290315261/figure/fig2/AS:317361396699137@1452676261878/Kazimir-Malevich-Black-square-1915-Oil-on-Canvas-State-Tretyakov-Gallery.png',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
},];

class App extends React.Component {
    state= {
        items:[...initialStateArray],
    }

    render(){
        return (
            <div>
                <ListWrapper
                    items= {this.state.items} 
                />
            </div>
        )
    }
}

export default App;
