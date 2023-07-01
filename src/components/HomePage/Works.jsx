import React from 'react';
import './Works.css';
import ShelterLinkImg from '../../images/shelterlink.jpeg';
import CarbonCollective from '../../images/carbon-collective.webp';
import ClimateWorks from '../../images/climateworks.jpeg';

// Our Works
const Work = () => {

    const works = [
        {
            header: 'Our Works',
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
            { works.map( (work, index) => {
                return (
                    <div className="work-container" key={index}>
                        <div className="work-header">
                            { work.header !== '' && <h2>{work.header}</h2> }
                        </div>
                        <div className="work">
                            <div className="work-img" style={{ backgroundImage: `url(${work.image})`}}></div>
                            <p>{work.name}</p>
                            <p>{work.desc}</p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Work;