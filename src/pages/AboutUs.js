import React from 'react'
import { SectionTitle } from '../components/Utilities'
import "../styles/aboutUs.scss"

function AboutUs() {
    return (
        <div className = "container-fluid mt-5 py-5">
            <SectionTitle title="About Us"/>
            <div className = "container aboutus">
                <p>We feel that a vehicle loan has the potential to be absolutely miraculous in terms of improving your lifestyle, growing your wealth, and providing financial prospects.</p>
<p> Thecarloans team has made it our mission to assist hardworking Canadians in being accepted for a car loan, whether they have good credit, terrible credit, or no credit at all.

We consult with you to guarantee that you get an inexpensive auto loan and a vehicle that matches your needs.

Most significantly, we provide you with the opportunity to repair and reestablish your credit history.</p>

<p> We only recruit the best and most enthusiastic advisers.

Our staff is a committed collection of skilled, professional financial advisers, sales professionals, and vehicle enthusiasts, but most importantly - individuals just like you who have experienced life's ups and downs — we genuinely understand.

We appreciate every chance to better the lives of our neighbours.</p>

<img className = "cover-img" src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt=""/>

</div>

        </div>
        
    )
}

export default AboutUs

