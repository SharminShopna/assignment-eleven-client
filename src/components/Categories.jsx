 import  { useEffect, useState } from 'react';
 import axios from 'axios';
import { HiChevronRight } from 'react-icons/hi2';
  import { NavLink } from 'react-router-dom';
  


 const Categories = () => {
    const [categories, setCategories] = useState([]);
    

   useEffect(() => {
     axios.get('https://assignment-eleven-server-nu.vercel.app/categories')
     .then((response) => {
        setCategories(response.data);
      // console.log(response.data)
     });
   }, []);
   

  

   return (
    <>
    <div>
      <h2 className='text-3xl text-center my-6 font-bold'>All Category</h2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12'>
       {
        categories.map((category,idx)=>(<div key={idx} className='flex text-center justify-between items-center border border-gray-300 p-6'>
          <div className='flex text-center'>
          <img className='h-12 w-16' src={category.icon} alt={category.language} />
          <h2 className='text-2xl font-bold'>{category.language}</h2>
          </div>
          <div >
          <NavLink className='ml-auto' to={`findTutors/${category.language}`}><HiChevronRight size={24}/></NavLink>
          </div>
        </div>))
       }
       </div>
      </>
   );
 };

 export default Categories;




