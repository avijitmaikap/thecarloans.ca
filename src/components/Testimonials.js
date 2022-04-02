import "../styles/testimonials.scss";
import { TestimonialCard } from "./Utilities";

export default function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
  </svg>
      <div className="container">
        <div className="row text-center text-white">
          <h1 className="display-3 fw-bold">Testimonials</h1>
          <hr
            style={{
              width: "6rem",
              height: "0.3rem"
            }}
            className="mx-auto"
          />
          <p className="lead pt-1 fw-light">What my Colleage says</p>
        </div>
        {/** Bootstrap Carousel  */}

        <div className="row align-items-center">
          <div
            id="carouselExampleDark"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                {/** carousel must be place here to do carousel function properly */}
                <TestimonialCard
                  src="./assets/testimonials/client-1.jpg"
                  name="Daniel"
                  // designation=", VYMaps"
                  comment="  These folks come highly recommended! They're fantastic. They made buying a car a pleasurable experience. I'm quite pleased with my purchase and will be returning. The team was really courteous and professional in getting me all set up in my vehicle. I have nothing but positive things to say about my time at thecarloans."
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-2.jpg"
                  name="Kayla"
                  // designation="Global brand manager"
                  comment="  Thecarloans was a fantastic experience for me! As a single mother on a tight budget, I could never have envisioned myself driving a car like this! The staff was kind and attentive, and he not only made me feel at ease during the process, but he also offered me hope! I will unquestionably suggest thecarloans.ca to my family and acquaintances in the market for a vehicle loan. Thank you very much!"
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-3.jpg"
                  name="Felicia"
                  // designation="Finance Manager"
                  comment="  The manager who helped me get my car. He was so efficient and knowledgeable about the whole process. Their methods aim to help improve your credit score and the interest rates are actually more reasonable than most dealerships. This is not a paid plug. I genuinely am happy I chose thecarloans."
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-4.jpg"
                  name="Sebastian"
                  // designation="CEO, VYMaps"
                  comment="  I found it difficult to obtain accepted for a truck loan at other dealerships since I had been self-employed for the previous ten years. These guys saved me months of hunting at other vendors by doing more in two hours. Thank you very much!"
                />
              </div>
              <div class="carousel-item">
                <TestimonialCard
                  src="./assets/testimonials/client-5.jpg"
                  name="Patrick"
                  // designation="CEO & founder"
                  comment="  Kind, efficient, and well-informed. These people know what they're talking about! Thank you for your approval!"
                />
              </div>
            </div>
            <div class="text-center">
              <button
                class="btn btn-outline-light fas fa-long-arrow-alt-left"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                  <i className="fas fa-long-arrow-alt-left"></i>
              </button>
              <button
                class="btn btn-outline-light fas fa-long-arrow-alt-right"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                  <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
          {/** Carousel Ends */}
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        </svg>
    </div>
  );
}
