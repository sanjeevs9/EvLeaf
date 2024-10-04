import ReactPlayer from "react-player";



export default function Home(){
    return (
        <>
        <div className="bg-RED ">
        <div className="pt-5 h-[0rem] relative">
    <ReactPlayer
        width="100%"
        height="80%"
        url="https://video.wixstatic.com/video/11062b_06ba851b8adf4d11816ea8b9bb9b5398/1080p/mp4/file.mp4"
        playing={true}
        muted={true}
        loop={true}
        style={{
            objectFit: "cover",
            backgroundColor: "white",
            position: "absolute", // Position it to cover the entire parent
            top: 0,
            left: 0,
        }}
    />
     <div className="flex text-white text-sm gap-5 p-5 bg-slate-500 ">
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-lg">OUR OFFERS</div>
                        <div className="text-center">
                        We offer FMTU Powered Diesel Generators, Dual Fuel Kits, (RECD) Retrofit Emission Control Device Conversion of existing generators to meet emission solutions norms to suit varied ratings and developed industry-leading product.
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                    <div className="text-lg">
                        ELECTRIC VEHICLES
                        </div>
                        <div className="text-center">
                        We are dealing with multiple sectors of EV such as E-Buses, E-Bikes, E-Cars , E-Carts and we provide best in segment accesories along with battery packs & Chargers.
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                    <div className="text-lg">SOLAR SOLUTIONS</div>
                        <div className="text-center ">
                        We have service team engineers which take care of multiple site breakdown while at work or off work, so you are fully covered in our Premium AMC.
                        </div>
                    </div>
                </div>
</div>
            {/* <div className="absolute  top-0 left-0  flex items-center justify-center w-full h-full  ">
                <div className="p-5 h-1/2 w-1/2   gap-10 flex flex-col text-white ">
                    <div className="text-5xl">
                    We specialize in Diesel Generators Dual Fuel Conversion, RECD,
                    Solar Plants,Li-Batteries & Electric Vehicles
                    </div>
                    <div className="text-center">
                    We deal into wide range of Diesel Generators from 62.5KVA to 3000KVA with Conversion to Gas, also provide Retro Fit Emission Control Device (RECD) for meeting the CPCB 4+ Emission Norms. Our EV Section deals with Lithium-ion  Cells Assembling with ESS Solution.
                    </div>
                </div>
                </div> */}
               
            </div>


        </>
    )
}