
import { useContext } from 'react';
import teacher from '../assets/teacher.png'
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
const QuestionAns = () => {
    const {isDarkMode} = useContext(AuthContext);
    return (
        <>
           <div className= {`hero my-12 min-h-[300px] md:min-h-[600px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={teacher}
          className=" rounded-lg shadow-2xl"
          alt="Online Learning"
        />
        <div className={`${isDarkMode ? 'text-white ' : 'text-black'}`}>
          <h1 className="text-5xl font-bold">Students, Increase Your Knowledge</h1>
          <p className="py-6">
          Students, increase your knowledge and unlock your true potential! Education is the key to a brighter future, and with the right resources and guidance, learning becomes an exciting journey. Explore diverse subjects, gain new skills, and deepen your understanding with expert tutors who are ready to support you every step of the way. Whether you are preparing for exams, pursuing a passion, or aiming to excel in your career, expanding your knowledge opens countless doors. Start today, embrace curiosity, and watch your confidence soar as you achieve your goals and make your dreams a reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/question" className="btn bg-orange-400 text-white">Get Started</Link>
            <Link to='/success' className="btn bg-orange-400 text-white">Learn More</Link>
          </div>
        </div>
      </div>
    </div> 
        </>
    );
};

export default QuestionAns;