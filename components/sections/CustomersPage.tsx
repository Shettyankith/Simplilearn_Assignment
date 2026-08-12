import { IMAGES } from "@/data/images"
import Image from "next/image"
import data from "@/data/designYourSite.json"
import Button from "../reusables/Button"
import { CUSTOMERS } from "@/data/data"

function CustomersPage() {
    return (
        <>
            <div className='bg-white text-black flex flex-col md:flex-row justify-center items-center gap-[10vw] md:gap-[2vw] my-[4vw] px-[5vw]  '>
                <div className='md:w-[40%] w-full'>
                    <Image src={IMAGES.backgroundImage3} alt={"Illustration image"} width={500} height={500}></Image>
                </div>
                <div className='flex flex-col gap-[5vw] md:gap-[1vw] justify-start w-full md:w-[40%]'>
                    <h1 className='text-[#4D4D4D] md:text-[2.4vw] text-[5vw] font-bold'>{data.heading}</h1>
                    <p className='text-[#717171] text-[4vw] md:text-[1vw]'>{data.sideHeading}</p>
                    <Button text={data.button.label}></Button>
                </div>
            </div>
            <div className='bg-[#F5F7FA] text-black flex flex-col md:flex-row justify-center items-center gap-[6vw] md:gap-[2vw]  my-[4vw] px-[5vw] py-[1vw]'>
                <div className='w-full md:w-[30%] flex justify-center items-center '>
                    <Image src={IMAGES.teslaImage} alt={"Illustration image"} width={400} height={400}></Image>
                </div>
                <div className='flex flex-col gap-[4vw] md:gap-[0.8vw] justify-start w-full md:w-[60%] mb-[9vw] md:mb-0'>
                    <p className='text-[#717171] text-[4vw] md:text-[1vw]'>{CUSTOMERS.description}</p>
                    <h4 className='text-[#4CAF4F] text-[3.9vw] md:text-[1.5vw] font-medium'>{CUSTOMERS.personName}</h4>
                    <p className='text-[#89939E]'>{CUSTOMERS.designation}</p>
                    <div className="flex justify-start flex-col flex-wrap md:flex-nowrap  md:flex-row items-center gap-[2vw]">
                        <div className="flex justify-start items-end gap-[6vw] sm:gap-[4vw] md:gap-[2.5vw] my-[1vw]">
                            {
                                CUSTOMERS.customerLogos.map((logo,idx)=>(
                                    <Image src={logo} key={idx} alt="Logo" height={50} width={50}
                                    className="w-[10vw] h-[10vw] sm:w-[6vw] sm:h-[6vw] md:w-[3vw] md:h-[3vw] "
                                    ></Image>
                                ))
                            }
                        </div>
                        <button
                        className="text-[#4CAF4F] cursor-pointer text-[4vw] sm:text-[2.5vw] md:text-[1.3vw] font-bold flex justify-center items-center gap-2"
                        >{CUSTOMERS.button.text} <Image src={IMAGES.greenArrow} alt="Right Arrow" height={25} width={25}></Image></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomersPage