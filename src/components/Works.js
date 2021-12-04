import React from 'react'
import {SectionTitle, WorksCol} from "./Utilities"
import "../styles/Works.scss"


function Works() {
    return (
        <section id="works" className="works">
            <SectionTitle title = "How It Works"/> 
            <div className="container">
                <div className="row">
                        <WorksCol 
                    src = "https://autoloanservices.ca/wp-content/uploads/elementor/thumbs/s-1-pg3llx3pupwdzjvfjjbthttccseyneuovvdl1jbvr4.png"
                    title = "APPLY"
                    description = "Start by filling out a short & secure online application, one of our Finance Representatives will contact you promptly to get the ball rolling."
                    />

                        <WorksCol 
                    src = "https://autoloanservices.ca/wp-content/uploads/elementor/thumbs/s-2-pg3llkvtdvfnsmd6iw1o3ewcms36vci6i6w9sxu000.png"
                    title = "APPROVED"
                    description = "You’re approved and its time to select your vehicle! It’s as simple as that. With one of the most extensive inventory networks in Canada, helping you select the perfect vehicle would not be a problem."
                    />
                        <WorksCol 
                    src = "https://autoloanservices.ca/wp-content/uploads/elementor/thumbs/s-3-pg3llon657kt327pwxo6ddy70bknq4x3upi7q1ofb4.png"
                    title = "DELIVERED"
                    description = "With AutoLoanServices.ca there is no need to take time out of your busy schedule to pick up your new vehicle. We deliver your new car to your driveway anywhere in Ontario, Hassle Free!"
                    />

                </div>

            </div>
            
        </section>
    )
}

export default Works
