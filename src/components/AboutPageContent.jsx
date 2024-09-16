import Link from 'next/link';
import React from 'react';

const AboutPageContent = () => {
    return (
        <div className='my-11'>
            <Link href="/about/history" className='border-2 p-1'>History</Link>
            <Link href="/about/mission" className='border-2 p-1 ml-7'>Mission</Link>
        </div>
    );
};

export default AboutPageContent;