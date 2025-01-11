import { useEffect, useState } from "react";
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
const StatsSection = () => {
  const [stats, setStats] = useState({
    tutors: 0,
    reviews: 0,
    languages: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("https://assignmment.vercel.app/stats");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <>
    <div className="py-12 my-12">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl text-orange-500 font-bold mb-8">Online Tutor Booking Platform Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card shadow-lg bg-white p-6 rounded-lg text-center">
            <img
              src={pic1}
              alt="Tutors"
              className="mx-auto rounded-full w-20 h-20 object-cover mb-4"
            />
            
           <p className="text-gray-600 font-bold text-3xl">{stats.tutors.toLocaleString()}+</p>
           <h3 className="font-bold text-gray-500 text-sm">Experienced Tutors</h3>
          </div>
          <div className="card shadow-lg bg-white p-6 rounded-lg text-center">
            <img
              src={pic2}
              alt="Reviews"
              className="mx-auto rounded-full w-20 h-20 object-cover mb-4"
            />
            
            <p className="text-gray-600 font-bold text-3xl">{stats.reviews.toLocaleString()}+</p>
            <h3 className="font-bold text-gray-500 text-sm">5-Star Reviews</h3>
          </div>
          <div className="card shadow-lg bg-white p-6 rounded-lg text-center">
            <img
              src={pic3}
              alt="Languages"
              className="mx-auto rounded-full w-20 h-20 object-cover mb-4"
            />
            
            <p className="text-gray-600 font-bold text-3xl">{stats.languages.toLocaleString()}+</p>
            <h3 className="font-bold text-gray-500 text-sm">Languages Taught</h3>
          </div>
          <div className="card shadow-lg bg-white p-6 rounded-lg text-center">
            <img
              src={pic4}
              alt="Users"
              className="mx-auto rounded-full w-20 h-20 object-cover mb-4"
            />
            
            <p className="text-gray-600 font-bold text-3xl">{stats.users.toLocaleString()}+</p>
            <h3 className="font-bold text-gray-500 text-sm">App Users</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default StatsSection;
