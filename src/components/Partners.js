import React from 'react'
import { SectionTitle } from './Utilities'
import "../styles/partners.scss"

function Partners() {

    const partners_img=[
        "https://www.autoloans.ca/wp-content/uploads/2018/06/scotiabank.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/desjardins.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/td-auto-finance.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/auto-capital-canada.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/alphera.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/bmo.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/cibc.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/general-bank-of-canada.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/rbc.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/the-humberview-group.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/gm-financial.png",
        "https://www.autoloans.ca/wp-content/uploads/2018/06/farber.png"
    ]


    return (
       <section className="partners" id="partners">
           <SectionTitle title="Our Partners"/>
           <div className="container partners-img">
               <div className="row">
                   {
                       partners_img.map(image => (
                        <div className="col-2">
                            <img src= {image} alt=""/>
                        </div>
                       ))
                   }

               </div>

           </div>
       </section>
    )
}

export default Partners

