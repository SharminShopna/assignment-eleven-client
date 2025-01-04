import Marquee from "react-fast-marquee";



const OverView = () => {
    return (
        <>
           <div>
           <div className='flex gap-2 items-center mt-28'>
            <p className='bg-sky-600 text-lg font-bold text-white  py-3 text-center rounded-lg'> Platform OverView</p>
            <Marquee pauseOnHover={true} speed={52}className='space-x-8'>
                <div className='flex gap-16 text-center'>
                  <p className="font-bold text-center text-3xl text-sky-600">##Category:</p>   
                   
                   <p className="text-center text-lg font-semibold text-purple-400">English</p> 
                   <p className="text-center text-lg font-semibold text-purple-400">Spanish</p>
                   <p className="text-center text-lg font-semibold text-purple-400">French</p>
                   <p className="text-center text-lg font-semibold text-purple-400">German</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Italian</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Chinese</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Arabic</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Japanese</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Portuguese</p>
                   <p className="font-bold text-center text-3xl text-sky-600">Achievements:</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Tutors-32,00+</p>
                   <p className="text-center text-lg font-semibold text-purple-400">TutorReviews-2000+</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Tutors-32,00+</p>
                   <p className="text-center text-lg font-semibold text-purple-400">Subject-120+</p>
                   <p className="text-center text-lg font-semibold text-purple-400">TutorNationalities-180+</p>
                   <p className="text-center text-lg font-semibold text-purple-400">on the App Store</p>
                   
                    
                </div>
            
            </Marquee>
         </div>  
            
            </div> 
        </>
    );
};

export default OverView;