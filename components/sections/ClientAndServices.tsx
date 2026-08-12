import { MANAGE_COMMUNITY, OUR_CLIENTS } from '@/data/data'
import Image from 'next/image.js'
import PageHeading from '@/components/reusables/PageHeading'

function ClientAndServices() {
    return (
        <div className='bg-white text-black w-[100vw]'>
            <PageHeading heading={OUR_CLIENTS.heading} subHeading={OUR_CLIENTS.sideHeading} />
            <div className='flex gap-[8.5vw] w-screen justify-center items-center py-[2vw] mb-[2vw]'>
                {
                    OUR_CLIENTS.clientList.map((client, idx) => (
                        <Image src={client} alt="logo" width={60} height={60} key={idx}></Image>
                    ))
                }
            </div>
            <PageHeading heading={MANAGE_COMMUNITY.heading} subHeading={MANAGE_COMMUNITY.sideHeading} />
            <div className='mt-[3vw] flex justify-center items-center gap-[8vw]'>
                {
                    MANAGE_COMMUNITY.servicesList.map((item, idx) => (
                        <div className='w-[23%] flex flex-col justify-center items-center gap-[1vw]
                        shadow-[0_-2px_10px_rgba(0,0,0,0.06)] rounded-xl p-[2vw]
                        ' key={idx}>
                            <Image src={item.logo} alt="logo" width={75} height={75} key={idx}></Image>
                            <h3 className='text-center font-semibold w-[70%] text-[#4D4D4D] text-[2vw]'>{item.name}</h3>
                            <p className='text-center text-[#717171] text-[1.1vw] w-[90%]'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClientAndServices