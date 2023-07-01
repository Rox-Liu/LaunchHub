import React from 'react';
import './Works.css';

// Our Works
const Work = () => {

    const works = [
        {
            image: 'http://placekitten.com/250/440',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {
            image: 'http://placekitten.com/250/440',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {
            image: 'http://placekitten.com/250/440',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        }
    ]

    return (
        <div className="container">
            <h2>Our Work</h2>
            { works.map( (work) => {
                return (
                    <div className="work">
                        <div style={{ backgroundImage: `url(${work.image})`}}></div>
                        <p>{work.desc}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Work;