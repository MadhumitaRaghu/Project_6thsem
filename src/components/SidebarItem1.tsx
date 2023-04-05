import React, { useState, useEffect } from "react";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {FcAbout} from 'react-icons/fc'
import {IoAnalyticsOutline} from 'react-icons/io5'
import * as FaIcons from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
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
/*
const navItems: ItemType[] = [
  {
    title: 'Download Product Artifacts',
    path: '/overview',
    icon: <AiIcons.AiFillHome />,
    //iconClosed: <AiIcons.AiOutlineDownload></AiIcons.AiOutlineDownload>,
    //iconOpened: <AiIcons.AiOutlineDownload/>,

    subNav: [
      {
        title: 'Users',
        path: '/overview/users',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Revenue',
        path: '/overview/revenue',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Pre-Flight Checks',
    path: '/about',
    icon: <FcAbout />,
    //iconClosed: <AiIcons.AiOutlineDownload/>,
    //iconOpened: <AiIcons.AiOutlineDownload/>

    
  },
  {
    title: 'Install and Configure',
    path: '/install',
    icon: <IoAnalyticsOutline />,
    //iconClosed: <AiIcons.AiOutlineDownload></AiIcons.AiOutlineDownload>,
    //iconOpened: <AiIcons.AiOutlineDownload/>,

    subNav: [
      {
        title: 'SLE',
        path: '/s0',
        icon:  <AiIcons.AiOutlineCheckCircle />
      },
      {
        title: 'SLS',
        path: '/s1',
        icon:  <AiIcons.AiOutlineCheckCircle />
      },
      {
        title: 'COS',
        path: '/overview/s2',
        icon:  <AiIcons.AiOutlineCheckCircle />
      },
      {
        title: 'HFP',
        path: '/overview/s3',
        icon:  <AiIcons.AiOutlineCheckCircle />
      },
      {
        title: 'CSM',
        path: '/csm',
        icon:  <AiIcons.AiOutlineCheckCircle />,
        //iconClosed: <AiIcons.AiOutlineCheckCircle />,
        //iconOpened: <AiIcons.AiOutlineCheckCircle />,

        sub2Nav:[
          {
            title: 'Stage-0 Prerequisites',
            path: '/s0',
            icon:  <AiIcons.AiOutlineCheckCircle />
          },
          {
            title: 'Stage-1 Ceph Image upgrade',
            path: '/s1',
            icon:  <AiIcons.AiOutlineCheckCircle />
          },
          {
            title: 'Stage-2 Kubernetes Upgrade',
            path: '/s2',
            icon:  <AiIcons.AiOutlineCheckCircle />
          },
          {
            title: 'Stage-3 CSM Service Upgrade',
            path: '/s3',
            icon:  <AiIcons.AiOutlineCheckCircle />
          },
          {
            title: 'Stage-4 Ceph Upgrade',
            path: '/s4',
            icon:  <AiIcons.AiOutlineCheckCircle />
          }

        ]
      
      
    
  }]}
];

// Define the component for a single navigation item
const NavItem = (props: { item: itemType }) => {
  const [dropdown, setDropdown] = useState(false);

  // Toggle the dropdown when the caret icon is clicked
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className="link">
        <div className="icon">{props.item.icon}</div>
        <Link style={{ textDecoration: "none" }} to={props.item.path}>
          <div className="link_text">{props.item.title}</div>
        </Link>
        {props.item.subNav && (
          <div onClick={toggleDropdown} style={{ cursor: "pointer" }}>
            {dropdown ? (
              <AiFillCaretUp style={{ padding: "0px 10px" }} />
            ) : (
              <AiFillCaretDown style={{ padding: "0px 10px" }} />
            )}
          </div>
        )}
      </div>
      {props.item.subNav && dropdown && (
        <div>
          {props.item.subNav.map((subItem:any, index:any) => (
            <div className="link1" key={index}>
              <div className="icon1">{subItem.icon}</div>
              <Link style={{ textDecoration: "none" }} to={subItem.path}>
                <div className="link_text1">{subItem.title}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Define the component for the navigation menu
function SidebarItem({
  item,
  sidebar,
  dropdown,
  setDropdown,
}: {
  item: ItemType;
  sidebar: boolean;
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <div className="link">
        <div className="icon">{item.icon}</div>
        <Link style={{ textDecoration: "none" }} to={item.path}>
          <div className="link_text">{sidebar ? item.title : ""}</div>
        </Link>
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
      {item.subNav
        ? item.subNav.map((subItem) => (
            <div>
              <SidebarItem
                item={subItem}
                sidebar={sidebar}
                dropdown={dropdown}
                setDropdown={setDropdown}
              />
              {sidebar && subItem.sub2Nav && (
                <div className={dropdown ? "subnav" : "subnav-hidden"}>
                  {subItem.sub2Nav.map((sub2Item) => (
                    <div>
                      <SidebarItem
                        item={sub2Item}
                        sidebar={sidebar}
                        dropdown={dropdown}
                        setDropdown={setDropdown}
                      />
                      {sidebar && sub2Item.sub3Nav && (
                        <div
                          className={dropdown ? "subnav" : "subnav-hidden"}
                        >
                          {sub2Item.sub3Nav.map((sub3Item) => (
                            <SidebarItem
                              item={sub3Item}
                              sidebar={sidebar}
                              dropdown={dropdown}
                              setDropdown={setDropdown}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        : ""}
    </div>
  );
}

*/
interface Props {
  sidebar: boolean;
  item: itemType ;
}
const SidebarItem = ({ item1, sidebar }: any) => {
  const [dropdown, setDropdown] = useState(false);

  if (item1.subNav1 ) {
    return (
      <div>
        <div className="link">
          <div className="icon">{item1.icon}</div>
        <Link style={{"textDecoration":"none"}} to={item1.path}>
          <div className="link_text">{sidebar ? item1.title : ""}</div>

          </Link>
          {sidebar && item1.subNav1 && !dropdown ? (
            <AiFillCaretDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
            ></AiFillCaretDown>
            ) : (
              ""
              )}
          {sidebar && item1.subNav1 && dropdown ? (
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
        {item1.subNav1
          ? item1.subNav1.map((i: any, index: any) => {
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
          : ""}
      </div>
    );
  }
 
        
  else {
    return (
      <div>

<Link style={{"textDecoration":"none"}} to={item1.path}>
      <div className="link">
        <div className="icon">{item1.icon}</div>
        <div className="link_text">{sidebar ? item1.title : ""}</div>

        {sidebar && item1.subNav1 && !dropdown ? (
          <AiFillCaretDown
            onClick={() => {
              setDropdown(!dropdown);
            }}
            style={{ padding: "0px 10px" }}
          ></AiFillCaretDown>
        ) : (
          ""
        )}
        {sidebar && item1.subNav1 && dropdown ? (
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
        {item.subNav
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
          : ""}
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

*/