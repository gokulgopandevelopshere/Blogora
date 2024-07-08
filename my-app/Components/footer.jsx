import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className="text-sm text-white">All right reserved . &Copyright @blogger</p>
        <div className="flex">
          <Image src={assets.facebook_icon} alt='icon' width={30} height={30} className=''/>
          <Image src={assets.twitter_icon} alt='icon' width={30} height={30} className=''/>
          <Image src={assets.googleplus_icon} alt='icon' width={30} height={30} className=''/>
        </div>
    </div>
  )
}
