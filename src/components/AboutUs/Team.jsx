import React, {useState, useEffect} from 'react';
import './Team.css';
import Jess from '../../images/hs-jess.png';
import Natalie from '../../images/hs-natalie.png';


const Team = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    
    
    useEffect( () => {

        const interval = setInterval( () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const members = [
        {
            image: Jess,
            name: 'Jessica Wong',
            role: 'UX/UI Designer'
        },
        {
            image: Natalie,
            name: 'Natalie Orsos',
            role: 'UX/UI Designer'
        },
        {
            image: '',
            name: 'Dominic Wong',
            role: 'Full Stack Developer'
        },
        {
            image: '',
            name: 'Roxanne Liu',
            role: 'Full Stack Developer'
        }
    ];

    return (
        <div id="team-container">
            <div className="team-blurb">
                <h1>Elevate your digital vision with us.</h1>
                <p>Meet our team below</p>
            </div>
            <div className="member-slides">
                <img src={members[currentIndex].image } alt={members[currentIndex].name} />
                <h2>{members[currentIndex].name}</h2>
                <p>{members[currentIndex].role}</p>
            </div>
        </div>
    )
}

export default Team;