import React,{Link} from 'react'
import Layout from '../components/layout'
import Logo from '../images/president.png'
import homeStyle from './home.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Toaster from '../components/toaster'
import Sidebar from '../components/sidebar';
import Video from '../images/presidentvids.mp4'
import img from '../images/launch_image.jpg'



const HomePage = () =>{
    return(
        
        <Layout>
        <div className={homeStyle.home}>
       <div className={homeStyle.president}> <img src={Logo}/ > </div>
        <div className={homeStyle.text}>
        <h1> Presidential Initiative</h1>
        <h3>for Artificial Intelligence & Computing (PIAIC)</h3>
        <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>
        <Button color='#3ddf3d' size="sm" className={homeStyle.button}>Apply</Button>
        </div>
      
        </div>
        <div className={homeStyle.available}> <h1 >A v a i l a b l e   P r o g r a m m e s</h1></div>
        <Toaster />
        <h1 className={homeStyle.pro}>      P r o g r a m m e s    I n    D e v e l o p m e n t</h1>
        <Sidebar />
        <div className={homeStyle.vids}>
        <h1 className={homeStyle.vidHead}>VIDEOS</h1>
        <video controls className={homeStyle.video}><source src={Video} type='video/mp4' /></video>
        <h3 className={homeStyle.class}>PIAIC Classes Coming Soon!</h3>
        <p className={homeStyle.mission}>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and <br></br>business by adopting latest, cutting-edge technologies.</p>
        <div className={homeStyle.green}>
        <h1 className={homeStyle.image}>Images</h1>
        <img src={img} className={homeStyle.launch} />
        <h3></h3>
        </div>
        </div>

        </Layout>
    )
}
export default HomePage