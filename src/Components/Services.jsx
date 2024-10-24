// Services.jsx

const services = [
  {
    title: "Software Development",
    description:
      "Relieve the burden of Software Development and Project Management.",
    imageUrl: "/path-to-image1.jpg",
  },
  {
    title: "Web Development",
    description:
      "We offer one-of-a-kind web development solutions to businesses all around the world.",
    imageUrl: "/path-to-image2.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Innovative solutions tailored to your needs, delivering seamless user experiences.",
    imageUrl: "/path-to-image3.jpg",
  },
  {
    title: "E-commerce Solution",
    description:
      "E-commerce websites need to be user-friendly, but attractive at the same time.",
    imageUrl: "/path-to-image4.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting interfaces that enhance user experiences, elevating brand engagement effortlessly.",
    imageUrl: "/path-to-image5.jpg",
  },
  {
    title: "API Integration",
    description:
      "Bridging platforms for effortless data flow, enabling enhanced operational efficiency.",
    imageUrl: "/path-to-image6.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-8">
          Things We’re <span className="text-green-400">Good At</span>
        </h2>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition duration-300"></div>

              {/* Service Image */}
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-60 object-cover rounded-lg"
              />

              {/* Service Info */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-full transition duration-300">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
