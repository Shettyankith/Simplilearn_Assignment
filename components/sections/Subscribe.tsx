import { IMAGES } from "@/data/images"
import data from "@/data/subscribePage.json"
import Image from "next/image"

function Subscribe() {
  return (
    <div className='bg-[#F5F7FA] flex flex-col items-center justify-center py-[3vw] px-[2vw] gap-[2vw]'>
        <h1 className="text-[#263238] text-[4vw] font-bold w-[50%] text-center">{data.heading}</h1>
        <button className='bg-[#4CAF4F] flex gap-[10px] text-white cursor-pointer rounded-md py-[0.9vw] px-[2.5vw] w-fit'>{data.button.label}
            <Image src={IMAGES.rightArrow} alt="Right Arrow" height={25} width={25}></Image>
        </button>
    </div>
  )
}

export default Subscribe;