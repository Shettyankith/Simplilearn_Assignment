import landingPageData from "@/data/landingPage.json"
import Button from "../reusables/Button"
import Image from "next/image"
import { IMAGES } from "@/data/images"

function Hero() {
  return (
    <div className="w-[90vw] h-[90vh] flex justify-center items-center">
      <div className="mr-4 w-[50%]">
        <h4 className="text-[4.4vw] text-[#4D4D4D] font-semibold">{landingPageData.lessonsText} </h4>
        <h4 className="text-[#4CAF4F] text-[4.4vw] font-semibold p-0">{landingPageData.spanText} </h4>
        <p className="text-[#717171] text-[1.1vw] mb-10">{landingPageData.sideHeading}</p>
        <Button text={landingPageData.button.label}></Button>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <Image src={IMAGES.heroImage} alt="Illustration" width={500} height={500}
          className=""></Image>
      </div>
    </div>
  )
}

export default Hero