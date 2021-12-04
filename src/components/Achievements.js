import React from 'react'
import { Achievement, SectionTitle } from './Utilities'
import "../styles/achievements.scss"

function Achievements() {
    return (
        <section className="achievements" id="achievements">
            <SectionTitle title="Achievements"/>
            <div className="container">
                <div className="row">
                    <Achievement 
                    src="https://autoloanservices.ca/wp-content/uploads/2020/03/about-1.png.webp"
                    count="1050+"
                    description="Number Of Clients We Have Helped"
                    />
                    <Achievement 
                    src="https://autoloanservices.ca/wp-content/uploads/2020/03/about-2.png.webp"
                    count="98.3%"
                    description="NNumber Of Applications Approved"
                    />
                    <Achievement 
                    src="https://autoloanservices.ca/wp-content/uploads/2020/03/about-3.png.webp"
                    count="1200+"
                    description="Number Of Cars Delivered"
                    />
                    

                </div>

            </div>
            
        </section>
    )
}

export default Achievements

