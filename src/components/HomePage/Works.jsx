import React from 'react';
import './Works.css';

// Our Works
const Work = () => {

    const works = [
        {
            header: 'Our Works',
            image: 'http://placekitten.com/250/440',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {  
            header: '',
            image: 'http://placekitten.com/250/440',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        },
        {
            header: '',
            image: 'http://placekitten.com/250/440',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error molestias illum, facere ipsa aperiam, adipisci beatae ipsum, obcaecati id odio? Deleniti tenetur quam quaerat. Sunt quae quis velit a?'
        }
    ]

    return (
        <>
            { works.map( (work, index) => {
                return (
                    <div className="container" key={index}>
                        { work.header !== '' && <h2>{work.header}</h2> }
                        <div className="work-img" style={{ backgroundImage: `url(${work.image})`}}></div>
                        <p>{work.desc}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Work;