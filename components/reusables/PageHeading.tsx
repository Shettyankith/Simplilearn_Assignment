

type PageHeadingProps={
    readonly heading:string,
    readonly subHeading:string,
}

function PageHeading({heading,subHeading}:PageHeadingProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-[0.6vw]">
    <h1 className="font-semibold text-[#4D4D4D] text-[2.4vw] md:w-[38%] text-center">{heading}</h1>
    <p className="text-[#717171] text-[1.1vw] text-center font-inter w-[45%]">{subHeading}</p>
    </div>
  )
}

export default PageHeading;