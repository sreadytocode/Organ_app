import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import OrgansContainer from "../../Containers/OrgansContainer";
import { organById } from "../OrgansService";
import './bbc.jpg'  

const Header = () => {
    const Header = styled.header`
    background-color: #8A2BE2; 
    color: white;

  `

  const HeaderGroup = styled.hgroup `
    display: flex;
    flex-direction: row;
    margin: 0;
    padding-left: 30px;
    padding-bottom: 10px;
    justify-content: center;

  `

  return (
    <div>
    <Header>
        <HeaderGroup> 
          <h1><img src='https://cdn-icons-png.flaticon.com/512/4556/4556999.png' width='45px' height='45px'></img> Organ  <img src='https://cdn-icons-png.flaticon.com/512/2492/2492923.png' width='45px' height='45px'></img>  Learning  <img src='https://cdn-icons-png.flaticon.com/512/7292/7292483.png' width='45px' height='45px'></img> Guide
          </h1>
        </HeaderGroup>
        {/* <HeaderGroup> 
          <img src='https://1000logos.net/wp-content/uploads/2016/10/BBC-Logo-1.png' width='150px' height='50px'></img> 
          <h1>  Organ Learning Guide 
          </h1>
        </HeaderGroup> */}

 

      </Header>

      </div>
  );
}
 
export default Header;