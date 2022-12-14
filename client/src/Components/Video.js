import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { organById } from "./Services/OrgansService.js";
import Heading from "./Heading.js";
import { Link } from "react-router-dom";
import Button from "./Re-usable/Button";
import styled from "styled-components";


const Video = () => {

    const [video, setVideo] = useState([]);

    const { id } = useParams()

    useEffect (() => {
        organById(id)
        .then((info) => {
            setVideo(info.video)
        }
       )
    }, [id, video]);

    

    const Section = styled.div`
    margin-bottom: 12em;
  
  `


    return ( 
        <Section>
           <Heading text = {`Watch Video`}/>
           <div>
           <iframe width="560" height="315" 
           src= {video}
           title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowfullscreen></iframe>
           </div>
          <Link to={`/${id}/quiz`}><Button text="Test Your Knowledge"/></Link>
        </Section>
     );
}

 
export default Video;