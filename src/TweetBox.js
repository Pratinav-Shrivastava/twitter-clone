import React from "react"
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core"

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://fastly.picsum.photos/id/1082/200/300.jpg?hmac=AaFCHuEst4e0Oy553UCibOtysEKByBAl3XsTR8n4e1c" alt="Profile Icon" />
          <input placeholder="What's Happening?" type='text'/>
          {/* <h2>TweetBox</h2> */}
        </div>
        <Button className="tweetBox__tweetButton">Post</Button>
      </form>
      
    </div>
  )
}

export default TweetBox
