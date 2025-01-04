// FeaturesSection.jsx
import { FaChalkboardTeacher, FaCalendarCheck, FaLaptopCode } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Why Choose Our Tutor Booking Platform?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <FaChalkboardTeacher className="text-5xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Expert Tutors</h3>
            <p className="text-gray-600">
              Connect with highly experienced tutors in various subjects to guide you effectively.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <FaCalendarCheck className="text-5xl text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">
              Book sessions according to your preferred time with ease and flexibility.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300">
            <FaLaptopCode className="text-5xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Classes</h3>
            <p className="text-gray-600">
              Experience live, interactive sessions that make learning enjoyable and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;