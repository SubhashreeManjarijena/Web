import './App.css';
import Navbar from './components/Navbar';
import "@fontsource/dm-serif-display";
import Lottie from 'lottie-react'
import animation1 from '.././public/animation1.json'
import animation2 from '.././public/animation2.json'
import animation3 from '.././public/animation3.json'
import animation4 from '.././public/animation4.json'

function App() {
  return (
    <div className='bg-[#212A31] w-full'>
      <Navbar />
      <div className="flex items-center justify-between w-full mt-12">

        {/* Header Section */}
        <div className="text-white text-left p-12">
          <h1 className="text-6xl mb-4 italic" style={{ fontFamily: "DM Serif Display" }}>
            Welcome To <span className="text-[#D3D9D5]">AskToMentor</span>
          </h1>
          <p className="text-3xl mb-6 text-[#8AA4AB]" style={{ fontFamily: "Source Serif Pro" }}>Where Curiosity Meets Knowledge</p>
          <p className="text-xl mb-8 ">
            enhance your skills, get personalized guidance, <br></br>and achieve your career goals as a mentee on<br></br> our platform.
          </p>
          <button className="bg-[#124E66] hover:bg-blue-700 text-white  py-3 px-6 rounded">
            Join As Mentor
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-end pr-12 mt-8">
          <div className="text-gray-400 text-center">
            <div className="flex justify-center items-center mb-4">
              <img src="Group 89.png" alt="Icon" className="w-26" />
            </div>
          </div>
        </div>

      </div>

      {/* Features Section */}
      <div className="mt-12 grid sm:grid-cols-4 grid-cols-1 items-center sm:ml-12 ml-5">
        <div className='flex items-center justify-center bg-slate-300 w-[278px] h-[135px] rounded-md'>
          <img src="/Member.png" alt="Expert Guidance" className=" " />
        </div>
        <div className='flex items-center justify-center bg-slate-300 w-[278px] h-[135px] rounded-md'>
          <img src="/Member.png" alt="Expert Guidance" className=" " />
        </div>
        <div className='flex items-center justify-center bg-slate-300 w-[278px] h-[135px] rounded-md'>
          <img src="/Member.png" alt="Expert Guidance" className=" " />
        </div>
        <div className='flex items-center justify-center bg-slate-300 w-[278px] h-[135px] rounded-md'>
          <img src="/Member.png" alt="Expert Guidance" className=" " />
        </div>
      </div>

      {/* Meet Our Top Mentors Section */}
      <div className="px-12 pb-12 mt-[5rem]" >
        <h2 className="text-5xl gradient-text font-semibold mb-8 " style={{ fontFamily: "DM Serif Text" }}>
          Meet Our Top Mentors
        </h2>

        <div className="grid lg:grid-cols-3 gap-3">
          {/* Mentor Card */}
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex ">
            {/* Image Side */}
            <div className="w-1/2 p-2">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text Side */}
            <div className="w-1/2 py-2 flex flex-col bg-cover bg-center" style={{ backgroundImage: `url('rigntbg.png')` }}>
              <h2 className="text-xl font-bold">Vihaan Sharma</h2>
              <p className="text-lg text-gray-400 mb-2">Web Developer</p>
              <p className="text-sm text-gray-300">
                Timely precision, where promises meet performance, ensuring your
                project's success.
              </p>
              <div className="flex mt-4">
                <button className="bg-gray-600 text-white rounded-md p-1 mr-1 text-sm">
                  Location
                </button>
                <button className="bg-gray-600 text-white rounded-md p-1 text-sm">
                  3+ Years Experience
                </button>
              </div>
            </div>
          </div>

          {/* Additional Mentor Cards */}
          <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex ">
            {/* Image Side */}
            <div className="w-1/2 p-2">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text Side */}
            <div className="w-1/2 py-2 flex flex-col bg-cover bg-center" style={{ backgroundImage: `url('rigntbg.png')` }}>
              <h2 className="text-xl font-bold">Vihaan Sharma</h2>
              <p className="text-lg text-gray-400 mb-2">Web Developer</p>
              <p className="text-sm text-gray-300">
                Timely precision, where promises meet performance, ensuring your
                project's success.
              </p>
              <div className="flex mt-4">
                <button className="bg-gray-600 text-white rounded-md p-1 mr-1 text-sm">
                  Location
                </button>
                <button className="bg-gray-600 text-white rounded-md p-1 text-sm">
                  3+ Years Experience
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex ">
            {/* Image Side */}
            <div className="w-1/2 p-2">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Text Side */}
            <div className="w-1/2 py-2 flex flex-col bg-cover bg-center" style={{ backgroundImage: `url('rigntbg.png')` }}>
              <h2 className="text-xl font-bold">Vihaan Sharma</h2>
              <p className="text-lg text-gray-400 mb-2">Web Developer</p>
              <p className="text-sm text-gray-300">
                Timely precision, where promises meet performance, ensuring your
                project's success.
              </p>
              <div className="flex mt-4">
                <button className="bg-gray-600 text-white rounded-md p-1 mr-1 text-sm">
                  Location
                </button>
                <button className="bg-gray-600 text-white rounded-md p-1 text-sm">
                  3+ Years Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Involved Section */}
      <h2 className="text-5xl gradient-text font-semibold mb-8 ml-12 " style={{ fontFamily: "DM Serif Text" }}>
        Steps Involved
      </h2>
      <div className="bg-gray-800 text-white py-16 px-8">

        <div className="grid md:grid-cols-4 gap-8">


        <div className="bg-black p-5 rounded-lg text-center">
            <div className='w-[12rem] mb-7 mt-5'>
              <Lottie animationData={animation3} />
            </div>
            <h3 className="text-xl font-semibold text-left ">Ask questions from mentors</h3>
            <p className="text-gray-400 text-left mt-5">
              Ask detailed questions and get personalized answers from our mentors.
            </p>
          </div>



          <div className="bg-black p-5 rounded-lg text-center">
            <div className='w-[8rem]'>
              <Lottie animationData={animation2} />
            </div>
            <h3 className="text-xl font-semibold text-left">Ask questions from mentors</h3>
            <p className="text-gray-400 text-left mt-5">
              Ask detailed questions and get personalized answers from our mentors.
            </p>
          </div>
          <div className="bg-black p-5 rounded-lg text-center">
            <div className='w-[8rem]'>
              <Lottie animationData={animation1} />
            </div>
            <h3 className="text-xl font-semibold text-left">Personalized Guidance</h3>
            <p className="text-gray-400 text-left mt-5">
              Receive tailored advice and strategies to overcome your learning challenges.
            </p>
          </div>
          <div className="bg-black p-5 rounded-lg text-center">
            <div className='w-[8rem]'>
              <Lottie animationData={animation4} />
            </div>            <h3 className="text-xl font-semibold text-left">Access Learning Resource</h3>
            <p className="text-gray-400 text-left mt-5">
              Explore blogs, articles, and educational content curated by our mentors.
            </p>
          </div>
        </div>
      </div>


      {/* How it works */}
      <h2 className="text-5xl gradient-text font-semibold mb-8 ml-12 " style={{ fontFamily: "DM Serif Text" }}>
        Why Choose Us
      </h2>

      <div className='grid sm:grid-cols-3 grid-cols-1 gap-8 w-full p-10 '>
        <div className="bg-cover bg-center p-5 h-[700px]" style={{ backgroundImage: `url('rigntbg.png')` }}>
          <img src="ph2.png" alt="Access Learning Resource" className="" />
        </div>
        <div className="bg-cover bg-center p-5  " style={{ backgroundImage: `url('rigntbg.png')` }}>
          <img src="ph1.png" alt="Access Learning Resource" className="mt-[150px]" />
        </div>
        <div className="bg-cover bg-center p-5" style={{ backgroundImage: `url('rigntbg.png')` }}>
          <img src="ph3.png" alt="Access Learning Resource" className="mt-[190px]" />
        </div>
      </div>
      <h2 className="text-5xl gradient-text font-semibold mb-8 ml-12 " style={{ fontFamily: "DM Serif Text" }}>
      How it Works  
      </h2>
      {/* Why Choose Us Section */}
      <div className="bg-gray-900 w-full mb-5">
        <div>
            <img src="work.png" alt="Why Choose Us" className="w-full" />
          </div>
        </div>

      {/* Call to Action Section */}
      <h2 className="text-5xl gradient-text font-semibold mb-8 ml-12 " style={{ fontFamily: "DM Serif Text" }}>
        Testimonials
      </h2>
      <div className="w-full pb-10">
        <img src="Bonus.png" alt="Why Choose Us" className="w-full rounded-lg" />
      </div>

    </div>
  );
}

export default App;
