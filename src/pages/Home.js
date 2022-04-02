
import React from 'react'
import Header from '../components/Header'
import Works from '../components/Works'
import Achievements from '../components/Achievements'
import Post from '../components/Post'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
// import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Social from '../components/Social'

function Home() {
    return (
        <div>
            <Header/>
            <Works/>
            <Achievements/>
            <Post
                title="Deal with real people who understand your situation"
                description="Each customers’ needs are unique. We truly listen to our clients and our customize car loan and auto financing solutions to ensure they get an auto loan and a vehicle that fits their budget and lifestyle. Everyone deserves an affordable car loan.

                We also offer a second chance to rebuild and re-establish credit history."

                btn_text="Get Started"
                btn_link="###"
                img_src="https://images.pexels.com/photos/684385/pexels-photo-684385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                img_first= {true}
                blue_pills= {true}
            />
            <Post
                title="Get approved today and get into the car of your dreams."
                description="Getting an auto loan doesn’t have to be complicated. Our inventory includes certified and safetied new and used cars, trucks and SUVs. Whatever your budget or lifestyle, we’ll match you with the vehicle and financing that’s right for you

                We also offer a second chance to rebuild and re-establish credit history."

                btn_text="Get Started"
                btn_link="###"
                img_src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                img_first= {false}
            />
            <Partners/>
            <Testimonials/>
            {/* <Faq/> */}
            <Contact/>
            <Social/>
            
        </div>
    )
}

export default Home
