import './style.css';
import Navbar from './components/navbar/index';
import { Particle } from './components/particles';

import {FaDiscord} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'

const App = () => {
    return (
        <div>
            <Navbar/>
            <section className="app">
                <Particle className="particles"/>
                <div className="aboutme">
                    <div className="first_title">Hello Friends <span className="wave">👋🏻 </span></div>
                    <div className="second_title">I am <span className="purple">João Silva</span></div>
                    <div className="tec">Junior FullStack Developer</div>
                    <div className="separator"></div>
                    <div className="description">I'm a person who has a keen interest in web development and software development. I'm known as "Z4" on the internet and I'm currently studying reactjs and intend to work in a company that involves programming after finishing the course. I aim to improve my skills day by day, so I am fully focused on programming.</div>
                    {/* <div className="findme">Find Me On</div>
                    <ul>
                        <li>
                            <button><FaDiscord size="15px" color='white'/></button>
                        </li>
                        <li>
                            <button><AiFillGithub size="15px" color='white'/></button>
                        </li>
                        <li>
                            <button><BsCodeSlash size="15px" color='white'/></button>
                        </li>
                    </ul> */}
                </div>
                <div className="image">
                    <img src="https://i.pinimg.com/originals/17/29/4c/17294ce8fe0d49e9da696c2772461773.png" alt="" className="aboutme_image" height={150}/>
                </div>
            </section>
            <section className="offer">
                    <div className="offer_title">What do I Offer</div>
                    <div className="offer_description">Creates Professional Design That’s Oriented Towards Client Needs</div>
            </section>
        </div>
    )
}


export default App;