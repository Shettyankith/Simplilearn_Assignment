import { BLOGS } from "@/data/data"
import PageHeading from "../reusables/PageHeading"
import Image from "next/image"
import { IMAGES } from "@/data/images"


function Blogs() {
    return (
        <div className="px-[3vw]">
            <PageHeading heading={BLOGS.heading} subHeading={BLOGS.sideHeading} />
            <div className="flex justify-center items-center gap-[2vw] mt-[2vw] mb-[4vw]">
                {
                    BLOGS.blogList.map((blog, idx) => (
                        <div key={idx} className="relative w-[25%]">
                            <div
                                className="w-full h-[20vw] bg-cover bg-center rounded-lg"
                                style={{
                                    backgroundImage: `url(${blog.logo})`,
                                }}
                            />

                            <div
                                className=" relative w-[85%] mx-auto -mt-[6vw] bg-[#F5F7FA] rounded-lg  px-[1vw]
            py-[1.5vw]  shadow-[0_8px_20px_rgba(0,0,0,0.10)] z-10  min-h-[12vw]  flex  flex-col  justify-between  items-center "
                            >
                                <h3 className="text-[#717171] font-semibold text-[1.2vw] text-center">
                                    {blog.description}
                                </h3>

                                <button
                                    className=" text-[#4CAF4F]  cursor-pointer text-[1.3vw]  font-bold flex justify-center items-center gap-2"
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