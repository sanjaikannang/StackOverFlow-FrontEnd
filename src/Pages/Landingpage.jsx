import React from "react";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate("/login");
  };

  const handlesignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <nav className="bg-white-800 p-4 text-grey flex justify-between items-center">
        <div className="text-xl text-grey font-semibold">
          <span className=" text-amber-500 font-bold">Stack </span>
          OverFlow
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handlelogin}
            className="text-white font-medium px-4 py-2  bg-amber-500"
          >
            Login
          </button>
          <button
            onClick={handlesignup}
            className="text-white font-medium px-4 py-2  bg-amber-500"
          >
            Signup
          </button>
        </div>
      </nav>

      {/* hero section */}
      <section className="hero bg-amber-100 text-gray-800 py-16">
        <div className="container mx-auto flex flex-col items-center justify-center h-full">
          <div className="hero-content text-center">
            <br />
            <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4">
              We <span className="">&lt;3 </span> people who code
            </h1>
            <br />
            <p className="hero-paragraph text-lg md:text-xl mb-6">
              We build products that empower developers
              <br /> and connect them to solutions that enable <br />
              productivity, growth, and discovery.
            </p>
            <br />
            <div className="hero-options flex items-center justify-center">
              <button
                className="text-amber-500 font-medium px-4 py-2 border border-amber-500 bg-white mr-4"
                onClick={handlelogin}
              >
                For Developers
              </button>
              <button
                className="text-white font-medium px-4 py-2 bg-amber-500"
                onClick={handlelogin}
              >
                For Businesses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* developer section */}
      <section className="for-developers py-16 bg-white">
        <div className="container mx-auto">
          <div className="section-head text-center">
            <h2 className="section-title text-3xl md:text-4xl font-bold mb-4">
              For developers, by developers
            </h2>
            <div className="section-line bg-amber-500 h-1 mx-auto mb-6"></div>
            <p className="section-description text-lg md:text-xl">
              Stack Overflow is an
              <a href="#" className="text-amber-500">
                open community
              </a>
              for anyone that codes. We help
              <br /> you get answers to your toughest coding questions, share
              knowledge
              <br /> with your coworkers in private, and find your next dream
              job.
            </p>
          </div>
          <div className="container mx-auto mt-8">
            <div className="options flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              {/* Option 1 */}
              <div className="option text-center bg-white shadow-md p-6">
                <div className="option-icon flex items-center justify-center">
                  <img
                    src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f"
                    alt="Public Q & A"
                  />
                </div>
                <br />
                <div className="option-title text-xl font-semibold mb-2">
                  Public Q&A
                </div>
                <br />
                <div className="option-description text-gray-700 mb-4">
                  Get answers to more than 16.5 million questions and give back
                  by sharing your knowledge with others.{" "}
                  <a href="#" className="text-amber-500">
                    Sign up
                  </a>
                  for an account.
                </div>
                <br />
                <div className="option-button">
                  <button
                    className="text-white font-medium px-4 py-2  bg-blue-900"
                    onClick={handlelogin}
                  >
                    Browse questions
                  </button>
                </div>
              </div>

              {/* Option 2 */}
              <div className="option text-center bg-white shadow-md p-6">
                <div className="option-icon flex items-center justify-center">
                  <img
                    src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7"
                    alt="Private Q & A"
                  />
                </div>
                <br />
                <div className="option-title text-xl font-semibold mb-2">
                  Private Q&A
                </div>
                <br />
                <div className="option-description text-gray-700 mb-4">
                  Level up with Stack Overflow while you work. Share knowledge
                  privately with your coworkers using our flagship Q&A engine.
                </div>
                <br />
                <div className="option-button">
                  <button
                    className="text-white font-medium px-4 py-2  bg-amber-500"
                    onClick={handlelogin}
                  >
                    Try for free
                  </button>
                </div>
              </div>

              {/* Option 3 */}
              <div className="option text-center bg-white shadow-md p-6">
                <div className="option-icon flex items-center justify-center">
                  <img
                    src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee"
                    alt="Browse jobs"
                  />
                </div>
                <br />
                <div className="option-title text-xl font-semibold mb-2">
                  Browse jobs
                </div>
                <br />
                <div className="option-description text-gray-700 mb-4">
                  Find the right job through high-quality listings and search
                  for roles based on title, technology stack, salary, location,
                  and more.
                </div>
                <br />
                <div className="option-button">
                  <button
                    className="text-white font-medium px-4 py-2  bg-blue-900"
                    onClick={handlelogin}
                  >
                    Find a job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* business and developer section */}
      <section className="for-businesses py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="section-head text-center mb-10">
            <h2 className="section-title text-3xl font-semibold">
              For businesses, by developers
            </h2>
            <div className="section-line bg-amber-500 mx-auto mt-4 h-1 w-20"></div>
            <p className="section-description mt-4 text-gray-600">
              Our mission is to help developers write the script of the future.
              <br />
              This means helping you find and hire skilled developers for your
              business <br />
              and providing them the tools they need to share knowledge and work
              <br /> effectively.
            </p>
          </div>

          <div className="options grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
            {/* Option 1 */}
            <div className="option text-center bg-white  shadow-md p-6">
              <div className="option-icon flex items-center justify-center">
                <img
                  src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e"
                  alt="Private Q&A"
                  className="w-12 h-12"
                />
              </div>
              <div className="option-description text-gray-700 mt-4">
                Quickly find and share internal knowledge with{" "}
                <a href="#" className="text-amber-500">
                  Private Q&A
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="option text-center bg-white  shadow-md p-6">
              <div className="option-icon flex items-center justify-center">
                <img
                  src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
                  alt="Talent solutions"
                  className="w-12 h-12"
                />
              </div>
              <div className="option-description text-gray-700 mt-4">
                Find the perfect candidate for your growing technical team with{" "}
                <a href="#" className="text-amber-500">
                  Talent solutions
                </a>
              </div>
            </div>

            {/* Option 3 */}
            <div className="option text-center bg-white  shadow-md p-6">
              <div className="option-icon flex items-center justify-center">
                <img
                  src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
                  alt="Advertising platform"
                  className="w-12 h-12"
                />
              </div>
              <div className="option-description text-gray-700 mt-4">
                Accelerate the discovery of your products or services through
                our
                <a href="#" className="text-amber-500">
                  Advertising platform
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* plan cards section */}
      <section className="teams py-16 bg-blue-900">
        <div className="container mx-auto">
          <div className="teams-head text-center mb-12">
            <h2 className="teams-title text-3xl font-semibold text-white">
              Unlock siloed knowledge with <br />
              Stack Overflow for Teams
            </h2>
            <div className="section-line bg-amber-500 mx-auto mt-4 h-1 w-40"></div>
            <p className="teams-description text-white mt-2">
              Wikis, chat messages, or formal documentation for knowledge
              <br />
              management aren’t effective. Our question and answer format is a
              <br />
              proven approach for accessing the right information in less time.
            </p>
            <div className="teams-details mt-6">
              <button
                className="text-white font-medium px-4 py-2  bg-amber-500"
                onClick={handlelogin}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-3 gap-8 ">
            {/* Team Plan 1: Basic */}
            <div className="teams-plan">
              <div className="card card-basic bg-white shadow-md  rounded-lg overflow-hidden">
                <div className="card-header bg-gray-100 py-4 text-center">
                  <h1 className="plan-type text-xl text-gray-700 font-bold">
                    Basic
                  </h1>
                </div>
                <br />
                <h2 className="plan-description text-lg text-gray-700 font-semibold text-center">
                  Private knowledge base for teams
                </h2>
                <br />
                <div className="card-body p-6 flex flex-col justify-between">
                  <div>
                    <div className="plan-price text-2xl text-gray-800 mb-2">
                      $6 USD
                    </div>
                    <span className="per text-sm text-gray-600">
                      per teammate / month
                    </span>
                    <div className="plan-features mt-4">
                      <div className="plan-feature flex items-center text-gray-700">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span className="plan-text text-sm">
                          Free 30 day trial
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <button
                    className="text-black font-medium px-4 py-2 bg-gray-300 mt-4"
                    onClick={handlelogin}
                  >
                    Get Started For Free
                  </button>
                </div>
              </div>
            </div>

            {/* Team Plan 2: Business */}
            <div className="teams-plan">
              <div className="card card-basic bg-white rounded-lg shadow-md overflow-hidden">
                <div className="card-header bg-gray-100 py-4 text-center">
                  <h2 className="plan-type text-xl text-gray-700 font-bold">
                    Business
                  </h2>
                </div>
                <br />
                <h2 className="plan-description text-lg text-gray-700 font-semibold text-center">
                  Private knowledge base with SSO and premium features
                </h2>
                <br />
                <div className="card-body p-6 flex flex-col justify-between">
                  <div>
                    <div className="plan-price text-2xl text-gray-800 mb-2">
                      $12 USD
                    </div>
                    <span className="per text-sm text-gray-600">
                      per teammate / month
                    </span>
                    <div className="plan-features mt-4">
                      <div className="plan-feature flex items-center text-gray-700">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span className="plan-text text-sm">
                          Single sign-on (SSO) with SAML
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    className="text-white font-medium px-4 py-2 bg-gray-700 mt-4"
                    onClick={handlelogin}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Team Plan 3: Enterprise */}
            <div className="teams-plan">
              <div className="card card-basic bg-white rounded-lg shadow-md overflow-hidden">
                <div className="card-header bg-gray-100 py-4 text-center">
                  <h2 className="plan-type text-xl text-gray-700 font-bold">
                    Enterprise
                  </h2>
                </div>
                <br />
                <h2 className="plan-description text-lg text-gray-700 font-semibold text-center">
                  Standalone knowledge base with enhanced security and flexible
                  hosting
                </h2>
                <br />
                <div className="card-body p-6 flex flex-col justify-between">
                  <div>
                    <div className="plan-price text-2xl text-gray-800 mb-2">
                      Custom pricing
                    </div>
                    <span className="per text-sm text-gray-600">
                      Let’s talk about what you need
                    </span>
                    <div className="plan-features mt-4">
                      <div className="plan-feature flex items-center text-gray-700">
                        <i className="far fa-calendar-alt mr-2"></i>
                        <span className="plan-text text-sm">
                          Single sign-on with AD or SAML
                        </span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <button
                    className="text-white font-medium px-4 py-2 bg-blue-900 mt-4"
                    onClick={handlelogin}
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer className="footer bg-gray-100 text-black">
        <div className="container mx-auto py-8">
          <div className="footer-content flex items-center justify-between">
            <div className="footer-icon">
              <i className="fab fa-stack-overflow text-3xl"></i>
            </div>

            <div className="footer-nav flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="footer-nav-col mb-4 md:mb-0">
                  <div className="footer-links-title">
                    <div className="text-xl text-grey font-semibold">
                      <span className=" text-amber-500 font-bold">Stack </span>
                      OverFlow
                    </div>
                  </div>
                  <ul className="footer-links">
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Questions
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Jobs
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Developer Jobs Directory
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Salary Calculator
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-another-links">
              <div className="social-media">
                <ul className="flex items-center space-x-4">
                  <li>
                    <a href="#" className="text-black">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright text-sm">
                <p>
                  site design / logo © 2023 Stack Exchange Inc; user
                  contributions licensed under{" "}
                  <a href="#" className="text-amber-500 hover:underline">
                    cc by-sa
                  </a>
                  . rev 2023.12.22.12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Landingpage;
