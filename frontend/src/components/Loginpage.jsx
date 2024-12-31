import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [currentForm, setCurrentForm] = useState('login');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#register') {
      setCurrentForm('register');
    } else {
      setCurrentForm('login');
    }
  }, [location.hash]);

  const toggleForm = (form) => {
    setCurrentForm(form);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          firstname,
          lastname,
          password,
        }),
      });

      const data = await response.json();

      console.log('Response Status:', response.status);
      console.log('Response Data:', data);
      if (response.ok) {
        localStorage.setItem('Login', 'true');
        localStorage.setItem('firstname',firstname);
        localStorage.setItem('lastname',lastname);
        alert('Registration successful!');
        navigate('/');
      } else {
        alert(`Error: ${data.message || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again later.');
    }

  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      });

      const data = await response.json();
      console.log('Response Status:', response.status);
      console.log('Response Data:', data);
      if (response.ok) {
        localStorage.setItem('Login', 'true');
        localStorage.setItem('userID', data.iduser);
        localStorage.setItem('firstname',data.firstname);
        localStorage.setItem('lastname',data.lastname);
        alert('Login successful!');
        navigate('/');
      } else {
        alert(`Error: ${data.message || 'Invalid username or password'}`);
      }
    } catch (error) {
      console.log('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-[#023E53] flex justify-center items-center min-h-screen">
      <div className="flex flex-row bg-white w-[856px] h-[560px] rounded-[10px] shadow-[2.5px_2.5px_10px_0px_black]">
        {/* Left Panel */}
        <div
          className="w-1/2 h-full rounded-[10px] bg-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(to left, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, 0) 100%), url('/images/loginimage.jpg')",
          }}
        ></div>

        {/* Right Panel */}
        <div className="w-1/2 flex flex-col items-center justify-start p-8">
          <h1 className="font-merriweather-sans text-[#07475D] text-[30px] font-bold">
            MuYMuY
          </h1>

          {/* Navigation */}
          <div className="text-center flex flex-row items-center justify-center mt-5 mb-8 ">
            <nav
              className={`text-center  pr-[16px] border-r-[3px] border-[#07475D]`}
            >
              <a
                href="#login"
                onClick={() => toggleForm("login")}
                className={`text-[#07475D] text-[30px] pb-[5px] ${currentForm === "login" ? "border-b-2 border-[#07475D]" : ""
                  }`}
              >
                Login
              </a>
            </nav>

            <nav
              className={`w-1/2 text-center pl-[16px] }`}
            >
              <a
                href="#register"
                onClick={() => toggleForm("register")}
                className={`text-[#07475D] text-[30px] pb-[5px]  ${currentForm === "register" ? "border-b-2 border-[#07475D]" : ""
                  }`}

              >
                Register
              </a>
            </nav>
          </div>

          {/* Forms */}
          {currentForm === "login" && (
            <form className="w-full flex flex-col gap-4" onSubmit={handleLoginSubmit}>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Username/Email Address"
                className="border pl-2 rounded-[10px] w-full h-[50px] "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="border pl-2 rounded-[10px] w-full h-[50px]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex flex-row mb-[10px]">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="remember"
                  id="remember"
                />
                <label htmlFor="remember" className="text-sm text-[#07475D]">
                  Remember me
                </label>
                <a
                  href="#"
                  onClick={() => toggleForm("forgot-pw")}
                  className="text-sm text-[#07475D] ml-auto"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-[#07475D] text-[20px] text-white rounded-[10px] h-[40px] w-[160px] ml-[100px]"
              >
                Sign in
              </button>
              <div className="flex items-center gap-4 mt-4">
                <hr className="flex-grow border-gray-300" />
                <span className="text-sm text-gray-500">Other Login</span>
                <hr className="flex-grow border-gray-300" />
              </div>
              <div className="flex gap-8 m-2.5 w-[160px] ml-[96px] mt-1 ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/facebook.png" alt="facebook" />
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/google.png" alt="google" />
                </a>
                <a
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/github.png" alt="github" />
                </a>
              </div>
              <a
                href="/"
                className="text-sm text-[#07475D] w-[120px] hover:border-b-[1.5px] hover:border-[#07475D] ml-[125px]"
              >
                Back to Homepage
              </a>
            </form>
          )}
          {currentForm === "register" && (
            <form className="w-full flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
              <input
                type="email"
                id="register-email"
                placeholder="Enter Email Address"
                className="border p-2 rounded w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                id="register-username"
                placeholder="Enter Username"
                className="border p-2 rounded w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="text"
                id="register-firstname"
                placeholder="Enter First Name"
                className="border p-2 rounded w-full"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                id="register-lastname"
                placeholder="Enter Last Name"
                className="border p-2 rounded w-full"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="border p-2 rounded w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#07475D] text-white py-2 rounded w-full"
              >
                Register
              </button>
            </form>
          )}

          {currentForm === "forgot-pw" && (
            <form className="w-full flex flex-col gap-4">
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="border p-2 rounded w-full"
                required
              />
              <input
                type="password"
                id="password"
                placeholder="Enter new Password"
                className="border p-2 rounded w-full"
                required
              />
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  id="verification-code"
                  placeholder="Verification Code"
                  className="border p-2 rounded flex-grow"
                  required
                />
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Send
                </button>
              </div>
              <button
                type="submit"
                className="bg-[#07475D] text-white py-2 rounded w-full"
              >
                Send
              </button>
              <a
                href="#"
                onClick={() => toggleForm("login")}
                className="text-sm text-blue-500 text-center mt-4"
              >
                Back to Login
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
