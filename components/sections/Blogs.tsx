import { BLOGS } from "@/data/data"
import PageHeading from "../reusables/PageHeading"
import Image from "next/image"
import { IMAGES } from "@/data/images"


function Blogs() {
    return (
        <div className="px-[3vw]">
            <PageHeading heading={BLOGS.heading} subHeading={BLOGS.sideHeading} />
            <div className="flex flex-col md:flex-row justify-center items-center gap-[30vw] md:gap-[2vw] mt-[10vw] mb-[25vw] sm:mb-[35vw] md:mt-[2vw] md:mb-[4vw]">
                {
                    BLOGS.blogList.map((blog, idx) => (
                        <div key={idx} className="relative md:w-[25%] w-[94%] h-50 md:h-fit" >
                            <div
                                className="w-full h-50 sm:h-80 md:h-[20vw] bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url(${blog.logo})`,
                                }}
                            />

                            <div
                                className=" relative w-[85%] mx-auto  -mt-[20vw] sm:-mt-[18vw] md:-mt-[6vw] bg-[#F5F7FA] rounded-lg px-[3vw] md:px-[1vw]
            py-[5vw] md:py-[1.5vw]  shadow-[0_8px_20px_rgba(0,0,0,0.10)] z-10  h-fit md:min-h-[12vw]  flex  flex-col  justify-between  items-center gap-[6vw] sm:gap-[3vw] md:gap-0"
                            >
                                <h3 className="text-[#717171] font-semibold text-[4vw] sm:text-[3vw] md:text-[1.2vw] text-center">
                                    {blog.description}
                                </h3>

                                <button
                                    className=" text-[#4CAF4F]  cursor-pointer text-[4.5vw] sm:text-[3vw] md:text-[1.3vw]  font-bold flex justify-center items-center gap-2"
                                >
                                    {blog.button.text}

                                    <Image
                                        src={IMAGES.greenArrow}
                                        alt="Right Arrow"
                                        height={25}
                                        width={25}
                                    />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blogs