import React from 'react';
import { withRouter } from 'react-router';

import DecorationText from '../DecorationText/DecorationText.jsx';
import Btn from '../Btn/Btn.jsx';

import './Header.scss';

class Header extends React.Component{
    constructor(props) {
        super(props);

        console.log(this.props);
    }

    navToLogin = () => {
      this.props.history.push('/login');
    };

    scrollTo = (name) => {
        if(typeof this.props.scrollTo === 'function') {
            this.props.scrollTo(name);
        }
    };

    render() {
        return (
            <div className='headerSection'>
                <header>
                    <nav className='nav'>
                        <ul className='menu upperMenu'>
                            <li><a onClick={this.navToLogin}>Zaloguj</a></li>
                            <li><a>Załóż konto</a></li>
                        </ul>
                        <ul className='menu'>
                            <li><a onClick={() => this.scrollTo('headerSection')}>Start</a></li>
                            <li><a onClick={() => this.scrollTo('testScroll')}>O co chodzi?</a></li>
                            <li><a onClick={() => this.scrollTo('about')}>O nas</a></li>
                            <li><a onClick={() => this.scrollTo('institutionsBg')}>Fundacje i organizacje</a></li>
                            <li><a onClick={() => this.scrollTo('Contact')}>Kontakt</a></li>
                        </ul>
                    </nav>
                </header>
                <div className='headerStart'>
                    <DecorationText texts={['Zacznij pomagać!', 'Oddaj niechciane rzeczy w zaufane ręce']}/>
                    <div className='StartBtns'>
                        <Btn text='ODDAJ RZECZY'/>
                        <Btn text='ZORGANIZUJ ZBIÓRKĘ'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);