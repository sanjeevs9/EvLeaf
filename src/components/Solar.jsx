
import ReactPlayer from "react-player/lazy";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Solar() {
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
    <main className="">
      <div className="grid-cols-12 relative h-[30rem] overflow-hidden">
        <div className="">
          <ReactPlayer
            height={(calcWidth / 16) * 9}
            width={calcWidth}
           url="https://video.wixstatic.com/video/11062b_82ad3d7f62ba4f30a1649cbee8475430/1080p/mp4/file.mp4"
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

        <div className=" h-full w-full  relative flex flex-col items-center  justify-center   ">
            <div className="h-full flex flex-col text-black text-center text-2xl font-semibold font-serif gap-10 justify-evenly items-center">
<div className="w-8/12  ">A GLOBAL DEVELOPER AND OPERATOR OF SUSTAINABLE ENERGY SOLUTIONS</div>
<div className="text-center">
PROCESS WITH HIGH QUALITY STANDARDS</div>
<div className="flex gap-10 justify-center items-center">
<div className="h-[12rem] w-[12rem] rounded-full bg-[url('https://static.wixstatic.com/media/11062b_93d11cfcc0274fbf9508be974463425e~mv2.jpeg/v1/crop/x_471,y_0,w_2843,h_2832/fill/w_181,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Solar%20Panels%20Technicians.jpeg')]"/>
<div className="h-[12rem] w-[12rem] rounded-full bg-[url('https://static.wixstatic.com/media/be0c8732c52445f79601e0965fa55b0e.jpg/v1/fill/w_181,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Engineering%20Sketch.jpg')]"/>
<div className="h-[12rem] w-[12rem] rounded-full bg-[url('https://static.wixstatic.com/media/11062b_fc3edd11b8314c5cb5adcbebc5d0144b~mv2.jpg/v1/crop/x_558,y_0,w_3352,h_3333/fill/w_181,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Installing%20Solar%20Panel.jpg')]"/>
<div className="h-[12rem] w-[12rem] rounded-full bg-[url('https://static.wixstatic.com/media/61e7a298b8c748d38d302c550eee9446.jpg/v1/fill/w_181,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Solar%20Panel%20Installation.jpg')]"/>
<div className="h-[12rem] w-[12rem] rounded-full bg-[url('https://static.wixstatic.com/media/11062b_183fa0d50d43420092ae651d05fbd50b~mv2.jpg/v1/fill/w_181,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Solar%20Panel%20Roof.jpg')]"/>

</div>
             
             

          </div>
        </div>

      </div>
      <div>
        <div className="w-full flex justify-center items-center bg-RED">
      <div className="flex text-white text-sm gap-5  bg-RED max-w-[60rem] ">
                    <div className="flex flex-col items-center gap-2 p-5">
                        <div className="text-lg">CALL US</div>
                        <div className="text-center text-xs">
                        Tel: +91-9899707831 | Landline: 0120-2650019
                        </div>
                    </div>
                    <div className="h-[8rem] bg-white w-[0.1rem] ">

                    </div>
                    <div className="flex flex-col items-center gap-2 p-5">
                    <div className="text-lg">
                    EMAIL US


                        </div>
                        <div className="text-center">
                        <div className="flex flex-col">
                            <div>cmd@evleaf.in</div>
                            <div>
                            evleafopc@gmail.com</div>
                        </div>
                        </div>
                    </div>
                    <div className="h-[8rem] bg-white w-[0.1rem] ">

</div>
                    <div className="flex flex-col items-center gap-2 p-5">
                    <div className="text-lg">OPENING HOURS</div>
                        <div className="text-center ">
                        Mon - Fri: 9am - 10pm
                        </div>
                    </div>
                </div>
                </div>
      </div>
    </main>
  );
}