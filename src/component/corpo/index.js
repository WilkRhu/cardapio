import React, {useEffect, useState} from "react";
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import api from "../../service/api";

AOS.init();

export default function Corpo(){
    const [post, setPost] = useState([]);
    const [cake, setCake] = useState([]);

    useEffect(()=>{
        function Post(){
            setInterval(async () => {
                const response = await api.get("/food?_embed");
                setPost(response.data);
            }, 5000);
            
        }
        Post();
    },[]);

    useEffect(()=>{
      function Cake(){
          setInterval(async () => {
              const response = await api.get("/cake?_embed");
              setCake(response.data);
          }, 5000);
          
      }
      Cake();
  },[]);

    function Message() {
       var d = new Date();
        var hour = d.getHours();
        if(hour < 5)
        {
            return "Boa Noite";
        }
        else
        if(hour < 8)
        {
            return "Bom Dia";
        }
        else
        if(hour < 12)
        {
            return "Bom Dia!";
        }
        else
        if(hour < 18)
        {
            return "Boa tarde";
        }
        else
        {
            return "Boa noite";
        }
        
    }
   
    return( 
        <div className="container" id="corpo"> 
            <div className="col-12" id="title-corpo">
                Delícias do Dia
            </div>
            <div className="row">
                {post.map((item, indice)=>(
                <div className="col" id="box-card">
                  <div className="card" id="cards">
                  <img class="card-img-top" 
                  src={`${item._embedded["wp:featuredmedia"] ? item._embedded["wp:featuredmedia"][0].source_url : ""}`} 
                  alt="Card image cap" 
                  style={{ 
                          backgroundColor: "black",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
        
                          }} 
                        />
                      <div className="card-body">
                        <h5 className="card-title">{item.title.rendered}</h5>
                        <p className="card-text">
                            <span>Acompanhamento: </span> {item.acompanhamento}<br/>
                                <span>800g:</span> {item["800g"]}<br />
                                <div id="pedido">
                              </div>
                        </p>
                      </div>
                      <a href={`http://api.whatsapp.com/send?1=pt_BR&phone=+558193949202&text=Olá ${Message()} gostaria de um(a) ${item.title.rendered}`}>
                        <div className="card-footer">
                          <i className="fa fa-whatsapp" aria-hidden="true"></i> Fazer Pedido
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
                  
            </div>            
        </div>
    );
}