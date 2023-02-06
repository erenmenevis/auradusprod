import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function StickyWhatsappButton() {
    return (
        <a data-action="open" data-phone="905411547901" data-message="" href="https://web.whatsapp.com/send?phone=905411547901&amp;text=" target="_blank" rel="noreferrer" className="float" >
            <style jsx>{`
                .float{
                    position:fixed;
                    width:60px;
                    height:60px;
                    bottom:40px;
                    right:40px;
                    background-color:#25d366;
                    color:#FFF;
                    border-radius:50px;
                    border-color:red;
                    text-align:center;
                font-size:30px;
                    box-shadow: 2px 2px 3px #999;
                z-index:100;
                }

                .my-float{
                    margin-top:16px;
                }
          `}</style>

            <WhatsAppIcon /> 
        </a>
    )
}
