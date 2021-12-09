import React from 'react'
import {BiPhoneCall} from "react-icons/bi"
import "../styles/contact.scss"
import { ContactCol } from './Utilities'
import {MdOutlineEmail} from "react-icons/md"
import {FiMapPin} from "react-icons/fi"

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">

                    <ContactCol
                        icon = {<BiPhoneCall/>}
                        title = "+16477048938"
                        description = "Mon-Fri 8 AM - 6 PM"
                    />
                    <ContactCol
                        icon = {<MdOutlineEmail/>}
                        title = "info@thecarloans.ca"
                        description = "Online Support"
                    />
                    <ContactCol
                        icon = {<FiMapPin/>}
                        title = "Victoria Park"
                        description = "Scarborough M1L"
                    />


                </div>

            </div>

        </section>
    )
}

export default Contact
