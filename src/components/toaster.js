import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import toasterStyle from './toaster.module.scss'

const Toaster = (props) => {
  return (
    <div className={toasterStyle.tab}>
          
      <div className="p-3">
        <Toast className={toasterStyle.ai}>
          <ToastHeader className={toasterStyle.aiHeader}>
            
          </ToastHeader>
          <ToastBody>
            <h1 className={toasterStyle.aiHeading}>Artificial Intelligence</h1>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3">
        <Toast className={toasterStyle.cn}>
          <ToastHeader className={toasterStyle.cnHeader}>
           
          </ToastHeader>
          <ToastBody>
          <h1 className={toasterStyle.cnHeading}>Cloud Native & Mobile Web</h1>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3" >
        <Toast className={toasterStyle.bc}>
          <ToastHeader className={toasterStyle.bcHeader}>
           
          </ToastHeader>
          <ToastBody>
          <h1 className={toasterStyle.bc_heading}>BlockChain</h1>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 " >
        <Toast className={toasterStyle.iot}>
          <ToastHeader className={toasterStyle.header} >
           
          </ToastHeader>
          <ToastBody>
            <h1 className={toasterStyle.heading}>Internet Of Things And AI</h1>
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

export default Toaster;