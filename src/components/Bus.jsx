import ReactPlayer from "react-player";

export default function Bus() {
    return (
        <>
        <div className="relative">
            <div className=""
                style={{
                    backgroundImage: "url('https://static.wixstatic.com/media/11062b_fbe7eaa8c4594aa8a8f0bd5dbe505019~mv2.jpg/v1/fill/w_1920,h_689,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_fbe7eaa8c4594aa8a8f0bd5dbe505019~mv2.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px', // You can adjust the height
                    width: '100%', // Ensures it spans the full width
                }} >
            </div>
            <div className="absolute top-0 left-0 flex items-center justify-center  h-full w-full text-white">
                    <div className="">
                        <div>
                        OFFERING YOU THE BEST SOLUTION FOR YOUR APPLICATION
                        </div>
                        <div>
                        We also are dealing with new age of EV's : e-Buses, e-Cars powertrain along with Lithium batteries are packed with unique features viz. life extension, energy density, safety, compact size, cost reduction, and integrated with high precision of advanced Battery Management System (BMS) with adapative cooling technology and power control system for hilly areas and steep drive, airsusp with adaptive dampers for smooth ride and clean green environment and 0% pollution.
                        </div>
                        <div className="flex">
                            <div>
                                <div>ALWAYS OPEN
                                FOR YOU</div>
                                <div>
                                EV Industry have many complains  & for that our service support team is working 24/7 for our premium clients to give them best in industry support for their developed application. 
                                </div>
                            </div>
                            <div>
                                <div>UNBEATABLE
                                PRICES</div>
                                <div>
                                We have made the pricing customized for Electric Vehicle according to Seating Capacity and after having R&D , Survey and Pre-inspection to get unbeatable Price Package to end customer.
                                </div>


                            </div>
                            <div>
                                <div>PROFESSIONALLY QUALIFIED</div>
                                <div>
                                We have hired industry leading support team and manufacturing engineers trained from Talesun & Lithium Valley China, also we are master in making and designing EV & Lithium-ion Battery packs.
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </>
    );
}
