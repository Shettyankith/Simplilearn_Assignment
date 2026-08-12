import { FOOTER } from '@/data/data'
import { IMAGES } from '@/data/images'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
    return (
        <div className='bg-[#263238] text-white px-[3vw] py-[5vw] flex justify-around items-start'>
            <div className='flex flex-col justify-start items-around gap-10'>
                <h1 className='text-white font-bold flex justify-start gap-3 text-[2.5vw] items-center'><Image src={FOOTER.logo} alt="Logo" width={50} height={50}></Image>{FOOTER.companyName}</h1>
                <div>
                    <p className='text-gray-300 my-3'>{FOOTER.copyright}</p>
                    <p className='text-gray-300 my-3'>{FOOTER.allRights}</p>
                </div>

                <div className='flex justify-between items-center'>
                    {
                        FOOTER.mediaLinks.map((link, idx) => {
                            return <Image className='cursor-pointer bg-gray-700 rounded-full p-2' key={idx} alt="social Media Logo" src={link} width={40} height={40}></Image>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-start items-start gap-[8vw]'>
                <div>
                    <h3 className='text-[1.5vw] font-semibold mb-4'>{FOOTER.companyLinks.heading}</h3>
                    <ul>
                        {
                            FOOTER.companyLinks.links.map((link) => (
                                <li className='text-gray-300 my-4 cursor-pointer' key={link.text}><Link href={link.link}>{link.text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-[1.5vw] font-semibold mb-4'>{FOOTER.supportLinks.heading}</h3>
                    <ul>
                        {
                            FOOTER.supportLinks.links.map((link) => (
                                <li className='text-gray-300 my-4 cursor-pointer' key={link.text}><Link href={link.link}>{link.text}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-[1.5vw] font-semibold mb-4'>{FOOTER.sendMail.heading}</h3>
                    <div className='flex justify-between items-center bg-[#515B60] w-xs p-3 rounded-xl'>
                        <input type="text" placeholder='Your email address' className='outline-none'/>
                        <Image src={IMAGES.sendIcon} alt="Send icon" width={20} height={20}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer