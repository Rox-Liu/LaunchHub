import React from 'react';
import './Works.css';
import ShelterLinkImg from '../../images/shelterlink.jpeg';
import CarbonCollective from '../../images/carbon-collective.webp';
import ClimateWorks from '../../images/climateworks.jpeg';

// Our Works
const Work = () => {

    const works = [
        {
            name: 'ClimateWorks Website',
            image: ClimateWorks,
            desc: 'We designed and developed the ClimateWorks Foundation Australia website, delivering an engaging user experience that communicates the urgency of climate change and promotes sustainable solutions specific to Australia.'
        },
        {  
            name: 'ShelterLink Website',
            image: ShelterLinkImg,
            desc: 'We delivered a comprehensive platform dedicated to addressing homelessness by  connecting individuals with shelter services, and fostering collaboration among stakeholders to create lasting solutions and support for those in need.'
        },
        {
            name: 'Carbon Collective App',
            image: CarbonCollective,
            desc: 'We designed and developed The Carbon Collective sustainable investment app, utilising AI and clean energy sources to address the climate crisis and integrate with existing digital platforms for scalable impact.'
        }
    ]

    return (
        <> 
            <div id="work-outer-container">
                <h1>Our recent work</h1>
                <div id="work-inner-container">
                    
                { works.map( (work, index) => {
                    return (
                        <div className="work" key={index}>
                            <div className="work-img" style={{ backgroundImage: `url(${work.image})`}}></div>
                            <p>{work.name}</p>
                            <p>{work.desc}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default Work;
