import React from 'react';
import './Works.css';

// Our Works
const Work = () => {

    const works = [
        {
            header: 'Our Works',
            name: 'ClimateWorks Website',
            image: 'http://placekitten.com/400/800',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {  
            header: '',
            name: 'ShelterLink Website',
            image: 'http://placekitten.com/401/801',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {
            header: '',
            name: 'Carbon Collective App',
            image: 'http://placekitten.com/402/800',
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