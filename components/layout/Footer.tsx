import { FOOTER } from '@/data/data'
import { IMAGES } from '@/data/images'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className='bg-[#263238]  text-white md:px-[3vw] px-[6vw] md:py-[5vw] py-[6vw] flex flex-col md:flex-row justify-around items-center md:items-start'>
            <div className='flex flex-col justify-center md:justify-start items-around gap-5 md:gap-10 w-full md:w-fit'>
                <h1 className=' text-white font-bold flex justify-center md:justify-start gap-3 text-[9vw] md:text-[2.5vw] items-center'><Image src={FOOTER.logo} alt="Logo" width={50} height={50}></Image>{FOOTER.companyName}</h1>
                <div>
                    <p className='text-gray-300 my-3 text-center md:text-left text-[4vw] sm:text-[2.3vw] md:text-[1vw]'>{FOOTER.copyright}</p>
                    <p className='text-gray-300 my-3 text-center md:text-left text-[4vw] sm:text-[2.3vw] md:text-[1vw]'>{FOOTER.allRights}</p>
                </div>

                <div className='flex justify-center gap-[3vw] md:gap-0 md:justify-between items-center'>
                    {
                        FOOTER.mediaLinks.map((link, idx) => {
                            return <Image className='cursor-pointer bg-gray-700 rounded-full p-[2vw] md:p-2 w-[10vw] h-[10vw] sm:w-[7vw] sm:h-[7vw] md:w-[3vw] md:h-[3vw] lg:w-[2.3vw] lg:h-[2.3vw]' key={idx} alt="social Media Logo" src={link} width={40} height={40}></Image>
                        })
                    }
                </div>
            </div>
            <div className='w-full md:hidden flex justify-center items-center'>
                <div className='md:hidden block sm:w-[60%] w-full my-[5vw] '>
                    <h3 className='sm:text-[vw] text-[4.5vw] md:text-[5vw] font-semibold mt-4'>{FOOTER.sendMail.heading}</h3>
                    <div className='flex justify-between items-center mt-4 bg-[#515B60] w-full p-3 rounded-xl'>
                        <input type="text" placeholder='Your email address' className='outline-none' />
                        <Image src={IMAGES.sendIcon} alt="Send icon" width={20} height={20}></Image>
                    </div>
                </div>
            </div>
            <div className='flex justify-between sm:justify-start items-start gap-[8vw] md:mt-0 mt-[10vw] sm:w-fit w-full'>
                <div>
                    <h3 className='text-[4.5vw] sm:text-[3vw] md:text-[1.5vw] font-semibold mb-4'>{FOOTER.companyLinks.heading}</h3>
                    <ul>
                        {
                            FOOTER.companyLinks.links.map((link) => (
                                <li className='text-gray-300 my-4 cursor-pointer text-[3.5vw] sm:text-[2vw] md:text-[1vw]' key={link.text}><Link href={link.link}>{link.text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-[4.5vw] sm:text-[3vw] md:text-[1.5vw] font-semibold mb-4'>{FOOTER.supportLinks.heading}</h3>
                    <ul className=''>
                        {
                            FOOTER.supportLinks.links.map((link) => (
                                <li className='text-gray-300 my-4 cursor-pointer text-[3.5vw] sm:text-[2vw] md:text-[1vw]' key={link.text}><Link href={link.link}>{link.text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <h3 className='text-[1.5vw] font-semibold mb-4'>{FOOTER.sendMail.heading}</h3>
                    <div className='flex justify-between items-center bg-[#515B60] w-xs p-3 rounded-xl'>
                        <input type="text" placeholder='Your email address' className='outline-none' />
                        <Image src={IMAGES.sendIcon} alt="Send icon" width={20} height={20}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer