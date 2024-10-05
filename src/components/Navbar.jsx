

export default function Navbar(){
    return (
        <>
        <div className=" flex justify-center pt-5 bg-white">
            <div className="flex gap-10 ">
                <div className="flex">
                    <img className="object-contain h-20" src={"https://static.wixstatic.com/media/34c23e_49799759db5945c392b42911e86bee12~mv2.png/v1/fill/w_241,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202024-08-10%20164327.png"}></img>
                </div>
                <div className="flex  items-center">
                    <ol className="flex gap-5 font-thin text-sm">
                        <li className="hover:text-blue-700 cursor-pointer">HOME</li>
                        <li className="hover:text-blue-700 cursor-pointer">ABOUT US</li>
                        <li className="hover:text-blue-700 cursor-pointer">SERVICES</li>
                        <li className="hover:text-blue-700 cursor-pointer">PRODUCTS</li>
                        <li className="hover:text-blue-700 cursor-pointer">CONTACT</li>
                    </ol>
                </div>
                <div>
                    <img className="object-contain h-24"   src="https://static.wixstatic.com/media/34c23e_93930e05bb4b411b9f8811b4e99709b3~mv2.jpg/v1/crop/x_0,y_238,w_800,h_328/fill/w_261,h_107,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/download%20(1)_edited.jpg"></img>
                </div>
            </div>
            <div className="bg-RED min-h-7">
                    
            </div>
            </div> 
        </>
    )
}