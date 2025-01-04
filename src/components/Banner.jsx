
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";

const Banner = () => {
    return (
        <>
            <div className="carousel w-full h-[300px] md:h-[600px] mt-16">
  <div id="item1" className="carousel-item w-full">
    <img
      src={img5}
      className="w-full rounded-xl" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src={img4}
      className="w-full rounded-xl" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src={img6}
      className="w-full rounded-xl" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src={img2}
      className="w-full rounded-xl" />
  </div>

</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
  
</div>
        </>
    );
};

export default Banner;