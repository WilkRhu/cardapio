import React from "react";
import "./style.css";

export default function Footer(){
    return(
        <div className="container-fluid" id="footer">
            <div className="col-12" id="linha-footer">
            </div>
            <div className="container" style={{height: "100%", position: "relative"}}>
                <div className="col-12">
                    <div className="col-6" id="logo-fotter">
                    </div>
                </div>
                <div className="col-12" id="contatos">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i> 99501-4436 | <i class="fa fa-instagram" aria-hidden="true"></i> @tempero_do_compadre
                </div>
            </div>
        </div>
    );
}