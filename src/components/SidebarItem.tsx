import React, { useState, useEffect } from "react";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {FcAbout} from 'react-icons/fc'
import {IoAnalyticsOutline} from 'react-icons/io5'
import * as FaIcons from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData'
import SidebarItem1 from "./SidebarItem1";

/*interface subType {
  title: string;
  path: string;
  icon: any;
  iconClosed?: any;
  iconOpened?: any;
  subNav?:subType;
}
interface ItemType {
  title: string;
  path: string;
  icon: any;
  subNav?: Array<ItemType>;
  sub2Nav?: Array<ItemType>;
  sub3Nav?: Array<ItemType>;
}*/
interface itemType {
  title: string;
  path: string;
  icon: any;
  //iconClosed?: any;
  //iconOpened?: any;
  subNav?: itemType;
  
}

interface Props {
  sidebar: boolean;
  item: itemType ;
}
const SidebarItem = ({ item, sidebar }: any) => {
  const [dropdown, setDropdown] = useState(false);
console.log(sidebar)
  if (item.subNav ) {
    return (
      <div>
       <div className="link">
       {sidebar && item.subNav && !dropdown ? (
            <BiChevronRight
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
            ></BiChevronRight>
            ) : (
              ""
              )}
          {sidebar && item.subNav && dropdown ? (
            <BiChevronDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
            ></BiChevronDown>
            ) : (
              ""
              )}
        </div>
        {/* {item.subNav
          ? item.subNav.map((i: any, index: any) => {
              return (
                sidebar &&
                dropdown && (
                  <div>
                    <Link style={{"textDecoration":"none"}} to={i.path}>
                  <div className="link1" key={index}>
                    <div className="icon1">{i.icon}</div>
                    <div className="link_text1">
                      {sidebar ? `${i.title}` : ""}
                    </div>
                  </div>
                  </Link>
                  </div>
                )
              );
            })
          : ""} */}
           { sidebar &&
                dropdown && item.subNav.map((item1: any,index1: any)=>{return <SidebarItem1 key={index1} item1={item1} sidebar={sidebar}></SidebarItem1>})}
      </div>
    );
  }
 
        
  else {
    return (
      <div>

<Link style={{"textDecoration":"none"}} to={item.path}>
      <div className="link">
        <div className="icon">{item.icon}</div>
        <div className="link_text">{sidebar ? item.title : ""}</div>

        {sidebar && item.subNav && !dropdown ? (
          <AiFillCaretDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></AiFillCaretDown>
        ) : (
          ""
        )}
        {sidebar && item.subNav && dropdown ? (
          <AiFillCaretUp
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></AiFillCaretUp>
        ) : (
          ""
        )}
      </div>
      </Link>
      </div>
    );
  }
};

export default SidebarItem;

/* 
interface Props {
  sidebar: boolean;
  item: itemType ;
}
const SidebarItem = ({ item, sidebar }: any) => {
  const [dropdown, setDropdown] = useState(false);

  if (item.subNav ) {
    return (
      <div>
        <div className="link">
          <div className="icon">{item.icon}</div>
        <Link style={{"textDecoration":"none"}} to={item.path}>
          <div className="link_text">{sidebar ? item.title : ""}</div>

          </Link>
         
        </div>
        {sidebar && dropdown && item.subNav.map((child:any, index:any) => <SidebarItem key={index} item={child} sidebar={sidebar} />)}
      </div>
    );
  }
 
        
  else {
    return (
      <div>
       {/* {item.title} */}
<Link style={{"textDecoration":"none"}} to={item.path}>
      <div className="link">
        {sidebar  &&item.subNav &&  !dropdown ? (
          <BiChevronRight
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></BiChevronRight>
        ) : (
          ""
        )}
        {sidebar  &&item.subNav && dropdown ? (
          <BiChevronDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></BiChevronDown>
        ) : (
          ""
        )}
        <div className="icon">{item.icon}</div>
        <div className="link_text">{sidebar ? item.title : ""}</div>

        
      </div>
      </Link>
      </div>
    );
  }
};

export default SidebarItem;

