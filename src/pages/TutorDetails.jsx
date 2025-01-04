import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const TutorDetails = () => {
    const {user, isDarkMode} = useContext(AuthContext)
  const { details } = useParams(); 
   const [tutor, setTutor] = useState(null); 
   const [loading, setLoading] = useState(true);
   const [message, setMessage] = useState("");
   const navigate = useNavigate() 
  
   useEffect(() => { 
    axios
      .get(`https://assignment-eleven-server-nu.vercel.app/tutors/${details}`, {
        withCredentials: true, 
      })
      .then((response) => {
        console.log(response);
        setTutor(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        setLoading(false); 
        if (error.response && error.response.status === 401) {
          setMessage("Unauthorized access. Please log in."); 
        } else {
          setMessage("An error occurred. Please try again.");
        }
        console.error("Error fetching tutor details:", error);
      });
  }, [details]);
   console.log(message);
  const handleBooking = () => {
    if(!user){
        Swal.fire({
            title: "Do you have a login?",
            text: "You must log in to book a tutor.",
            icon: "question"
          });
          navigate("/logIn");
          return;
    }

    const bookingDetails = {
        tutorId: tutor._id,
        name:tutor.name,
        image: tutor.image,
        language: tutor.language,
        price: tutor.price,
        tutorEmail: tutor.email,
        email: user.email,
      };

      axios.post("https://assignment-eleven-server-nu.vercel.app/book", bookingDetails)
  .then(() => {
    Swal.fire({
      title: "Booking successful!",
      icon: "success",
      draggable: true,
    }).then((result) => {
      if (result.isConfirmed) {

        navigate("/allTutors");
      }
    });
  })
  .catch(() => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Failed to book tutor.",
      footer: '<a href="#"></a>'
    });
  });
    
  }
  
  
     if (loading) {
    
       return (<Loading></Loading>);
    }

   if (!tutor) {
    
     return <div className="text-3xl text-center my-24 text-red-700">No tutor found.</div>;
   }

  return (
    <>
    <Helmet>
        <title>DetailsTutor | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="w-11/12 mx-auto">
        <Header></Header>
       <div className={`hero min-h-[300px] md:min-h-[600px] my-4 mt-24 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-50 text-black'}`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={tutor.image}
            alt={tutor.name}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className={"space-y-3"}>
            <h1 className="text-5xl font-bold">Name: {tutor.name}</h1>
            <p><strong>Language:</strong> {tutor.language}</p>
            <div className="rating">
              <p><strong>Review:</strong> {tutor.review}</p>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p><strong>Description:</strong> {tutor.description}</p>
            <p><strong>Price:</strong> ${tutor.price}</p>
            <button onClick={handleBooking} className="btn bg-orange-400 text-white">Book</button>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer> 
    </>
  );
};

export default TutorDetails;
