
import React from 'react'
import "../styles/post.scss"



function Post({title, description, btn_text, btn_link, img_src, img_first, blue_pills }) {

    function postImg() {
        return (
            <div className="col-12 col-lg-6">
                                <div className="post-img">
                                    <img src= {img_src} alt=""/>
    
                                </div>
    
                            </div>
        )
    } 
    
    function postContent() {
        return(
            <div className="col-12 col-lg-6 my-auto">
                                <div className="post-content">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                     <a href={btn_link} className="btn-rounded rounded-pill">{btn_text}
                                     <span>
                                        <i class="fas fa-arrow-circle-right"></i>
                                        </span>
                                     </a>
                                </div>
    
                            </div>
        )
    }

    function  defaultPost() {
        return (
            <div className="col-12 col-lg-6 my-auto">
                                <div className="post-content">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    {/* <div className="d-flex justify-content-center"> */}
                                    <div className="blue-pills" >
                                        <span>SELF EMPLOYED?</span>
                                        <span>BAD CREDIT / NO CREDIT?</span>
                                        <span>PREVIOUS BANKRUPTCY?</span>
                                        <span>CONSUMER PROPOSAL?</span>
                                        <span>DISABILITY INCOME?</span>
                                        <span>DIVORCED?</span>
                                        <span>COLLECTIONS?</span>
                                        <span>CASH INCOME?</span>
                                        
                                    </div>
                                     <a href={btn_link} className="btn-rounded rounded-pill">{btn_text}
                                     <span>
                                        <i class="fas fa-arrow-circle-right"></i>
                                        </span>
                                     </a>
                                </div>
    
                            </div>
        )
    }


    return (
        <section className="post" id="post">
                <div className="container">
                    <div className="row">
                    {
                        img_first 
                        ?
                        <>
                        {
                            postImg()
                        }
                        {
                            blue_pills ? defaultPost() : postContent()
                        }
                        </>
                        :
                        <>
                        {
                            blue_pills ? defaultPost() : postContent()
                        }
                        {
                            postImg()
                        }
                        </>

                    }
                  </div>
                </div>
                
            </section>
    )
}

export default Post
