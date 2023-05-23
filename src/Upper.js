import React from "react";
import "./Upper.css";

function Upper() {
  return (
    <div className="upper">
      <div className="logo">
        <img
          className="imgg"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
          alt=""
        />
      </div>
      <div className="doc">
        <div className="docName">Untitled document</div>
        <div className="options">
          <button className="btn button1">File</button>
          <button className="btn button2">Edit</button>
          <button className="btn button3">View</button>
          <button className="btn button4">Insert</button>
          <button className="btn button5">Format</button>
          <button className="btn button6">Tools</button>
          <button className="btn button7">Extentions</button>
          <button className="btn button8">Help</button>
        </div>
      </div>
      <div className="right">
        <div className="comment">
            <button className="cmnt">
                <img className="cImg" src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="" />
            </button>
        </div>
        <div className="share">
          <button className="cmnt">
              <img className="sImg" src="https://2.bp.blogspot.com/-wuhkBGAM8bQ/Vt-Kz80of4I/AAAAAAAAUJU/v99P5XMEnLA/s1600/share-button.png" alt="" />
          </button>
        </div>
        <div className="gmail">
        <button className="cmnt">
          <img className="gImg" src="https://w7.pngwing.com/pngs/282/256/png-transparent-user-profile-avatar-computer-icons-google-account-black-accounting-user-interface-thumbnail.png" alt="" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Upper;
