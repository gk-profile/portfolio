import profilephoto from '@/assets/Group 5 (1).png'

const About = () => {
  return (
    <div className='px-24 font-popins' id='about'>
        <div className='container mx-auto'>
            <div className='flex justify-center'>
                <h1 className='text-3xl font-bold md:text-4xl'>About Me</h1>
            </div>

             <div className='flex py-10 flex-col justify-center items-center md:flex-row '>
                <div>
                    <img src={profilephoto} alt='no image found' className='w-[600px] h-60 rounded-2xl object-cover'></img>
                </div>

                <div className='px-8'>
                    <div className='text-justify py-5'>
                        <p className='text-lg font-popins'>
                            I'm a Full-Stack Developer with a passion for creating innovative and high-impact web applications. 
                            Leveraging a solid foundation in both front-end and back-end technologies, I excel at delivering seamless and user-centric digital experiences. 
                            Committed to continuous learning and excellence, I strive to develop solutions that not only meet but exceed client and user expectations
                        </p>
                    </div>

                    <div className='flex space-x-10 text-black'>
                        <h3 className='text-center p-5 font-bold'>2+ <br></br>years of experience</h3>
                        <h3 className='text-center p-5 font-bold'>Master of Technology <br></br>in Software Engineering</h3>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About