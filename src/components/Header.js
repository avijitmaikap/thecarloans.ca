

import "../styles/header.scss";


export default function Header() {
  return (
    <section id="home" className="intro-section">
      <div className="container">
        <div className="row align-items-center text-white">
          {/* Col-1 for Intro */}
          <div className="col-md-6 intros">
            <h1>
              <span className="title text-white">
              Get approved for your car loan today!
              </span>
              <span className="description text-white lh-base">
We help Canadians get approved for a car loan, regardless of your credit history. It's simple, fast and easy!
              </span>
            </h1>
            <img src="https://assets.carpages.ca/dealersite/prod-wp-approval-genie/uploads/2019/06/landing-page-autos-full.png" alt=""/>
          </div>
          {/* Col-2 for Intro */}
          <div className="col-md-6 intros text-end">
            {/* form  */}
             
          </div>
        </div>
      </div>
      {/* insert Waves design effect at bottom of intro sectiom */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
