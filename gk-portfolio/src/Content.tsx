import { Download, Contact, Linkedin, Github } from 'lucide-react';
import profilephoto from './assets/gk-photo.png'
import resume from './assets/Gowtham_Resume.pdf'

const Content = () => {
  return (
    <div className="py-28 px-8 flex justify-center" id='home'>
        <div className="container py-2 text-center">
            <div className=''>
                <img src={profilephoto} alt='no image found'
                className='mx-auto w-48 h-48 rounded-full object-cover'
                ></img>
            </div>

            <div className='pt-7 font-popins_mop'>
                <h1 className='text-3xl font-bold md:text-4xl'>I'm &nbsp;
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>Gowthamkumar
                    </span>
                    , Full-Stack Developer
                </h1>
                <p className='pt-3 font-thin'>
                    I specialize in designing and building complete web applications, from front-end to back-end.
                </p>
            </div>
            <div className='pt-5 space-x-4 font-popins flex justify-center'>
                <a href={resume} download>
                    <button className="flex items-center p-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full">
                        <Download className='mr-2'/>
                        <span>Resume</span>
                    </button>
                </a>
                <a href='#contact'>
                    <button className='flex items-center p-3 bg-gradient-to-r from-yellow-400 to-pink-400  rounded-full'><Contact className='mr-2'/>Contact</button>
                </a>
                
            </div>

            <div className='pt-5 space-x-4 font-popins flex justify-center'>
                <a href='https://www.linkedin.com/in/gowthamkumar-s-19896b201/' target='_blank'>
                    <button className="flex items-center  p-2 rounded-full">
                        <Linkedin />
                    </button>
                </a>

                <a href='https://github.com/gk-profile' target='_blank'>
                    <button className='flex items-center p-2 rounded-full'><Github/></button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Content