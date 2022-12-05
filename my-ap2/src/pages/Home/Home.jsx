import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import { useState, useEffect } from "react";
import "./Home.css"
import { hariu } from "../../getdata/dummy";
export default function Home() {

  
  return (
    <>
   

    <Topbar ilgeesen={hariu}/>
    <div className="homeContainer">
    <Sidebar friends = {hariu.data}/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
  )
}
 