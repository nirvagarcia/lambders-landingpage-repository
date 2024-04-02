import React from "react";
import "../styles/DownloadAkira.css";


const DownloadAkira = () => {    
    return (       
        <div id="downloadAkira"> 

            <div className="downloadAkira-container">

                <div className="i" >

                    <p style={{fontWeight: '500'}}>Descarga la App <span style={{color:'#225E7C'}}>RentState</span> Mobile</p>

                    <div className="buttons-download">                     
                        <img onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.alaeat.customer.android.RentState&hl=en&gl=US", "_blank"); }} src="/assets/googleplay.png" alt="WhatsApp" />
                        <img onClick={() => { window.open("https://apps.apple.com/be/app/RentState/id6458584519", "_blank"); }} src="/assets/appstore.png" alt="WhatsApp" />
                    </div>

                </div>

                <div className="download-img" >
                    <img  src="/assets/RentStateBanner.png" alt="WhatsApp" />
                </div>   

                <div className="buttons-download2">                     
                    <img onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.alaeat.customer.android.RentState&hl=en&gl=US", "_blank"); }} src="/assets/googleplay.png" alt="WhatsApp" />
                    <img onClick={() => { window.open("https://apps.apple.com/be/app/RentState/id6458584519", "_blank"); }} src="/assets/appstore.png" alt="WhatsApp" />
                </div>
               
                        
            </div>

        </div>      
    );
};

export default DownloadAkira;