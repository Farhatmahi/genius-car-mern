import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

import BannerItems from "./BannerItems";

const bannerData = [
  { image: img1, id: 1, prev: 4, next: 2 },
  { image: img2, id: 2, prev: 1, next: 3 },
  { image: img3, id: 3, prev: 2, next: 4 },
  { image: img4, id: 4, prev: 3, next: 1 },
];

const Banner = () => {
  return (
    <div className="carousel w-full mb-12">
      {/* <BannerItems sliderImg={img1} /> */}
      {bannerData.map((slide) => (
        <BannerItems key={slide.id} slide={slide} />
      ))}
      {/* <div id="slide1" className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={img1} alt="" className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br></br>Price for<br></br>Car Services
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-white text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="btn btn-error mr-5">Discover More</button>
          <button className="btn btn-outline btn-error">Latest Project</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
