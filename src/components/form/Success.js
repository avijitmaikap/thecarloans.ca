import React from 'react'

function Success() {
    return (
        <div className ="success">
            <div className ="wrapper">
            <div className ="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-rock" width="100" height="100" viewBox="0 0 24 24" stroke-width="2" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M11 11.5v-1a1.5 1.5 0 0 1 3 0v1.5" />
  <path d="M17 12v-6.5a1.5 1.5 0 0 1 3 0v10.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
</svg>
            </div>
                <h1>Congratulations !</h1>
                <h3>Your application has been submitted.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iste deleniti eum necessitatibus voluptatibus in</p>

                <a href="#6477048938" className="btn rounded-pill btn-rounded">
              Call Us
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
            </a>
            </div>
        </div>
    )
}

export default Success
