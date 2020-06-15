import React from "react";

function Userdetail(props) {
  let userDetail = props.userProfile;
  // console.log(userDetail, "props dta");

  return (
    <div className="user_detail_hero">
      <img src={userDetail.avatar_url}></img>
      <h2>{userDetail.login}</h2>
      <p>{userDetail.location}</p>
      <br />
      <span>{`Followers : ${userDetail.followers}`}</span>
      <span>{`Following : ${userDetail.following}`}</span>
    </div>
  );
}

export default Userdetail;
