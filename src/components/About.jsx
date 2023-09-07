import React from "react";
import myImage from './phishing-widget.png';
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
  } from "@material-tailwind/react";

function About(){
    return(
    <div className='w-full text-white py-4 px-4'>
        <section className='my-10 px-10'>
            <div className="flex justify-center items-center">
        <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold pl-20'>We are your vigilant shield in cyberspace, harnessing AI/ML to unveil phishing domains among the web's newest arrivals, safeguarding your digital world.</h1>
        <img src={myImage} alt="NO Phishing" width='40%' height='40%' className="md-hidden"/></div><br></br>
        <p className="px-20">We are a cutting-edge cybersecurity platform, committed to safeguarding your online experience. Our seamless workflow starts with a user-friendly browser extension that empowers you to take control of your digital safety.
<br/>At our core, we are your cybersecurity partner, equipping you with the tools and knowledge to navigate the digital landscape safely. Explore, learn, and protect with us.
        </p>
        
        </section>


        <section className='flex justify-center items-center my-20 py-10'>
        <div>
            <Popover placement="top-end">
                <PopoverHandler>
                    <Button className='hover:text-red-500 bg-black font-bold rounded-md p-4'>User-Friendly Plugin . . . . . . . . . . . . </Button>
                </PopoverHandler>
                <PopoverContent>
                <div className="flex items-center bg-gray-300 w-[300px] h-[100px] overflow-auto rounded-sm">
                    <span className="text-black p-4">Begin by installing our user-friendly browser extension, granting you instant access to our powerful cybersecurity suite.</span>
                </div>
                </PopoverContent>
            </Popover><br/><br/><br/>
            <Popover placement="top-end">
                <PopoverHandler>
                    <Button className='hover:text-red-500 bg-black font-bold rounded-md p-4'>Real-Time Website Analysis . . . .</Button>
                </PopoverHandler>
                <PopoverContent>
                <div className="flex items-center bg-gray-300 w-[300px] h-[100px] overflow-auto rounded-sm">
                    <span className="text-black p-4">Whenever you visit a URL, our browser extension swiftly captures it and subjects it to rigorous scrutiny. We employ state-of-the-art Machine Learning models and rule-based algorithms to assess the website's trustworthiness. If it's deemed safe, you continue your online journey without interruptions. However, if a threat is detected, we provide immediate alerts to keep you secure.</span>
                </div>
                </PopoverContent>
            </Popover><br/><br/><br/>
            <Popover placement="bottom-end">
                <PopoverHandler>
                    <Button className='hover:text-red-500 bg-black font-bold rounded-md p-4'>Comprehensive Website Insights . . .</Button>
                </PopoverHandler>
                <PopoverContent>
                <div className="flex items-center bg-gray-300 w-[300px] h-[100px] overflow-auto rounded-sm">
                    <span className="text-black p-4">Curious about a website's background? Our extension reveals detailed information about the site, including ownership details from the WHOIS database and technical specifications.</span>
                </div>
                </PopoverContent>
            </Popover>
        </div>
        <div class="p-10 border-4 border-red-500 rounded-full">
        <div class="bg-gray-300 py-20 w-52 h-52 rounded-full text-center hover:scale-125 transform transition-transform duration-300 ease-in-out">
        <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold text-center text-black'>Features</h1>
        </div>
        </div>
        <div>
        <Popover placement="top-start">
                <PopoverHandler>
                    <Button className='hover:text-red-500 bg-black font-bold rounded-md p-4'>. . . . Dedicated Web Portal</Button>
                </PopoverHandler>
                <PopoverContent>
                <div className="flex items-center bg-gray-300 w-[300px] h-[100px] overflow-auto rounded-sm">
                    <span className="text-black p-4">For a deeper dive into website analysis, visit our web portal. Here, you can thoroughly investigate URLs for potential threats using the same AI-driven rule base. Our platform empowers you with an extensive range of insights, ensuring you're well-informed about the websites you interact with.</span>
                </div>
                </PopoverContent>
            </Popover><br/><br/><br/>
            <Popover placement="top-start">
                <PopoverHandler>
                    <Button className='hover:text-red-500 bg-black font-bold rounded-md p-4'>. . . . . . . . . . . Learning Hub</Button>
                </PopoverHandler>
                <PopoverContent>
                <div className="flex items-center bg-gray-300 w-[300px] h-[100px] overflow-auto rounded-sm">
                    <span className="text-black p-4">Knowledge is your best defense. Explore our learning platform to understand website protocols, password security best practices, and how to shield yourself from data breaches.</span>
                </div>
                </PopoverContent>
            </Popover><br/><br/><br/>
            <Popover placement="bottom-end">
                <PopoverHandler>
                    <Button className='hover:text-red-500 bg-black font-bold rounded-md p-4'>. . . Data Breach Monitoring</Button>
                </PopoverHandler>
                <PopoverContent>
                <div className="flex items-center bg-gray-300 w-[300px] h-[100px] overflow-auto rounded-sm">
                    <span className="text-black p-4">Concerned about your online credentials? We integrate with 'Have I Been Pwned' to check if your email address or password has been compromised. Stay informed and take proactive steps to protect your digital identity.</span>
                </div>
                </PopoverContent>
            </Popover>
        </div>
        </section>
        
        <section className='p-10 my-8'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-4 text-center'>Meet our Team</h1>
        <div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-md shadow-red-500 flex flex-col p-4 my-4 rounded-2xl'>
                <h2 className='text-2xl font-bold text-center py-8'>Aditi Gaikwad</h2>
            </div>
            <div className='w-full shadow-md shadow-red-500 flex flex-col p-4 my-4 rounded-2xl'>
                <h2 className='text-2xl font-bold text-center py-8'>Vaibhav Vanage</h2>
            </div>
            <div className='w-full shadow-md shadow-red-500 flex flex-col p-4 my-4 rounded-2xl'>
               <h2 className='text-2xl font-bold text-center py-8'>Shivam Musterya</h2>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-md shadow-red-500 flex flex-col p-4 my-4 rounded-2xl'>
                <h2 className='text-2xl font-bold text-center py-8'>Dhruv Sheth</h2>
            </div>
            <div className='w-full shadow-md shadow-red-500 flex flex-col p-4 my-4 rounded-2xl'>
                <h2 className='text-2xl font-bold text-center py-8'>Aryan Surve</h2>
            </div>
            <div className='w-full shadow-md shadow-red-500 flex flex-col p-4 my-4 rounded-2xl'>
               <h2 className='text-2xl font-bold text-center py-8'>Farin Khan</h2>
            </div>
        </div>
        </div>
      </section>
    </div>
    )
}

export default About;