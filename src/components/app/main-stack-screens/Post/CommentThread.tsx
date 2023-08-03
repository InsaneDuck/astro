import { CommentViewComponent } from "@/components/app/main-stack-screens/Post/CommentViewComponent";
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
  const comment = useSelector(
    (state: RootState) =>
      state.comments.allComments.entities[props.commendId.toString()],
  );

  // const path = comment?.comment ? comment.comment.path.split(".") : [];
  // if (path.length > 2) {
  //   return null;
  // }
  //const pathProcessor = () => {};
  //todo
  //take path and if it has more than one item in path return null or else return comment

  //console.log("Rendering comments, count = ", count++);

  return comment && <CommentViewComponent comment={comment} />;
};
