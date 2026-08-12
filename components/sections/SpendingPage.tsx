import Image from 'next/image'
import spendingPage from "@/data/spendingPage.json"
import { IMAGES } from '@/data/images'
import Button from '../reusables/Button'
import { HELPING_BUISNESS } from '@/data/data'

function SpendingPage() {
  return (
    <>
    <div className='bg-white text-black flex justify-center items-center gap-[2vw] my-[4vw] px-[5vw] '>
        <div className='w-[40%]'>
            <Image src={IMAGES.backgroundImage2} alt={"Illustration image"} width={500} height={500}></Image>
        </div>
        <div className='flex flex-col gap-[1vw] justify-start w-[40%]'>
            <h1 className='text-[#4D4D4D] text-[2.4vw] font-bold'>{spendingPage.heading}</h1>
            <p className='text-[#717171]'>{spendingPage.description}</p>
            <Button text={spendingPage.button.label}></Button>
            </div>
    </div>
    <div className='bg-[#F5F7FA] flex justify-between items-center py-[5vw] px-[10vw]'>
        <div className=''>
            <h1 className='text-[2.8vw] text-[#4D4D4D] font-bold'>{HELPING_BUISNESS.heading}</h1>
            <h1 className='text-[#4CAF4F] font-bold text-[2.8vw]'>{HELPING_BUISNESS.spanText  }</h1>
            <p className='text-[#18191F] my-[0.7vw]'>{HELPING_BUISNESS.sideHeading}</p>
        </div>
        <div className='w-[40%] grid grid-cols-2 gap-x-[5vw] gap-y-[2vw]'>
            {
                HELPING_BUISNESS.counts.map((item,idx)=>(
                    <div
                    key={idx}
                    className="flex items-center gap-[1vw]"
                  >
                      <div className="w-[4vw] shrink-0 flex justify-center">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={60}
                            height={60}
                          />
                      </div>
                  
                      <div className="flex flex-col">
                          <h1 className="text-[#4D4D4D] text-[2vw] font-bold">
                              {item.count}
                          </h1>
                  
                          <p className="text-[#717171]">
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