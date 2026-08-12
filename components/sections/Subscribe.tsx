import { IMAGES } from "@/data/images"
import data from "@/data/subscribePage.json"
import Image from "next/image"

function Subscribe() {
  return (
    <div className='bg-[#F5F7FA] flex flex-col items-center justify-center md:py-[3vw] py-[7vw] md:px-[2vw] px-[5vw] gap-[5vw] md:gap-[2vw]'>
        <h1 className="text-[#263238] text-[10vw] sm:text-[7vw] md:text-[4vw] font-bold w-full md:w-[50%] text-center">{data.heading}</h1>
        <button className='bg-[#4CAF4F] flex gap-[10px] text-white cursor-pointer rounded-md md:py-[0.9vw] py-[4vw] sm:py-[2.5vw] md:px-[2.5vw] px-[3vw] sm:px-[2vw] w-fit text-[4vw] sm:text-[2.5vw] md:text-[1vw]'>{data.button.label}
            <Image src={IMAGES.rightArrow} alt="Right Arrow" height={25} width={25}></Image>
        </button>
    </div>
  )
}

export default Subscribe;