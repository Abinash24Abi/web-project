import React,{useEffect} from 'react'
import transition from './transition'
import bg from '../assest/bg.mp4'
import './About.css'
import Footer from './Footer';
import Aos from 'aos'


const About = () => {

    useEffect(() => {
      Aos.init()
    },[])


  const data = [
    { id: 1, title: "Timekeeping", des: "Watches are most commonly used to tell time...", ex: "All types of watches..." },
    { id: 2, title: "Fashion/Style Statement", des: "Many people wear watches as a fashion accessory...", ex: "Luxury watches like Rolex..." },
    { id: 3, title: "Fitness Tracking", des: "Smartwatches and some analog watches...", ex: "Apple Watch, Fitbit..." },
    { id: 4, title: "Outdoor Navigation", des: "Watches like dive watches, pilot watches...", ex: "Suunto watches, Garmin Fenix..." },
    { id: 5, title: "Diving and Underwater Activities", des: "Dive watches are specifically designed...", ex: "Rolex Submariner, Seiko Diver..." },
    { id: 6, title: "Professional and Tactical Use", des: "Certain watches are designed for specific professions...", ex: "Breitling Navitimer for pilots..." },
    { id: 7, title: "Chronograph/Stopwatch Function", des: "Many watches, especially chronographs...", ex: "Tag Heuer Monaco, Omega Speedmaster..." },
    { id: 8, title: "Reminder and Notification Alerts", des: "Smartwatches provide alerts for texts, calls...", ex: "Apple Watch, Samsung Galaxy Watch..." },
    { id: 9, title: "Altitude and Pressure Monitoring", des: "Certain watches are designed with barometers...", ex: "Suunto Traverse, Garmin Instinct..." },
    { id: 10, title: "Solar Power", des: "Some watches use solar energy...", ex: "Citizen Eco-Drive, Seiko Solar..." }
  ];

  const colorClasses = [
    'border-primary text-primary',
    'border-secondary text-secondary',
    'border-success text-success',
    'border-danger text-danger',
    'border-warning text-warning',
    'border-info text-info',
    'border-dark text-dark',
    'border-primary text-primary',
    'border-success text-success',
    'border-warning text-warning',
  ];

  return (
    <>
    <div className='about-container'>
    
    <video className='bg-about' autoPlay loop muted >
                <source src={bg} type='video/mp4' />
            </video>

    <div className="container mt-4 about-main" data-aos="zoom-in-up">
      {data.map((info, index) => (
        <div data-aos="zoom-in-up" className={`card mb-4 border-2 ${colorClasses[index % colorClasses.length]}`} key={info.id}>
          <div className="card-header fw-bold">
            {info.title}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{info.des}</p>
              <footer className="blockquote-footer">{info.ex}</footer>
            </blockquote>
          </div>
        </div>
      ))}
    </div>

    </div>
    <Footer />
    </>
  );
};

export default transition(About);
