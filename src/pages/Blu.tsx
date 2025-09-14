import React from "react";
import BlueLensesImage from "../assets/blue-lenses.png"; 

const BluHeroBanner: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://static1.lenskart.com/media/desktop/img/July22/mob-13.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 relative z-10">
        Discover Lenskart Blu - Advanced Blue Light Blocking Eyewear
      </h1>
      <p className="max-w-2xl mx-auto text-lg font-medium relative z-10">
        Protect your eyes from digital eye strain and enjoy a comfortable viewing
        experience with our premium blue cut lenses and trendy designs.
      </p>
    </section>
  );
};

const BluInfoSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto p-6 text-center text-gray-800">
      <h2 className="text-3xl font-bold mb-4">Why Choose Lenskart Blu?</h2>
      <p className="mb-6 text-lg">
        Lenskart Blu lenses block harmful blue light emitted from phones,
        computers, and other digital screens to reduce eye fatigue, headaches,
        and improve sleep quality. Our wide collection offers stylish frames
        suitable for every face.
      </p>
      <p className="text-base text-gray-600">
        Trusted by millions, Lenskart Blu ensures your eyes get the protection
        they deserve without compromising on style. Available in a variety of
        shapes and colors.
      </p>
    </section>
  );
};

// ✅ New Section with Blue Lenses Screenshot
const BluImageSection: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Side Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            See the Difference with Blu Lenses
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Specially designed to filter harmful blue light from digital devices, Blu lenses 
            keep your eyes protected and your vision clear throughout the day.
          </p>
          <p className="text-base text-gray-500">
            Perfect for students, professionals, and gamers who spend long hours on screens.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="flex-1">
          <img
            src={BlueLensesImage}
            alt="Blu Lenses Example"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

const BluPageHeader: React.FC = () => {
  return (
    <>
      <BluHeroBanner />
      <BluInfoSection />
      <BluImageSection /> {/* ✅ New Part Added */}
    </>
  );
};

export default BluPageHeader;
