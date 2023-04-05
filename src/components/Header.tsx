import {useState,useEffect} from 'react';
// import * as TbIcons from "react-icons/tb"
import TextField from "@mui/material/TextField";
// import List from "./List";
import "../styles/Header.css";
import { IconContext } from "react-icons/lib";
import logo from "../components/logohp.png";
import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { InputAdornment } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl'
import { ClassNames } from '@emotion/react';
const Header1 = () => {

  const closeModal=()=>{
    let modal = document.getElementById("myModal");
    
    if(modal!=null){
      modal.style.display="none"
    }
  
  }
  const showModal=()=>{
    let modal = document.getElementById("myModal");
  
    if(modal!=null){
      modal.style.display="block"
    }

  }
  const [recentArr, setrecentArr] = useState<any>([])
  const [overview, setoverview] = useState<any>([])
  useEffect(() => {
    if(localStorage.getItem("recents")!==null){
      let a = JSON.parse(localStorage.getItem('recents') || '{}');
      setrecentArr(a);
    }
  
 
  }, [])
  
  
  
  const filterSearch=(e:any)=>{
    let input = (document.getElementById("outlined-basic") as any).value;
  
    input=input.toLowerCase();
    // input=input.toLowerCase();
    let y = (document.getElementsByClassName('searchbar') as any);
    let x = (document.getElementsByClassName('search_list') as any);

    // console.log(x[0].innerHTML)
    // y[0].style.display="none"
    
   console.log(x[1].innerHTML)
    for (let i = 0; i < x.length; i++) { 
      let z=Math.floor(i/4);
      
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
    
        // y[z].style.display="none"
      }
      else {
        x[i].style.display="list-item";
     
          
          y[z].style.display="flex"
            
                           
      }
  }
  if(e.keyCode===13){
    if(input!==null){
      let x=[...recentArr];
      x.push(input)
      localStorage.setItem("recents",JSON.stringify(x))
      setrecentArr(x)
      
    }

  }

  }
 
  return (
    <div className="header">
      <h1 className="logo">
        <img src={logo} width="60px" height="30px"></img>HPE Cray EX Console
      </h1>
      <div className="search">
        <div>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search "
            placeholder="Search docs,flows,nodes" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  < BiIcons.BiSearchAlt/>
                </InputAdornment>
                
              ),
              
            }}
            onClick={showModal}
            onKeyUp={filterSearch}
          />
         
         
        </div>

        {/* <div className="icon1">

          <IconContext.Provider value={{ className: "top-react-icons" }}>
            <BiIcons.BiSearchAlt />
          </IconContext.Provider>
        </div> */}
        

  
  
   

          <div id="myModal" className="modal">
            {/* <!-- Modal content --> */}
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <div className="searchbar">
                <div className="sideContent">
                <div className="side ">Recents</div>
                  <ul style={{"listStyle":"none"}}>
                    {recentArr.map((e:any)=>{
                      
                      return <li className="search_list" key={e}><Link to={"/overview"}>{e}</Link></li>
                    })}
                  
                  {/* <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li> 
                  <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li> 
                  <li className="search_list"><Link to={"/overview"}>Upgrade CSM-Stage-0</Link></li> */}
                  </ul>
                </div>
              </div>
                <hr></hr>
                <div className="searchbar">
                
                <div className="sideContent">
                <div className="side ">Install</div>
                  <ul style={{"listStyle":"none"}}>
                  
                  <li className="search_list"><Link to={"/overview"}>Validate CSM Health</Link></li>
                  <li className="search_list"><Link to={"/overview"}>Install CSM</Link></li>
                  {/* <li className="search_list"><Link to={"/overview"}>Install CSM-Stage-0</Link></li> 
                  <li className="search_list"><Link to={"/overview"}>Install CSM-Stage-0</Link></li>*/}</ul> 
                </div>
              </div>
                <hr></hr>
                {/* <div className="searchbar">
                <div className="sideContent">
                <div className="side search_list">Upgrade</div>
                  <ul style={{"listStyle":"none"}}>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>
                  <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li></ul>
                </div>
              </div> */}
              <div className="searchbar">
                <div className="sideContent">
                <div className="side ">Upgrade</div>
                <div className='up'>
                {SidebarData.map((a:any) => {
                  return a.subNav && a.subNav.map((b:any)=>{
                    return b.subNav1 && b.subNav1.map((c:any)=>{
              return(
                <>
              {/* <ul style={{"listStyle":"none"}}> */}
                {/* <li className="search_list">Upgrage {c.title}</li> */}
                <li className="search_list"><Link to={c.path}>Upgrade {c.title}</Link></li>
                {/* <li>Name: {employee.name}</li>
                <li>Age: {employee.age}</li>
                <li>City: {employee.city}</li> */}
                {/* </ul> */}
            
          </>
  )
                    
})});
              
  

              })}
              
              </div>
                </div>
                
              </div>
                <hr></hr>
                <div className="searchbar">
                <div className="sideContent">
                <div className="side ">Ops Docs and Commands</div>
                  <ul style={{"listStyle":"none"}}>
                  <li className="search_list"><Link to={"/overview"}>CSM: Change VCS password</Link></li>
                  <li className="search_list"><Link to={"/overview"}>SMA: View Grafana</Link></li>
                  <li className="search_list"><Link to={"/overview"}>WLM:Execute job</Link></li>
                  {/* <li className="search_list"><Link to={"/overview"}>NCN CSM-Stage-0</Link></li>*/}</ul> 
                </div>
              </div>
              <hr></hr>
                <div className="searchbar">
                <div className="sideContent">
                <div className="side "><span style={{"lineHeight":"2px"}}>NCNs</span></div>
                  <ul style={{"listStyle":"none"}}>
                  <li className="search_list"><Link to={"/overview"}>ncm-m001</Link></li>
                  <li className="search_list"><Link to={"/overview"}>ncm-m002</Link></li>
                  <li className="search_list"><Link to={"/overview"}>ncm-m003</Link></li>
                  <li className="search_list"><Link to={"/overview"}>ncm-m004</Link></li></ul>

                  
                </div>
                
              </div>
                <hr></hr>
                <div className="searchbar">
                <div className="sideContent">
                <div className="side "><span style={{"lineHeight":"2px"}}>UANs</span></div>
                  <ul style={{"listStyle":"none"}}>
                  <li className="search_list"><Link to={"/overview"}>uan-01</Link></li>
                  <li className="search_list"><Link to={"/overview"}>uan-02</Link></li>
                  <li className="search_list"><Link to={"/overview"}>uan-03</Link></li>
                  {/* <li className="search_list"><Link to={"/overview"}>checking CSM-Stage-0</Link></li> */}</ul>
                </div>
              </div>
              


            </div>
          </div>
          </div>

</div>
   

    /*
        <div className="headerheader">
           
                <span className="logo"><img src={logo} width="60px" height="30px" ></img></span>
                <span><h2>HPE Cray EX Concole</h2></span>
                
                <span className="extra">
                <span className="main">
      
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search            "
        />
      </div>
     
    </span>

                </span>
            
        </div>*/
  );
};

export default Header1;
