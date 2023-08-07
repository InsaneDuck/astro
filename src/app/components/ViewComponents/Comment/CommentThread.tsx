import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { CommentViewComponent } from "@/app/components/ViewComponents/Comment/CommentViewComponent";
import { RootState } from "@/store/store";

type CommentThreadProps = {
  commendId: EntityId;
  index: number;
};

const count = 0;
export const CommentThread: FC<CommentThreadProps> = (props) => {
  const comment = useSelector(
    (state: RootState) =>
      state.post.comments.entities[props.commendId.toString()],
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
