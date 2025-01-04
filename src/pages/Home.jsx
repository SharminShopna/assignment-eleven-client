import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
 import StatsSection from "../components/StatsSection";
import Categories from "../components/Categories";
import QuestionAns from "../components/QuestionAns";
import OverView from "../components/OverView";
import FeaturesSection from "../components/FeaturesSection";



const Home = () => {
    return (
        <>
        <Helmet>
        <title>Home | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-11/12 mx-auto">
        <OverView></OverView>
         <Banner></Banner>
          <StatsSection></StatsSection> 
         <Categories></Categories>
         <QuestionAns></QuestionAns>
         <FeaturesSection></FeaturesSection>
      </div>
        </>
    );
};

export default Home;