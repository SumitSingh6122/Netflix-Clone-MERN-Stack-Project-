import React from "react";
import './home.css';
import Header from "./header";
import Footer from "./footer";


const Home = () => {
    return (
        <div>
          
            <div className='container'>
              <Header/>
                <div className="main">
               
                </div>
                <div className='box'>
                    <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                    <p>Watch anywhere. Cancel anytime.</p><br />
                    <span>Ready to watch? Enter your email to create or restart your membership.</span><br />
                    <div className="start"><input type="text" placeholder="Email address" /><a href="/body"><button className="get"  type="submit">Get Started &nbsp;<i className='bx bx-chevron-right'></i></button></a></div>
                </div>
            </div>
            <div className="separate"></div>
            <div className="seperation"></div>
            <section className="first">
                <div>
                    <span>Enjoy on your TV</span>
                    <span>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                </div>

                <div className="secImg">
                    <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"} alt="" />
                    <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                        autoPlay loop muted></video>
                </div>
            </section>
            <div className="seperation"></div>
            <div className="separate"></div>
            <div className="seperation"></div>
            <section className="first second">
                <div className="secImg ">
                    <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"} alt="" />
                </div>
                <div>
                    <span>Download your shows to watch offline</span>
                    <span>Save your favourites easily and always have something to watch.</span>
                </div>
            </section>
            <div className="seperation"></div>
            <div className="separate"></div>
            <div className="seperation"></div>
            <section className="first third">
                <div>
                    <span>Watch everywhere</span>
                    <span>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                </div>

                <div className="secImg   ">
                    <img src={"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"} alt="" />
                    <video className="third-video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                        autoPlay loop muted></video>
                </div>
            </section>
            <div className="seperation"></div>
            <div className="separate"></div>
            <div className="seperation"></div>
            <section className="first forth">
                <div className="secImg">
                    <img src="https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" />

                </div>
                <div>
                    <span>Create profiles for kids</span>
                    <span>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</span>
                </div>


            </section>
            <div className="separate"></div>
            <div className="separate"></div>
            <div className="seperation"></div>
            <div className="forth">Frequently Asked Questions</div>
            <div className="questions">
                <div className="question-box">What is Netflix?<i className='bx bx-plus'></i></div>
                <div className="question-box">How much does Netflix cost?<i className='bx bx-plus'></i></div>
                <div className="question-box">Where can I watch?<i className='bx bx-plus'></i></div>
                <div className="question-box">How do I cancel?<i className='bx bx-plus'></i></div>
                <div className="question-box">Where I can watch on Netflix ?<i className='bx bx-plus'></i></div>
                <div className="question-box">Is Netflix good for kids?<i className='bx bx-plus'></i></div>
               
            </div>
            <div className="seperation"></div>
              <div className="separate"></div>
            
     <Footer/>
        </div>
    );
}

export default Home;
