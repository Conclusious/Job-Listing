import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();
  const [Login, setLogin] = useState(false);
  const footerRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrolltoAbout = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem('Login') === 'true';
    setLogin(loggedIn);
  }, []);

  const handlePopularSearch = (searchTerm) => {
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/login#register');
  };

  const handleJobClick = () => {
    navigate('/search');
  };

  const goToAccount = () => {
    navigate('/Profile');
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div id="Homepage" className="flex flex-col">
      {/* Header Section */}
      <header className="flex justify-between items-center bg-white h-20 px-8">
        <h2 className="text-blue-800 font-merriweather-sans font-bold text-[30px] hover:cursor-pointer hover:text-blue-600 transition-colors">MuYMuY</h2>
        <div className="flex gap-5">
          {Login ? (
            <img
              src="/images/user-icon.png"
              alt="Account Icon"
              className="w-10 h-10 rounded-full hover:cursor-pointer"
              onClick={goToAccount}
            />
          ) : (
            <>
              <button
                onClick={goToRegister}
                className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-600"
              >
                Sign Up
              </button>
              <button
                onClick={goToLogin}
                className="bg-white border border-black text-blue-800 px-6 py-2 rounded-full hover:bg-blue-300"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </header>

      {/* Navigation Section */}
      <nav className="flex justify-between items-center bg-gray-200 h-16 px-8 text-lg">
        <div className="flex gap-10">
          <nav className="hover:underline cursor-pointer" onClick={handleJobClick}>Job</nav>
          <nav className="hover:underline cursor-pointer" onClick={scrolltoAbout}>About Us</nav>
          <nav className="hover:underline cursor-pointer" onClick={scrollToFooter}>Contact Us</nav>
        </div>
      </nav>

      {/* Learn More Section */}
      <div className="flex justify-center items-center gap-2 bg-[#8BCDE4] text-lg h-16 font-manrope">
        <p>Career Builder & MuYMuY are combining!</p>
        <nav className="relative text-black no-underline hover:underline cursor-pointer" onClick={scrolltoAbout}>About Us</nav>
        <img className="ml-2" src="/images/right-arrow.png" alt="Arrow Icon" />
      </div>

      {/* Search Section */}
      <section className="bg-[#00202B] flex flex-col items-start px-44 py-16 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 text-4xl">
            <h3 className="text-blue-300">Find the</h3>
            <h3>Right</h3>
            <h3 className="text-blue-300">Fit</h3>
          </div>
          <form onSubmit={handleSearchSubmit} className="sitesearch flex justify-center mx-auto max-w-[925px] pt-8">
            <div className="keyword relative flex-1 text-center text-black">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="inpu w-full border border-gray-300 px-[55px] py-4 text-lg leading-[1.333] rounded-l-lg h-[60px] min-h-[60px] flex items-center"
                placeholder="Keywords and companies"
              />
              <img
                className="icon absolute top-1/2 left-5 w-[18px] h-[18px] transform -translate-y-1/2"
                src="/images/searches.png"
                alt="Search Icon"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#8BCDE4] text-black px-8 py-4 rounded-r-lg"
            >
              Search
            </button>
          </form>
        </div>
        <div className="popular-search mt-5">
          <h4 className="text-[#8BCDE4] text-[24px] font-normal mb-2.5">Popular Searches</h4>
          <div className="ButSearch flex flex-wrap gap-[11px] mt-5 max-w-[900px] w-full">
            {[
              "Work From Home", "Part Time", "Customer Service", "Engineering", "IT",
              "Data Analyst", "Digital Marketing", "Software Engineer", "Doctor", "English Teacher"
            ].map((search, index) => (
              <button key={index} className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200" onClick={() => handlePopularSearch(search)}>
                {search}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Content Section */}
      <section className="extra-content bg-[#023E53] h-[529px] px-5 flex flex-row items-center justify-around">
        <div className="left max-w-[495px] text-white text-left">
          <h2 className="text-4xl mb-2.5">Sign In to get job alert</h2>
          <p className="text-xl leading-6 mb-5 max-w-[493px]">
            Our powerful matching technology will send job matches right to your inbox.
          </p>
          <button className="explore-button bg-white text-[#023E53] text-lg px-6 py-3 rounded-[10px] w-[152px] h-[52px] hover:bg-[#c6f0ff]" onClick={handleJobClick}>
            Explore Now
          </button>
        </div>
        <div>
          <img src="/images/image 15.png" alt="Extra Content Image" className="rounded-[20px] max-w-[492px]" />
        </div>
      </section>

   {/* About Us Section */}
      <section ref={aboutUsRef} className="about-us bg-[#8BCDE4] py-16 px-10">
        <h2 className="text-4xl text-wh text-center font-semibold mb-6">About Us</h2>
        <p className="text-lg text-center max-w-[800px] mx-auto leading-7">
          At MuYMuY, we aim to bridge the gap between job seekers and employers by offering a seamless job-matching service.
          Our platform is tailored to provide users with personalized job recommendations based on their skills, preferences, and career aspirations.
          Join us on our journey to transform the job search experience and create meaningful connections.
        </p>
      </section>

      {/* Footer Section */}
      <footer ref={footerRef} className="bg-gray-100 px-44 py-16">
        <div className="flex justify-between">
          <div className='w-[50%]'>
            <h1 className="text-2xl font-semibold">MuYMuY</h1>
            <p>MuYMuY is Cambodia's #1 Job Matching Service</p>
            <p>Find us on social media:</p>
            <div className="flex gap-5 mt-5">
              <img src="/images/facebook.png" alt="Facebook Icon" className="w-10 cursor-pointer" />
              <img src="/images/github.png" alt="GitHub Icon" className="w-10 cursor-pointer" />
              <img src="/images/search.png" alt="Search Icon" className="w-10 cursor-pointer" />
            </div>
          </div>
          <div className='w-[50%]'>
            <h4 className="text-xl font-semibold">Our Contact</h4>
            <p>#12, Street 2001, Phum Paprak Khang Tboung, Sangkat Kakab, Khan Porsenchey, Phnom Penh, Cambodia</p>
            <p>Tel: 855 9999999</p>
            <p>Email: muymuy@gmail.com</p>
            <p>Monday-Friday</p>
            <p>8:00am - 5:00pm</p>
          </div>
        </div>
      </footer>
      <div className="credit h-[50px] place-content-center bg-black text-white text-center">
        <p>All rights reserved &#xA9; 2024 MuYMuY.</p>
      </div>
    </div>
  );
}

export default Homepage;
