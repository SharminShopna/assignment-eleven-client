import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import useAxiosSecure from "../components/useAxiosSecure";

const MyTutors = () => {
  const { user, isDarkMode } = useContext(AuthContext);
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
   const axiosSecure = useAxiosSecure();
  useEffect(() => {
    if (!user?.email) return;

    // axios.get(`https://assignment-eleven-server-nu.vercel.app/myEmail?email=${user.email}`, {
    //   withCredentials:true
    // })
    axiosSecure.get(`/myEmail?email=${user.email}`)
    .then((response) =>{
      setTutorials(response.data);
      setLoading(false);
    })



      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [user?.email]);

  // Handle delete operation
  const handleDelete = (_id) => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-eleven-server-nu.vercel.app/delete/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Tutor document has been deleted.",
                icon: "success",
              });
              setTutorials((prevTutor) =>
                prevTutor.filter((tutor) => tutor._id !== _id)
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting the item:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          });
      }
    });
  };

  
  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <div className="w-11/12 mx-auto">
    <Helmet>
        <title>MyTutorial | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Header></Header>
      <div className={`container mx-auto p-4 mt-24 my-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-50'}`}>
        <h1 className="text-2xl font-bold mb-4 text-center text-orange-500">My Tutorials</h1>
        <table className={`table w-full ${isDarkMode ? 'text-white' : ''}`}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Language</th>
              <th>Price</th>
              <th>Description</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((tutorial) => (
              <tr key={tutorial._id}>
                <td>{tutorial.name}</td>
                <td>
                  <img
                    src={tutorial.image}
                    alt={tutorial.name}
                    className="w-16 h-16 rounded-lg"
                  />
                </td>
                <td>{tutorial.language}</td>
                <td>{tutorial.price}</td>
                <td>{tutorial.description}</td>
                <td>{tutorial.reviews || 0}</td>
                <td>
                  <div className="space-y-2">
                    <Link to={`/update/${tutorial._id}`} className="btn bg-orange-400 text-white btn-sm mr-2">
                      Update
                    </Link>
                    <Link
                      className="btn bg-red-600 text-white btn-sm"
                      onClick={() => handleDelete(tutorial._id)}
                    >
                      Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default MyTutors;
