import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Homepage.css';

import picture1 from '../images/blog-img.jpg';
import progress from '../images/progress.png';
import articles from '../images/write-articles.png';
import tips from '../images/daily-tips.png';
import community  from '../images/community.png';
import drone from '../images/drone.png';
import phone from '../images/contact-img.png';

import Tests from '../images/icons/Assessment.png';
import chat from '../images/icons/Chat.png';
import Therapy from '../images/icons/Therapist.png';
import Phone from '../images/icons/phone.png';
import Call from '../images/icons/phone-call.png';
import Signup from '../images/icons/sign-up.png';
import Case from '../images/schedule-meeting.png';



const Homepage = () => {
    return (
        <>
            <Navbar />
            
            <div id="Homepage">

                <div className="hero-section">
                    <div className="hero-text">
                    <h1>Your Mental Health Is Our Priority</h1>
                    <p>Start your journey to improving your mental well-being with online sessions and therapeutic self-care tools from qualified therapists.</p>
                    <button  className="get-started"> Get Started </button>
                    </div>

                    </div>
                       

                    <section id="product">
                            <div className="container">

                                    <div className="make-appointments">
                                    <div className="one">
                                    <img className="appointments" src={community} alt="Be a part of our community"/>
                                    <h4>Book Consultation With An Expert</h4>
                                    <p>Schedule a confidential online therapy and counselling session with licensed therapists and consultants. </p>
                                    </div>

                                    <div className="two">
                                    <img className="appointments" src={Call} alt="Track your progress"/>
                                    <h4>Call for Immediate/Instant Help</h4>
                                    <p>Are you or anyone you know in a crisis or danger? Make a quick toll-free call to get connected to a specialist.</p>
                                    </div>

                                    <div className="three">
                                        <img className="appointments" src={articles} alt="Read and write articles"/>
                                        <h4>Read And Write Insightful Articles</h4>
                                        <p>Choose to share your story with others and read insightful articles to guide you towards happiness.</p>
                                        </div>

                                <div className="four">
                                <img className="appointments" src={tips} alt="Get daily tips"/>
                                <h4>Get Daily Tips That Will Keep You Motivated</h4>
                                <p>Get daily proven tips, advice & self-help guides on how to feel better from licensed & certified specialists.</p>
                                </div>

                                <div className="five">
                                <img className="appointments" src={Case} alt="Be a part of our community"/>
                                <h4>Become Part Of Our Community</h4>
                                <p>Join our community and share your own wisdom and life experience to help others along the way.</p>
                                </div>

                                <div className="six">
                                <img className="appointments" src={progress} alt="Be a part of our community"/>
                                <h4>Manage And Track Your Progress</h4>
                                <p>Monitor your progress as you advance in your therapy sessions. </p>
                                </div>

                                </div>

                            </div>
                      
                
                       

                            <div className="product-section">
                            <div className="product-details">
                            <h1>Connect With A Licenced Therapist or Counselor</h1>
                            <p>Get access to a wide range of evidence-based, contemporary online therapies tailored to your needs and circumstances.</p>
                            <div className="product-btn">
                            <button className="get-started2"> Get Started </button>
                           <button className="quick-call">
                           <img src={Phone} alt="Phone"/> <span> Quick call </span> 
                           </button>
                            </div>
           
                            </div>
                      
                        </div>
                    </section>
                   


                <div className="analysis-section">
                <div className="inner">
                            <h1>A Broad Range of Therapies</h1>
                            <p>Get access to a wide range of evidence-based, contemporary online therapies tailored to your needs and circumstances.</p>
                           <button className="get-started2"> Get Started </button>
                      
                        </div>

                        <div className="responsive-data">

                     
        <div className = "analysis-tag">
        <p>Anxiety</p>
        <p>Depression</p>
        <p>Drug use disorder</p>
        <p>Bipolar disorder</p>
        <p>Schizophrenia</p>
   
        </div>

                        <div className="data">
                        <div class="analysis-container">
                <div className="analysis analysis1">
                </div> <span> 3.62%</span>
            </div>


            <div className="analysis-container">
                <div className="analysis analysis2"></div>
                <span> 3.21%</span>
            </div>


            <div className="analysis-container">
            <div className="analysis analysis3"></div>
            <span> 1.28%</span>
            </div>

            <div className="analysis-container">
         <div className="analysis analysis4"></div>
         <span> 0.68%</span>
        </div>

        <div className="analysis-container">
         <div className="analysis analysis5"></div>
         <span> 0.38%</span>
        </div>

        <div className="analysis-container percentage-values">
        <span>0%</span>
        <span>0.5%</span>
         <span> 1%</span>
         <span> 1.5%</span>
         <span> 2%</span>
         <span> 2.5%</span>
         <span> 3%</span>
         <span> 3.5%</span>
        </div>

        
        <div className="analysis-container analysis-text">
        <p>Share of the total population in Africa with a given mental health or substance use disorder </p>
        </div>
        </div>



        </div>


        </div>

        <div className="how-it-works-header">
                        <h2> How it works </h2>
                        <p>Improve Your Mental Health Today In Three Simple Steps</p>
                        </div>

                
                <div id="how-it-works">

                <div className="how-it-works-img-row">
                <div className="how-it-works-img">
                        <img src={Signup} alt="Mobile view of landing page"/>
                        <p>Sign Up for a Free Lull Account</p>
                        <img className="drone" src={drone} alt="Mobile view of landing page"/>
                        </div>
                       
                            
                        <div className="how-it-works-img">
                        <img src={Tests} alt="Mobile view of landing page"/>
                        <p>Take An online Assessment</p>
                        <img className="drone" src={drone} alt="Mobile view of landing page"/>
                        </div>
                        </div>

        <div className="how-it-works-img-row">
        <div className="how-it-works-img">
        <img src={Therapy} alt="Mobile view of landing page"/>
        <p>Find Your Therapist</p>
        <img className="drone" src={drone} alt="Mobile view of landing page"/>
        
        </div>
      

        <div className="how-it-works-img">
        <img src={chat} alt="Mobile view of landing page"/>
        <p>Start Talking with your Therapist via Chat, Voice or Video Call</p>
        <img className="drone" src={drone} alt="Mobile view of landing page"/>
        </div>
        </div>
        </div>
        <button className="how-it-works-btn"> Get Started </button>

        <div id="blog">
            <h2> Check Out Our Resources </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, neque.</p>

            <div className="blog-section">

                <div className="blog-section-img">
                <img src={picture1} alt="A meditating lady"/>
                <div className="blog-title"><h3>How To Handle Stress</h3></div>
                <div className="blog-author">
                <p>Kida Maji</p>
               
                </div>
                
                </div>

                <div className="blog-section-img">
                <img src={picture1} alt="A meditating lady"/>
                <div className="blog-title"><h3>How To Handle Stress</h3></div>
                <div className="blog-author">
                <p>Kida Maji</p>
              
                </div>
                
                </div>

                <div className="blog-section-img">
                <img src={picture1} alt="A meditating lady"/>
                <div className="blog-title"><h3>How To Handle Stress</h3></div>
                <div className="blog-author">
                <p>Kida Maji</p>
              
                </div>
                
                </div>
                
            </div>
            <button className="see-more">See More</button>
        </div>
                    

       


        
        <div id="contact">
            <h2>Send Us A Message</h2>
            <div className="contact-image"> 
            <div className="phone-img">
                        <h1>we'd love to hear from you!</h1>
                        <p>Have an enquiry or you'd love to give us some feedback? We are here for you.</p>
                        <img className="contact-phone" src={phone} alt= "A telephone"/>
                      
                        </div>
            <form action="" className="contact-form">
                <p> Fill out the form below and we'd be in touch as soon as possible. </p>

                <div className="contact-grid">
             
                <div className="input-flex">
                    <label htmlFor="subject">Name</label>
                    <input type="text" placeholder="Full name" value="" />
                    </div>
                

                   
                    <div className="input-flex">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder="Email Address" name="" id="" />
                    </div>
                
                </div>
               
                <label htmlFor="message">Message</label>
                <textarea name="" placeholder="Type message" id="" cols="30" rows="10"></textarea>
                <button className="contact-btn"> Send Message</button>
            </form>  
           
            </div>
          
            </div>
           
                <footer className="homepage-footer">
                    <div className="footer-logo">
                        <h3>LOGO</h3>
                    </div>

                    <div className="company">
                        <h4>COMPANY</h4>
                        <h5>About Us</h5>
                        <h5>Terms of Service</h5>
                        <h5>Privacy Policy</h5>
                        <h5>legal</h5>
                    </div>

                    <div className="resources">
                        <h4>RESOURCES</h4>
                        <h5>Blog</h5>
                        <h5>Faq</h5>
                    </div>


                    <div className="follow-us">
                        <h4>FOLLOW US</h4>
                        <h5>LinkedIn</h5>
                        <h5>Facebook</h5>
                        <h5>Twitter</h5>
                        <h5>Instagram</h5>
                    </div>

                </footer>

                <div className="copyright">
                       <p> <span>&copy; 2021</span> All rights reserved </p>
                    </div>

            </div>
            
        </>
    )
}

export default Homepage;
