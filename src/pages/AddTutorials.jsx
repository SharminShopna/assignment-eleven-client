import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import axios from "axios";


const AddTutorials = () => {
    const { user, isDarkMode } = useContext(AuthContext);
   
    
    const handleAddTutor = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const language = form.language.value;
        const description = form.description.value;
        const price = form.price.value;
        const review = form.review.value || 0;
        const name = form.name.value;
        const email = form.email.value;
        const newTutor = { image, language, description, price, review, name, email };
        
        console.log(newTutor);
        
        //  fetch('https://assignment-eleven-server-nu.vercel.app/tutors', {
        //      method: 'POST',
        //      headers: { 'Content-Type': 'application/json' },
        //      body: JSON.stringify(newTutor)
        //  })
        //   .then(res => res.json())
          axios.post('https://assignment-eleven-server-nu.vercel.app/tutors',newTutor,{
            headers: { 'Content-Type': 'application/json' },
              withCredentials:true,
          })
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Tutor Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            }
        });
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
            
            <div className={`bg-orange-50 p-24 mt-28 ${isDarkMode ? "text-white" : ""}`}>
                <h2 className="text-3xl font-extrabold text-center text-orange-400 mb-8">Add Tutorials</h2>
                <form onSubmit={handleAddTutor}>
                    {/* User Name and User Email Row */}
                    <div className="md:flex md-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name="name" value={user?.displayName} placeholder="User Name" className={`input input-bordered w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`} required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-6">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" name="email" value={user?.email} placeholder="User Email" className={`input input-bordered w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`} required />
                        </div>
                    </div>

                    {/* Language Name and Reviews Row */}
                    <div className="md:flex md-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Language Name</span>
                            </label>
                            <select name="language" defaultValue="Pick a language name" className={`select select-bordered w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`}>
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
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <input type="text" name="review" value={0} placeholder="Review" className={`input input-bordered w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`} required />
                        </div>
                    </div>

                    {/* Price and Image URL Row */}
                    <div className="md:flex md-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className={`input input-bordered w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`} required />
                        </div>
                        <div className="form-control md:w-1/2 md:ml-6">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className={`input input-bordered w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`} required />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="md:flex md-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                placeholder="Description" name="description"
                                className={`textarea textarea-bordered textarea-lg w-full ${isDarkMode ? "bg-gray-700 text-white" : ""}`}></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <input type="submit" value="Add Tutorials" className="btn bg-orange-400 text-white mt-8 w-full text-lg" data-tooltip-id="my-tooltip"
                        data-tooltip-content="Your information will be saved in the database" />
                    
                    <p className="text-center font-semibold py-3">Do you want to go? <Link to={"/"} className="text-red-600"> Home</Link></p>
                </form>
            </div>

            <Footer />
            <Tooltip id="my-tooltip" />
        </>
    );
};

export default AddTutorials;
