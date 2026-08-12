import { IMAGES } from "@/data/images"
import Image from "next/image"
import data from "@/data/designYourSite.json"
import Button from "../reusables/Button"
import { CUSTOMERS } from "@/data/data"

function CustomersPage() {
    return (
        <>
            <div className='bg-white text-black flex justify-center items-center gap-[2vw] my-[4vw] px-[5vw]  '>
                <div className='w-[40%]'>
                    <Image src={IMAGES.backgroundImage3} alt={"Illustration image"} width={500} height={500}></Image>
                </div>
                <div className='flex flex-col gap-[1vw] justify-start w-[40%]'>
                    <h1 className='text-[#4D4D4D] text-[2.4vw] font-bold'>{data.heading}</h1>
                    <p className='text-[#717171]'>{data.sideHeading}</p>
                    <Button text={data.button.label}></Button>
                </div>
            </div>
            <div className='bg-[#F5F7FA] text-black flex justify-center items-center gap-[2vw]  my-[4vw] px-[5vw] py-[1vw]'>
                <div className='w-[30%] flex justify-center items-center '>
                    <Image src={IMAGES.teslaImage} alt={"Illustration image"} width={400} height={400}></Image>
                </div>
                <div className='flex flex-col gap-[0.8vw] justify-start w-[60%]'>
                    <p className='text-[#717171] text-[1vw]'>{CUSTOMERS.description}</p>
                    <h4 className='text-[#4CAF4F] text-[1.5vw] font-medium'>{CUSTOMERS.personName}</h4>
                    <p className='text-[#89939E]'>{CUSTOMERS.designation}</p>
                    <div className="flex justify-start items-center gap-[2vw]">
                        <div className="flex justify-start items-end gap-[2.5vw] my-[1vw]">
                            {
                                CUSTOMERS.customerLogos.map((logo,idx)=>(
                                    <Image src={logo} key={idx} alt="Logo" height={50} width={50}></Image>
                                ))
                            }
                        </div>
                        <button
                        className="text-[#4CAF4F] cursor-pointer text-[1.3vw] font-bold flex justify-center items-center gap-2"
                        >{CUSTOMERS.button.text} <Image src={IMAGES.greenArrow} alt="Right Arrow" height={25} width={25}></Image></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersPage