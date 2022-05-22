import React from 'react';

const EmergencyLeave = () => {
    return (
        <div className='space-y-6 py-5'>

            <div className='w-3/5 mx-auto xs:w-full xs:px-5 border-2 border-gray-300 rounded-lg p-2 shadow-xl'>
                <h1 className='text-2xl font-bold mb-5'>Example 1: Personal reason</h1>
                <p className=''>
                    Hi [Name of your Manager or Supervisor]
                    <br /><br />
                    I am writing to you to let you know that I have an important personal matter to attend in my hometown, due to which I will not be able to come to the office until [Month, Date].
                    <br /><br />
                    I have informed my teammates about my leave and have advised them on the project we are working on. You may contact me on [Your mobile number] in case you need me for any urgent information.
                    <br /><br />
                    I request you to please grant me a leave for [Number of Days] and oblige.
                    <br /><br />
                    Sincerely,
                    <br /><br />
                    [Your Name]
                </p>
            </div>

            <div className='w-3/5 mx-auto xs:w-full xs:px-5 border-2 border-gray-300 rounded-lg p-2 shadow-xl'>
                <h1 className='text-2xl font-bold mb-5'>Example 2: Family emergency</h1>
                <p className=''>
                    Hi [Name of your Manager or Supervisor]
                    <br /><br />
                    I would like to inform you that I received a phone call from my mother this morning that my father has suffered a heart attack and he has been admitted to ICU in [name of hospital and city]. I need to reach the hospital at the earliest.
                    <br /><br />
                    Hence, I request you to grant me a leave for [Number of Days] starting today. I plan to rejoin my work on [Month Date, Year]. As I am not fully aware of the gravity of situation, I will inform you in case I have to extend the leave.
                    <br /><br />
                    I have informed my teammates about my leave. You may contact me on [Your mobile number] in case you need me for any urgent information.
                    <br /><br />
                    Thanking you, anticipating your approval of leave at your earliest.
                    <br /><br />
                    Sincerely,
                    <br /><br />
                    [Your Name]
                </p>
            </div>

        </div>
    )
}

export default EmergencyLeave;