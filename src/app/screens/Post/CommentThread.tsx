import { CommentViewComponent } from "@/app/screens/Post/CommentViewComponent";
import { RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type CommentThreadProps = {
  commendId: EntityId;
  index: number;
};
let count = 0;
export const CommentThread: FC<CommentThreadProps> = (props) => {
  const allComments = useSelector(
    (state: RootState) => state.comments.allComments,
  );

  const comment = allComments.entities[props.commendId.toString()];

  const pathProcessor = () => {
    const path = comment?.comment ? comment.comment.path.split(".") : [];
    if (path.length < 3) {
      //todo
    } else {
    }
  };
  //todo
  //take path and if it has more than one item in path return null or else return comment

  //console.log("Rendering comments, count = ", count++);

  return comment && <CommentViewComponent comment={comment} />;
};
