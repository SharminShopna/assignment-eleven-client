import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const UpdateTutor = () => {
  const { isDarkMode } = useContext(AuthContext);
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const [formData, setFormData] = useState({
    image: '',
    language: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    axios.get(`https://assignment-eleven-server-nu.vercel.app/tutors/${id}`,{
      withCredentials:true,
    })
      .then(response => {
        setTutor(response.data);
        setFormData({
          image: response.data.image || '',
          language: response.data.language || '',
          price: response.data.price || '',
          description: response.data.description || '',
        });
      })
      .catch(error => console.log('Error fetching tutor', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    axios.patch(`https://assignment-eleven-server-nu.vercel.app/tutors/${id}`, formData)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Tutor updated successfully!',
        });
      })
      .catch((error) => {
        const errorMessage = error.response?.data?.message || 'An unknown error';
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error updating tutor: ${errorMessage}`,
        });
      });
  };

  if (!tutor) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>AddTutorial | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <nav className="w-11/12 mx-auto">
        <Header />
      </nav>
      <div className={`p-24 mt-28 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-50'}`}>
        <h2 className={`text-3xl font-extrabold text-center ${isDarkMode ? 'text-orange-400' : 'text-orange-400'} mb-8`}>Update Tutorials</h2>

        {/* User Name and user email row */}
        <div className="md:flex md-8">
          <div className="form-control md:w-1/2">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              value={tutor.name}
              readOnly
              className={`input input-bordered w-full mb-4 ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-6">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              value={tutor.email}
              readOnly
              className={`input input-bordered w-full mb-4 ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
            />
          </div>
        </div>

        {/* Language name and review row */}
        <div className="md:flex md-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Language Name</span>
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              defaultValue="Pick a language name"
              className={`select select-bordered w-full ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
            >
              <option>English</option>
              <option>Japanese</option>
              <option>Spanish</option>
              <option>German</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Arabic</option>
              <option>French</option>
              <option>Portuguese</option>
            </select>
          </div>
          <div className="form-control md:w-1/2 md:ml-6">
            {/* Review */}
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <input
              type="number"
              value={tutor.reviews || '0'}
              readOnly
              name="review"
              placeholder="Review"
              className={`input input-bordered w-full ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
              required
            />
          </div>
        </div>

        {/* Price and img URL row */}
        <div className="md:flex md-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={handleInputChange}
              name="price"
              placeholder="Price"
              className={`input input-bordered w-full ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
              required
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-6">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className={`input input-bordered w-full ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="md:flex md-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className={`textarea textarea-bordered textarea-lg w-full ${isDarkMode ? 'bg-gray-700 text-white' : ''}`}
            ></textarea>
          </div>
        </div>

        {/* Button */}
        <input
          type="submit"
          value="Update Tutorials"
          onClick={handleUpdate}
          className={`btn bg-orange-400 text-white mt-8 w-full text-lg ${isDarkMode ? 'hover:bg-orange-600' : ''}`}
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Your information will be saved in the database"
        />
        <p className="text-center font-semibold py-3">
          Do you want to go? <Link to={"/"} className="text-red-600">Home</Link>
        </p>
      </div>
      <Footer />
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default UpdateTutor;
