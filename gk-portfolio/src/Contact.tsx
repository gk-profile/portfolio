import { Linkedin, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className='py-6 px-24 font-popins' id='contact'>
        <div className="container mx-auto">
            <div className='text-center'>
                <h3 className='font-light text-xl md:text-1xl'>Get in Touch</h3>
                <h1 className='text-center text-3xl font-bold md:text-4xl  mb-6'>Contact Me</h1>
            </div>

            <div className="max-w-2xl mx-auto">
                <div className=' space-x-5 bg-slate-300 p-3 rounded-full justify-center items-center text-lg md:flex'>
                    <a href='' target='_blank'>
                        <button className="flex items-center  p-2 rounded-full" onClick={()=>window.location.href='mailto:gowthamkumar.uxd@gmail.com'} >
                            <Mail />&nbsp; gowthamkumar.uxd@gmail.com
                        </button>
                    </a>

                    <a href='https://www.linkedin.com/in/gowthamkumar-s-19896b201/' target='_blank'>
                        <button className="flex items-center  p-2 rounded-full">
                            <Linkedin />&nbsp; Linked In
                        </button>
                    </a>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Contact