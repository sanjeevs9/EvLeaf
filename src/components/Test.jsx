

import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Test() {
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
    <main className="h-screen">
      <div className="grid-cols-12 relative h-screen overflow-hidden" style={{ height: 'calc(100vh - 20%)' }}>
        <Navbar/>
        <div className="pt-5 bg-RED">
          <ReactPlayer
            height={(calcWidth / 16) * 9}
            width={calcWidth}
            url="https://video.wixstatic.com/video/11062b_06ba851b8adf4d11816ea8b9bb9b5398/1080p/mp4/file.mp4"
            playing
            muted
            loop
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              objectFit: "cover",
              zIndex: -20,
              opacity: 1,
            }}
          
          />
        </div>

        <div className=" h-full w-full  relative flex flex-col items-center  justify-center ">
            <div className="w-3/5  h-3/5 justify-between flex flex-col items-center  ">

              <p className="text-4xl 2xl:5xl  uppercase text-white text-center tracking-wider leading-normal font-semibold">
              We specialize in Diesel Generators Dual Fuel Conversion, RECD,
              Solar Plants,Li-Batteries & Electric Vehicles
              </p>
              <p className="pb-7 2xl:pb-0 text-lg xl:text-xl text-white text-center font-bold">We deal into wide range of Diesel Generators from 62.5KVA to 3000KVA with Conversion to Gas, also provide Retro Fit Emission Control Device (RECD) for meeting the CPCB 4+ Emission Norms. Our EV Section deals with Lithium-ion  Cells Assembling with ESS Solution.</p>

          </div>
        </div>

      </div>
      <div>
        <div className="w-full flex justify-center items-center bg-RED">
      <div className="flex text-white text-sm gap-5  bg-RED max-w-[60rem] ">
                    <div className="flex flex-col items-center gap-2 p-5">
                        <div className="text-lg">OUR OFFERS</div>
                        <div className="text-center text-xs">
                        We offer FMTU Powered Diesel Generators, Dual Fuel Kits, (RECD) Retrofit Emission Control Device Conversion of existing generators to meet emission solutions norms to suit varied ratings and developed industry-leading product.
                        </div>
                    </div>
                    <div className="h-[8rem] bg-white w-[0.1rem] ">

                    </div>
                    <div className="flex flex-col items-center gap-2 p-5">
                    <div className="text-lg">
                        ELECTRIC VEHICLES
                        </div>
                        <div className="text-center">
                        We are dealing with multiple sectors of EV such as E-Buses, E-Bikes, E-Cars , E-Carts and we provide best in segment accesories along with battery packs & Chargers.
                        </div>
                    </div>
                    <div className="h-[8rem] bg-white w-[0.1rem] ">

</div>
                    <div className="flex flex-col items-center gap-2 p-5">
                    <div className="text-lg">SOLAR SOLUTIONS</div>
                        <div className="text-center ">
                        We have service team engineers which take care of multiple site breakdown while at work or off work, so you are fully covered in our Premium AMC.
                        </div>
                    </div>
                </div>
                </div>
      </div>
    </main>
  );
}