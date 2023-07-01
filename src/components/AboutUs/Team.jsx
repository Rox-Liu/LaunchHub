import React, {useState, useEffect} from 'react';
import './Team.css';
import Jess from '../../images/hs-jess.png';
import Natalie from '../../images/hs-natalie.png';


const Team = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ winWidth, setWinWidth ] = useState(0);
    
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

    const handleResize = () => {
        setWinWidth(window.innerWidth);
    };

    useEffect( () => {
        if (typeof window !== 'undefined') {
            setWinWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            };
        };
    }, []);
    
    useEffect( () => {

        const interval = setInterval( () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div id="team-container">
            <div className="team-blurb">
                <h1>Elevate your digital vision with us.</h1>
                <p>Meet our team below</p>
            </div>

            <div id="member-container">
                { winWidth > 1500 ? 
                    members.map( (member) => {
                        return (
                            <div className="member-tiles">
                                <img src={member.image } alt={member.name} />
                                <h2>{member.name}</h2>
                                <p>{member.role}</p>
                            </div>
                        )
                    })
                    :
                    <div className="member-slides">
                        <img src={members[currentIndex].image } alt={members[currentIndex].name} />
                        <h2>{members[currentIndex].name}</h2>
                        <p>{members[currentIndex].role}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Team;