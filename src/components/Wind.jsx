
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Wind() {
  const [calcWidth, setCalcWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWindowDimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const viewportHeight = newWindowDimensions.height;
      const aspectRatio = 16 / 9;

      if (newWindowDimensions.width < viewportHeight * aspectRatio) {
        setCalcWidth(viewportHeight * aspectRatio);
      } else {
        setCalcWidth(newWindowDimensions.width);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="h-[30rem] ">
      <div className=" relative h-full  overflow-hidden" >
        <div className="">
          <ReactPlayer
            height={(calcWidth / 16) * 9}
            width={calcWidth}
url="https://video.wixstatic.com/video/11062b_4daa8bdb13034c7d89bf5a394a27b9eb/1080p/mp4/file.mp4"
            playing
            muted
            loop
            style={{
              position: "absolute",
              top: "20%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              zIndex: -20,
              opacity: 1,
            }}
          
          />
        </div>
        <div className=" h-full  relative flex flex-col items-center  justify-center  ">
            <div className="grid grid-cols-3 w-8/12">
   <div className="col-span-2 ">
      <div className="text-RED text-3xl">
      DUAL FUEL SOLUTIONS FOR GENSET</div>
      <div className="font-semibold pt-5">
      Gensets from the range of 62.5 kVA to 3000 kVa using 70% Natural gas can be converted. We provide Indian Gas gensets from 25 kVA to 125 kVA. 
      </div>
      <div className="font-semibold pt-5">
      After conversion, the Diesel Genset is converted to a Dual Fuel natural gas genset thereby reducing operating costs and contributing to emission reduction. Diesel emissions are extremely harmful to the planet. Dual Fueling helps significantly reduce carbon emissions from generators.
      </div>
   </div>
   <div className="col-span-1">
   <div className="flex flex-col gap-5">
    <button className="bg-RED p-3 text-white" >BOOK YOUR DUAL KIT TODAY</button>
    <img src="https://static.wixstatic.com/media/34c23e_eb301b5745ca4ba4bc4fe482880cb2aa~mv2.jpg/v1/fill/w_312,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/78320592.jpg">
    </img>
   </div>
   </div>

            </div>
        </div>
       

      </div>
     
      <div>
        
      </div>
     
    </main>
  );
}