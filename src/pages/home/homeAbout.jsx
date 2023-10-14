import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ViewMoreButton from "./components/viewMoreButton";

import resim2 from "../../../public/images/aboutyan1.png";
import resim3 from "../../../public/images/aboutOrta.png";
import resim4 from "../../../public/images/s2.png";

AOS.init();

function HomeAbout() {
  return (
    <div className="HomeAbout">
      <div
        style={{
          backgroundImage: "url(/images/aboutBack.png)",
          position: "relative",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "66px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 180,
          }}
        >
          <div>
            <figure style={{ maxWidth: "100%" }}>
              <img
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                src={resim2}
                alt=""
              />
            </figure>
          </div>
          <div>
            <figure>
              <img
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                src={resim3}
                alt=""
              />
            </figure>
          </div>
          <div>
            <figure>
              <img
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1000"
                src={resim4}
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="w-[900px] mr-auto ml-auto">
        <div className="HomeAboutInText p-5 bg-gradient-to-l from-slate-300 to-slate-100 text-secondary border border-slate-300 grid grid-col-2 justify-center  gap-4 rounded-lg shadow-md">
          <h1 className="font-dancing text-xl p-1">ABOUT </h1>
          <p>
            We Are Feane There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which don't look even
            slightly believable. If you are going to use a passage of Lorem
            Ipsum, you need to be sure there isn't anything embarrassing hidden
            in the middle of text.
          </p>
          <div className="flex justify-center pt-3">
            <ViewMoreButton linkPath={"/about"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
