import React from 'react';

const SickLeave = () => {
    return (
        <div className='space-y-6 py-5'>

            <div className='w-3/5 mx-auto xs:w-full xs:px-5 border-2 border-gray-300 rounded-lg p-2 shadow-xl'>
                <h1 className='text-2xl font-bold mb-5'>1. Sample Sick Day Email - Basic</h1>
                <p className=''>
                    Hi [Name of your Manager or Supervisor],
                    <br /><br />
                    I'm sending you this email to inform you that I can't make it to work today, [date], because of [illness]. If something urgent comes up, I'll be able to answer emails, but feel free to contact [name of teammate] who will be in charge of my workload today to make sure that all deadlines are met.
                    <br /><br />
                    Thank you for understanding.
                    <br /><br />
                    [Your name]
                </p>
            </div>

            <div className='w-3/5 mx-auto xs:w-full xs:px-5 border-2 border-gray-300 rounded-lg p-2 shadow-xl'>
                <h1 className='text-2xl font-bold mb-5'>2. Sample Sick Day Email with Paid Leave Request</h1>
                <p className=''>
                    Hi [Name of your Manager or Supervisor],
                    <br /><br />
                    I won't be able to report to work today because of [illness] and have [symptoms]. I went to the hospital and the doctor confirmed that I've got [diagnosis].
                    <br /><br />
                    The doctor prescribed [number of days off work] since I [reason/s: need to rest, etc.]. If something urgent comes up, I'll be able to answer emails, but feel free to contact [name of teammate] who will be in charge of my workload for the time being to make sure that all deadlines are met.
                    <br /><br />
                    Thank you for understanding.
                    <br /><br />
                    [Your name]
                </p>
            </div>

            <div className='w-3/5 mx-auto xs:w-full xs:px-5 border-2 border-gray-300 rounded-lg p-2 shadow-xl'>
                <h1 className='text-2xl font-bold mb-5'>3. Sample Sick Email Template for Indefinite Leave</h1>
                <p className=''>
                    Hi [Name of your Manager or Supervisor],
                    <br /><br />
                    I'm sending this email to inform you that I can't come to the office today. I've been feeling under the weather since [when the symptoms occurred - yesterday, last night, etc.]. I went to the hospital and the doctor said I've got [illness]. The prescribed medication will last for [number of days]. The doctor asked me to stay home so I can completely recover.
                    <br /><br />
                    Feel free to contact [name of teammate] who will be in charge of my workload for the time being to make sure that all deadlines are met.
                    <br /><br />
                    Thank you for understanding.
                    <br /><br />
                    [Your name]
                </p>
            </div>

        </div>
    )
}

export default SickLeave;