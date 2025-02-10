'use client';

import {Image} from '@nextui-org/image';
import {Button} from "@nextui-org/button";
import mySelfPic from '@/public/images/myself.jpg';
import { fontSans } from '@/config/fonts';
import {IoMail, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';
import SocialButton from './social_button';

export default function Info(){
    return (
        <div className="flex flex-col justify-center items-center gap-y-6">
            <Image 
            isBlurred
            width={192}
            height={192}
            radius='full'
            className='w-48 h-48 object-cover antialiased'
            isZoomed
            alt='Vladimiros Mazarakis selfie'
            src={mySelfPic.src}/>
            <div className="flex flex-col justify-center items-center gap-y-3 text-center">
                <p className='text-gray-100  text-sm lg:text-base font-extralight'>.NET FULL-STACK SOFTWARE DEVELOPER</p>
                <h1 className={`text-white text-4xl lg:text-5xl`}>Vladimiros Mazarakis</h1>
                <p className='text-white font-light text-sm lg:text-base'>Developing cool projects :{")"}</p>
            </div>
            <div className="flex flex-row justify-center flex-wrap gap-3 w-full sm:w-2/3">
                <SocialButton ariaLabel='My email address' className='bg-green-500' link='mailto:vladimirmazarakis@hotmail.com'>
                    Email <IoMail />
                </SocialButton>
                <SocialButton ariaLabel='My instagram account' className='bg-gradient-to-r from-violet-600 to-orange-400' link='https://www.instagram.com/vladimirmazarakis/'>
                    Instagram <IoLogoInstagram />
                </SocialButton>
                <SocialButton ariaLabel='My github' className='bg-white' link='https://github.com/vladimirmazarakis'>
                    GitHub <IoLogoGithub />
                </SocialButton>
                <SocialButton ariaLabel='My linkedin' className='bg-blue-600' link='https://www.linkedin.com/in/vladimiros-mazarakis-621347225/'>
                    LinkedIn <IoLogoLinkedin />
                </SocialButton>
            </div>
        </div>
    )
}