import React from 'react';
import './Works.css';
import ShelterLinkImg from '../../images/shelterlink.jpeg';
import CarbonCollective from '../../images/carbon-collective.webp';
import ClimateWorks from '../../images/climateworks.jpeg';

// Our Works
const Work = () => {

    const works = [
        {
            header: 'Our recent work',
            name: 'ClimateWorks Website',
            image: ClimateWorks,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {  
            header: '',
            name: 'ShelterLink Website',
            image: ShelterLinkImg,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {
            header: '',
            name: 'Carbon Collective App',
            image: CarbonCollective,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        }
    ]

    return (
        <> 
            <div id="work-outer-container">
                <h1>Our recent work</h1>
                <div id="work-inner-container">
                    
                { works.map( (work, index) => {
                    return (
                        // <div id="work-container" key={index}>
                            <div className="work">
                                <div className="work-img" style={{ backgroundImage: `url(${work.image})`}}></div>
                                <p>{work.name}</p>
                                <p>{work.desc}</p>
                            </div>
                        // </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default Work;
