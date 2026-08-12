import { IMAGES } from '@/data/images'
import Image from 'next/image'
import navigationData from "@/data/navigation.json";
import Link from 'next/link';
import MobileMenu from './MobileMenu';

function Navbar() {
  return (
    <header className='relative flex justify-between items-center'>
        <div>
            <Image src={IMAGES.logo} alt="Logo" width={200} height={200} className="h-auto w-[10vw] min-w-[130px] sm:min-w-[150px] md:min-w-[100px]"/>
        </div>
        <div className='hidden lg:flex justify-between items-center'>
            <ul className='flex justify-items-start items-center '>
                {
                   navigationData?.map((item,idx)=>(
                    <Link href={item.link} key={idx} className='mx-[2.1vw] text-lg'>{item.name}</Link>
                   )) 
                }
            </ul>
            <div className='flex gap-[3vw] ml-[7vw]'>
                <button className='bg-transparent cursor-pointer text-[#28CB8B]'>Login</button>
                <button className='bg-[#4CAF4F] text-white cursor-pointer rounded-md py-[0.6vw] px-[1vw]'>Sign Up</button>
            </div>
        </div>

        <MobileMenu />
    </header>
  )
}

export default Navbar