import Image from 'next/image'
import spendingPage from "@/data/spendingPage.json"
import { IMAGES } from '@/data/images'
import Button from '../reusables/Button'
import { HELPING_BUISNESS } from '@/data/data'

function SpendingPage() {
  return (
    <>
    <div className='bg-white text-black flex md:flex-row flex-col justify-center items-center gap-[2vw] my-[4vw] px-[5vw] '>
        <div className='md:w-[40%] w-[90%]'>
            <Image src={IMAGES.backgroundImage2} alt={"Illustration image"} width={500} height={500}></Image>
        </div>
        <div className='flex flex-col gap-[5vw] md:gap-[1vw] justify-start w-[90%] md:w-[40%]'>
            <h1 className='text-[#4D4D4D] text-[5.5vw] md:text-[2.4vw] font-bold'>{spendingPage.heading}</h1>
            <p className='text-[#717171] text-[4vw] md:text-[1vw]'>{spendingPage.description}</p>
            <Button text={spendingPage.button.label}></Button>
            </div>
    </div>
    <div className='bg-[#F5F7FA] flex flex-col md:flex-row justify-between gap-[14vw] sm:gap-[5vw] md:gap-0 items-center py-[15vw] px-[15vw] sm:py-[6vw] sm:px-[12vw] md:py-[5vw] md:px-[10vw]'>
        <div className='flex flex-col gap-[2vw] sm:gap-0'>
            <h1 className='md:text-[2.8vw] text-[6vw] text-[#4D4D4D] font-bold'>{HELPING_BUISNESS.heading}</h1>
            <h1 className='text-[#4CAF4F] font-bold text-[6vw] md:text-[2.8vw]'>{HELPING_BUISNESS.spanText  }</h1>
            <p className='text-[#18191F] my-[0.7vw]'>{HELPING_BUISNESS.sideHeading}</p>
        </div>
        <div className='w-full md:w-[40%] grid grid-cols-2 gap-x-[5vw] gap-y-[2vw]'>
            {
                HELPING_BUISNESS.counts.map((item,idx)=>(
                    <div
                    key={idx}
                    className="flex items-center gap-[1vw]"
                  >
                      <div className="w-[10vw] sm:w-[8vw] md:w-[4vw] shrink-0 flex justify-center">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            className=''
                            width={60}
                            height={60}
                          />
                      </div>
                  
                      <div className="flex flex-col">
                          <h1 className="text-[#4D4D4D] text-[5vw] sm:text-[4vw] md:text-[2vw] font-bold">
                              {item.count}
                          </h1>
                  
                          <p className="text-[#717171] text-[3.5vw] sm:text-[2.9vw] md:text-[1vw]">
                              {item.name}
                          </p>
                      </div>
                  </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default SpendingPage