

type buttonProps={
    readonly text:string,
}

function Button({text}:buttonProps) {
  return ( 
    <button className='bg-[#4CAF4F] text-white cursor-pointer rounded-md md:py-[0.9vw] md:px-[2.5vw] py-[2vw] px-[4.5vw] w-fit'>{text}</button>
  )
}

export default Button