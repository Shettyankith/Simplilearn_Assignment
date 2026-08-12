import { MANAGE_COMMUNITY, OUR_CLIENTS } from '@/data/data'
import Image from 'next/image.js'
import PageHeading from '@/components/reusables/PageHeading'

function ClientAndServices() {
    return (
        <div className='bg-white text-black '>
            <PageHeading heading={OUR_CLIENTS.heading} subHeading={OUR_CLIENTS.sideHeading} />
            <div className='flex gap-[8.5vw] flex-wrap md:flex-nowrap  justify-center items-center py-[8vw] md:py-[2vw] mb-[2vw]'>
                {
                    OUR_CLIENTS.clientList.map((client, idx) => (
                        <Image src={client} alt="logo" className='w-[10vw] h-[10vw] sm:w-[5vw] sm:h-[5vw] md:w-[4vw] md:h-[4vw]' width={60} height={60} key={idx}></Image>
                    ))
                }
            </div>
            <PageHeading heading={MANAGE_COMMUNITY.heading} subHeading={MANAGE_COMMUNITY.sideHeading} />
            <div className='mt-[8vw] md:mt-[3vw] flex flex-col md:flex-row justify-center items-center gap-[8vw]'>
                {
                    MANAGE_COMMUNITY.servicesList.map((item, idx) => (
                        <div className='w-[80%] md:w-[23%] flex flex-col justify-center items-center gap-[3vw] md:gap-[1vw]
                        shadow-[0_-2px_10px_rgba(0,0,0,0.06)] rounded-xl py-[8vw] md:p-[2vw]
                        ' key={idx}>
                            <Image src={item.logo} alt="logo" width={75} height={75} key={idx}></Image>
                            <h3 className='text-center font-semibold w-[70%] text-[#4D4D4D] text-[5vw] md:text-[2vw]'>{item.name}</h3>
                            <p className='text-center text-[#717171] text-[4vw] md:text-[1.1vw] w-[90%]'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClientAndServices