import React from 'react'
import ContactUsForm from '../Components/contactUs/ContactUsForm'

const ContactUs = () => {
  return (
    <div className="min-h-[80vh] w-full bg-richblack-900 flex flex-col items-center justify-start py-16">
      <div className='w-11/12 max-w-maxContent flex flex-col lg:flex-row justify-between gap-10 text-white'>
        <div className='lg:w-[40%]'>
            <div className='flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6'>
                <div className='flex flex-col gap-[2px] p-3 text-sm text-richblack-200'>
                    <div className='flex flex-row items-center gap-3'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z"></path><path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z"></path></svg>
                    <h1 className="text-lg font-semibold text-richblack-5">Chat on us</h1>
                    </div>
                    <p className='font-medium'>Our friendly team is here to help.</p>
                    <p className='font-semibold'>priyanshukaffota@gmail.com</p>
                </div>
                <div className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
                    <div className='flex flex-row items-center gap-3'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path></svg>
                    <h1 className="text-lg font-semibold text-richblack-5">Visit us</h1>
                    </div>
                    <p className='font-medium'>Come and say hello at our office HQ at himgiri hostel NITH</p>
                </div>
            </div>
        </div>
        <div className='lg:w-[60%]'>
            <div className='border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col'>
                <h1 className='text-4xl leading-10 font-semibold text-richblack-5'>
                Got a Idea? We've got the skills. Let's team up
                </h1>
                <p className='text-lg font-medium'>Tell us more about yourself and what you're got in mind.</p>
                <div className='mt-7'>
                    <ContactUsForm/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactUs