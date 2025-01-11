import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";

const FindTutors = () => {
  const { isDarkMode } = useContext(AuthContext);
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search);

  useEffect(() => {
    axios.get("https://assignmment.vercel.app/allTutors")
      .then((response) => {
        setTutors(response.data);
      });
      
  }, []);
// search related api
  useEffect(() => {
    axios.get(`https://assignmment.vercel.app/searchTutors?searchParams=${search}`)
      .then((response) => {
         setTutors(response.data);
      });
  }, [search]);

  return (
    <>
      <div>
        <Helmet>
          <title>FindTutor | TutorBooking</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="w-11/12 mx-auto">
          <Header />
          <div className="flex justify-center items-center">
          <label className="input input-bordered w-[50%] flex items-center gap-2 mt-28">
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" name="search" placeholder="Search" required />
           <svg
             xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
                <path
                   fillRule="evenodd"
                     d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
                 </svg>
                 </label>
          </div>
          <div className={`container mx-auto p-4 mt-12 my-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-50'}`}>
            <h1 className="text-5xl font-bold mb-4 text-orange-500">All Tutors :</h1>
            <div className="overflow-x-auto">
              <table className={`table w-full ${isDarkMode ? 'text-white' : ''}`}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Language</th>
                    <th>Review</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {tutors.map((tutor) => (
                    <tr key={tutor._id}>
                      <td>{tutor.name}</td>
                      <td>
                        <img
                          src={tutor.image}
                          alt={tutor.name}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </td>
                      <td>{tutor.language}</td>
                      <td>{tutor.reviews || "0"}</td>
                      <td>
                        <Link to={`/tutor/${tutor._id}`} className="btn bg-orange-400 text-white btn-sm">
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FindTutors;
