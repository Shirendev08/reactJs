import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { useState, useEffect } from "react";
export default function Topbar() {
  const [datas, setDatas] = useState();
  const urlLookup = "http://btax.mandakh.org:8000/lookup/";
  useEffect(() => {
    const bodyChiglel = {
      action: "aimagsum",
    };
    sendRequest(urlLookup, bodyChiglel);
  }, []);

  const sendRequest = async (url, body) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(async (response) => {
        setDatas(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
   console.log(datas.data[19].sumduud[7].sumname)
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
        <span className="logo">{datas && datas.data[19].sumduud[7].sumname}</span>
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
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarIconBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarIconBadge">1</span>
        </div>
      </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>




    </div>
  )
}
 