import React from 'react'
import "../styles/footer.scss";
import { FooterOne, FooterTwo, FooterThree } from './Utilities';


function Footer() {
    const links_1 = [
        {
            text:"Our Story",
            link:"#"
        },
        {
            text:"Our Team",
            link:"#"
        },
        {
            text:"Our Partners",
            link:"#"
        },
        {
            text:"Trade-In Your Car",
            link:"#"
        },
        {
            text:"Reviews",
            link:"#"
        }
    ] ;

    const links_2 = [
        {
            text:"How It Works",
            link:"#"
        },
        {
            text:"How We Can Help",
            link:"#"
        },
        {
            text:"Rebuild Your Credit",
            link:"#"
        }
    ]
    return (
        <section className="footer" id="footer">
            <div className="container">
                <div className="row">
                   
                   {/* Footer-1 */}
                    <FooterOne/>

                    {/* Footer-2 */}
                    <FooterTwo 
                        links = {links_1}
                        title = "About Us"
                    />
                    <FooterTwo 
                        links = {links_2}
                        title = "Credit Resources"
                    />
                    <FooterThree 
                        title ="Location"
                    />

                </div>
                
            </div>
        </section>
    )
}

export default Footer
