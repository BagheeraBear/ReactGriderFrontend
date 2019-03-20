import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui cointainer comments">
      <ApprovalCard>
        <CommentDetail
        author="Sammy"
        timeAgo="Today at 4:00PM"
        avatar={faker.image.avatar()}
        commentText="Great!"
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
        author="Bunny"
        timeAgo="Yesterday at 02.15AM"
        avatar={faker.image.avatar()}
        commentText="Great again!"
        />
        </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
        author="Kimmy"
        timeAgo="Today at 05.25"
        avatar={faker.image.avatar()}
        commentText="Truly Great!"
        />
      </ApprovalCard>
      
      <ApprovalCard>
        <CommentDetail
        author="Sander"
        timeAgo="Todat at 01.00AM"
        avatar={faker.image.avatar()}
        commentText="Not only Great, but the Best!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css

// Next: Fix images and break it up
// faker.js
