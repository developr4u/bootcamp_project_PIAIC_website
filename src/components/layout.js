import React from "react"
import Footer from './footer'
import Header from './header'
import '../sass/style.scss'

import { Alert } from 'reactstrap';



const Layout=(props)=>{
    return(
            <div>
               <Header/>
               <Alert color="secondary" className={'alert'}>
        Registration for Sialkot is now open.Click here to apply. <a href="#" className="alert-link"></a>. For queries contact Piaic helpline:03228844488(available on whatsapp)
      </Alert>
               {props.children}
               
               
               
               
               <Footer/>
            </div>

    )
}
export default Layout