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
                <svg id="work-shape"width="209" height="225" viewBox="0 0 209 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Vector_2" d="M182.875 1.23978e-05L138.228 60.096C119.273 85.6092 94.743 106.457 66.5077 121.051L0 155.425L60.0958 200.072C85.6093 219.026 106.458 243.556 121.051 271.792L155.425 338.299L200.072 278.204C219.026 252.69 243.556 231.842 271.792 217.249L338.299 182.875L278.204 138.228C252.69 119.273 231.842 94.7431 217.249 66.5076L182.875 1.23978e-05Z" fill="#E5692B"/>
                </svg>
            </div>
        </>
    )
}

export default Work;
