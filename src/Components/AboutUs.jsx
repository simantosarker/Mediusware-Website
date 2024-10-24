// AboutUs.jsx

const AboutUs = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4 md:px-0">
        {/* Left Section - Image or Video */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <img
              src="/path-to-your-image.jpg"
              alt="Team Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <button className="bg-white p-4 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-4.5V6.5l5 3.5-5 3.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Text and Stats */}
        <div className="w-full md:w-1/2 text-center md:text-left md:pl-12">
          <h2 className="text-4xl font-bold mb-4">
            A Little Bit <span className="text-green-400">About Us</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Incepted in 2016, Mediusware Ltd. has been serving as a leading IT
            Solution provider in the USA & Bangladesh. Our aim is to help
            businesses all around the world by providing digital solutions
            tailored to their needs. Serving renowned companies in the USA, UK,
            and beyond, we have successfully created a large base of satisfied
            clients!
          </p>

          {/* Stats */}
          <div className="flex justify-around mb-6">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">800+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">1,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Contact Us
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-full transition duration-300 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm7 10a1 1 0 010-2H7a1 1 0 110-2h6a1 1 0 010 2H7a1 1 0 110 2h6z"
                  clipRule="evenodd"
                />
              </svg>
              Company Deck
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
