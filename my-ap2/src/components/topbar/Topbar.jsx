import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { useState, useEffect } from "react";
import {urlLookup, sendRequest} from "../../settings";
import React from 'react';
import { Button, notification } from 'antd';
const openNotification = (title, desc) => {
  notification.open({
    message: title,
    description:
      desc,
    onClick: () => {
      console.log(desc , 'Clicked!');
    },
  });
};

export default function Topbar({ilgeesen}) {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };
    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  const onClickPrimary= (cnum, cname) =>{
    openNotification(cnum, cname);
    console.log(cname);
  }

  const DisplayData=datas && datas.data.map((gazar)=>{
    return (
     <div key={gazar.chiglelnum}>
       <h5><Button type="primary" onClick={()=>onClickPrimary(gazar.chiglelnum, gazar.chiglelname)}>
       {gazar.chiglelname}</Button></h5>
       <br/>
     </div>
    )
  });
  
  return (
    <>
   {/* {DisplayData} */}
      
    <div className="topbarContainer">


      <div className="topbarLeft">
        <span className="logo">lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friend, post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">Homepage</div>
        <div className="topbarLink">Timeline</div>
        
      

      <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person/>
          <span className="topbarIconBadge">{ilgeesen.data.friendRequest}</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">{ilgeesen.data.chats}</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">{ilgeesen.data.notif}</span>
        </div>
      </div>
      </div>
      <img src={ilgeesen.data.profilePhoto} alt="" className="topbarImg"/>




    </div></>
  )
}
 