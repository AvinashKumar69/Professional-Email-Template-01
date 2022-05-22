import React from 'react';
import CoverLetterImg1 from '../assets/coverLetterImg1.png';
import Example1 from '../assets/college-or-student-cover-letter-example.png';
import Example2 from '../assets/Middle-Management-Cover-Letter.png';
import Example3 from '../assets/Career-Change-Cover-Letter.png';
import Example4 from '../assets/Management-Cover-Letter-Example.png';
import Example5 from '../assets/Senior-Executive-Cover-Letter-Example.png';

const CoverLetter = () => {
    return (
        <div className='space-y-6 py-5'>

            <div className='w-3/5 mx-auto'>
                <img className='object-cover' src={CoverLetterImg1} alt='img1' />
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5 border-2 border-green-500 rounded-lg p-2'>Cover Letter Writing Checklist</h1>
                <div className='border-2 border-green-500 rounded-lg p-2'>
                    <h1 className='text-xl font-semibold mb-2'>Does your cover letter heading include all essential information?</h1>
                    <p className='ml-2 mb-2'>
                        Full Name <br />
                        Your Email Id <br />
                        Phone Number <br />
                        Date <br />
                        Relevant Social Media Profiles, i.e., LinkedIn, GitHub, etc. <br />
                    </p>
                    <h1 className='text-xl font-semibold mb-2'>
                        Do you address the right person? i.e., hiring manager in the company / your future direct supervisor
                    </h1>
                    <h1 className='text-xl font-semibold mb-2'>
                        Does your introductory paragraph grab the reader's attention?
                    </h1>
                    <p className='ml-2 mb-2'>
                        Did you mention 2-3 of your top achievements?<br />
                        Did you use numbers and facts to back up your experience?<br />
                    </p>
                    <h1 className='text-xl font-semibold mb-2'>
                        Do you successfully convey that you're the right person for the job?
                    </h1>
                    <p className='ml-2 mb-2'>
                        Did you identify the core requirements?<br />
                        Did you successfully convey how your experiences help you fit the requirements perfectly?<br />
                    </p>
                    <h1 className='text-xl font-semibold mb-2'>
                        Do you convince the hiring manager that you're passionate about the company you're applying to?
                    </h1>
                    <p className='ml-2 mb-2'>
                        Did you identify the top 3 things that you like about the company?<br />
                        Did you avoid generic reasons for explaining your interest in the company?<br />
                    </p>
                    <h1 className='text-xl font-semibold mb-2'>
                        Did you finalize the conclusion with a call to action?
                    </h1>
                    <h1 className='text-xl font-semibold mb-2'>
                        Did you use the right formal closure for the cover letter?
                    </h1>
                </div>
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>5+ Cover Letter Examples</h1>
                <p className=''>
                    Need some inspiration? Read on to learn about some of the best cover letter examples we've seen (for different fields).
                </p>
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>1. College Student Cover Letter Example</h1>
            </div>

            <div className='w-3/5 mx-auto border-2 border-black rounded-lg'>
                <img className='object-cover' src={Example1} alt='1' />
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>2. Middle Management Cover Letter Example</h1>
            </div>

            <div className='w-3/5 mx-auto border-2 border-black rounded-lg'>
                <img className='object-cover' src={Example2} alt='2' />
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>3. Career Change Cover Letter Example</h1>
            </div>

            <div className='w-3/5 mx-auto border-2 border-black rounded-lg'>
                <img className='object-cover' src={Example3} alt='2' />
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>4. Management Cover Letter Example</h1>
            </div>

            <div className='w-3/5 mx-auto border-2 border-black rounded-lg'>
                <img className='object-cover' src={Example4} alt='2' />
            </div>

            <div className='w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold mb-5'>5. Senior Executive Cover Letter Example</h1>
            </div>

            <div className='w-3/5 mx-auto border-2 border-black rounded-lg'>
                <img className='object-cover' src={Example5} alt='2' />
            </div>

        </div>
    )
}

export default CoverLetter;