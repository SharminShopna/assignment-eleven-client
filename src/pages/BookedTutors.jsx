import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../components/useAxiosSecure";


const BookedTutors = () => {
  const {isDarkMode} = useContext(AuthContext)
    const [bookedTutors, setBookedTutors] = useState([]);
    const axiosSecure = useAxiosSecure();
    useEffect(() =>{
      axiosSecure.get('/booking', {
        withCredentials:true
      })
      .then((res)=>{
           setBookedTutors(res.data)
         })
    },[axiosSecure]);
    const handleReview = (tutorId) =>{
      fetch(`https://assignment-eleven-server-nu.vercel.app/review/${tutorId}`,{
         method: 'PATCH',
         headers: {
            'content-type': 'application/json',
         },
      })
      .then((res) => res.json())
      .then((data)=>{
        if(data.modifiedCount > 0){
            Swal.fire({
                title: "Review count updated!",
                icon: "success",
                draggable: true
              });
              setBookedTutors((prevTutors) =>
                prevTutors.map((tutor) => tutor.tutorId === tutorId ? { ...tutor, reviews: (tutor.reviews || 0) + 1} :tutor )
            )
        }
      })
      .catch((err) => console.log(err));
    };
    
    
    return (
        <>
        <Helmet>
        <title>BookedTutor | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="w-11/12 mx-auto">
        <Header></Header>
        <div className={`container bg-orange-50 mt-24 my-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-50'}`}>
      <h1 className="text-3xl py-6 font-bold text-center text-orange-500">Booked Tutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {bookedTutors.length === 0 ? (
      <p>No tutors booked yet.</p>
       ) : (
       bookedTutors.map((tutor) => (
       <div key={tutor.tutorId} className="card shadow-lg">
      <img src={tutor.image} alt={tutor.name} className="w-full h-full p-5 rounded-3xl" />
      <div className="p-4">
        <h2 className="font-semibold">Name:{tutor.name}</h2>
        <p>Language: {tutor.language}</p>
        <p>Price: ${tutor.price}</p>
        <button
          className="btn bg-orange-400 text-white mt-2"
          onClick={() => handleReview(tutor.tutorId)}
          >
          Review
        </button>
      </div>
    </div>
  ))
)}
      </div>
    </div>

        </div>
            <Footer></Footer>
        </>
    );
};

export default BookedTutors;