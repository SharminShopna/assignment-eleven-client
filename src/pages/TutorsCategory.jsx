import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";

const TutorsCategory = () => {
  const { isDarkMode } = useContext(AuthContext);
  const { category } = useParams();
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get(`https://assignmment.vercel.app/category/${category}`)
      .then((response) => {
        setTutors(response.data);
        console.log(response.data);
      });
  }, [category]);

  return (
    <>
      <Helmet>
        <title>TutorCategory | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className={`w-11/12 mx-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Header />
        <div>
          <h2 className="text-center text-3xl my-4 mt-28 text-orange-500 font-bold">Tutor Booking Platform</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {tutors.map((tutor) => (
                <div
                  key={tutor._id}
                  className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl`}
                >
                  <div className="card rounded-lg shadow-xl">
                    <figure className="w-full">
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="w-full rounded-t-lg object-cover"
                      />
                    </figure>
                    <div className="p-4">
                      <h2 className="text-xl font-bold">{tutor.name}</h2>
                      <p className="text-gray-600">Language: {tutor.language}</p>
                      <p className="text-gray-600">Price: ${tutor.price}</p>
                      <div className="rating my-2">
                        <p>Reviews: {tutor.review}</p>
                        <input
                          type="radio"
                          name={`rating-${tutor._id}`}
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name={`rating-${tutor._id}`}
                          className="mask mask-star-2 bg-orange-400"
                          defaultChecked
                        />
                        <input
                          type="radio"
                          name={`rating-${tutor._id}`}
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name={`rating-${tutor._id}`}
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          type="radio"
                          name={`rating-${tutor._id}`}
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                      <p className="text-gray-600 mb-4">
                        Description: {tutor.description}
                      </p>
                      <div className="card-actions justify-end">
                        <Link
                          to="/"
                          className="btn bg-orange-400 text-white px-4 py-2 rounded"
                        >
                          Go Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TutorsCategory;
