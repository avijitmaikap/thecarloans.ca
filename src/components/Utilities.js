export const SectionTitle = ({ title }) => {
    return (
      <div className="row text-center">
        <h3 className="fw-bold lead mb-2">{title}</h3>
        <div className="heading-line mb-5"></div>
      </div>
    );
  };

  export const WorksCol = ({src, title, description}) => {
      return <div className="col-4">
      <div className="work-icon">
          <img src = {src} alt=""/>

      </div>
      <div className="work-info">
  <h3>{title}</h3>
          <p>
              {description}
          </p>

      </div>

  </div>
  }

  export const Achievement = ({src, count, description}) => {
    return <div className="col-4 achievement">
    <div className="achievement-img">
        <img src={src} alt=""/>

    </div>
    <div className="achievement-info">
        <h4>
            {count}
        </h4>
        <p>
        {description}
        </p>

    </div>

</div>
  }

  // Testimonial Card
  export const TestimonialCard = ({ src, comment, name, designation }) => {
    return (
      <>
        {/* testimonials card  */}
        <div className="testimonials__card ">
          <p className="lh-lg">
            <i className="fas fa-quote-left"></i>
            {comment}
            <i className="fas fa-quote-right"></i>
            <div className="ratings p-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </p>
        </div>
        {/* client picture  */}
        <div className="testimonials__picture">
          <img
            src={src}
            alt="client-4 picture"
            className="rounded-circle img-fluid"
          />
        </div>
        {/* client name & role */}
        <div className="testimonials__name">
          <h3>{name}</h3>
          <p className="fw-light">{designation}</p>
        </div>
      </>
    );
  };

  export const FaqItem = ({ id, title, description }) => {
    return (
      <>
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + id}  
            aria-expanded="false"
            aria-controls={"flush-" + id}
          >
            {title}
          </button>
        </h2>
        <div
          id={id}
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">{description}</div>
        </div>
      </>
    );
  };

  export const FooterOne =() => {
    return <div className="col-5">
    <div className="footer-1">
        <div className="brand-logo">
            <h1>TheCarLoans.ca</h1>
        </div>
        <div className="text">
        Good credit, bad credit or no credit <br/> we'll get you approved for your car loan today!

        </div>
        <div className="certificates">
            <img src="https://www.approvalgenie.ca/content/themes/dealersite-default/dist/img/footer-google.png" alt=""/>
            <p>
            Rated 4.8 out of 800+ Google reviews
            </p>

        </div>

    </div>
  </div>
  }

  export const FooterTwo = ({links, title}) => {
    return <div className="col-2">
    <div className="footer-2">
        <h4>{title}</h4>
        <ul>
            {
                links.map((item)=>{
                return <li><a href={item.link}>{item.text}</a></li>
                })
            }
        </ul>                              
       

    </div>

  </div>
  }



