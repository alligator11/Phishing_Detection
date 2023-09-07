import React from "react";

function Prob(){
    return(
        <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Problem Statement</h1>
          <p className='text-[#00df9a] font-bold text-center'>SIH1454 - National Technical Research Organisation, (NTRO)</p>
          <p className='py-2 border-b mb-6 text-gray-500 text-center'><b>Create an intelligent system using AI/ML to detect phishing domains which imitate look and feel of genuine domains</b></p>
          <p>
          Phishing attack is the most prevalent attack technique to compromise users worldwide. Phishing links/websites are shared through number of mediums like email, SMS etc. to target users. These domains are at times host user login page that imitates the genuine target websites. Login attempts on such pages can lead to compromise of user credentials and may also download malicious payload in user computers. 
<br/><br/>The objective of the problem is to identify such phishing domains from the newly registered websites based on open source databases (Example WHOIS Database). Such databases provide list of newly registered domains. The tool should be automated and harness power of AI/ML to identify phishing domains from genuine domains. 

          </p>
        </div>
      </div>
    </div>
    )
}

export default Prob;