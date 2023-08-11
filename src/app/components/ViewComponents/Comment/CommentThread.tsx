import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";

import { CommentViewComponent } from "@/app/components/ViewComponents/Comment/CommentViewComponent";
import { useGetCommentsQuery } from "@/store/api/postApi";

type CommentThreadProps = {
  commendId: EntityId;
  postId: EntityId;
  index: number;
};

const count = 0;
export const CommentThread: FC<CommentThreadProps> = (props) => {
  const { data: commentView } = useGetCommentsQuery(
    {
      limit: 50,
      page: 1,
      post_id: Number(props.postId),
      max_depth: 5,
    },
    {
      selectFromResult: (state) => {
        const data = state.data?.entities[props.commendId];
        return { data };
      },
    },
  );
  // const path = comment?.comment ? comment.comment.path.split(".") : [];
  // if (path.length > 2) {
  //   return null;
  // }
  //const pathProcessor = () => {};
  //todo
  //take path and if it has more than one item in path return null or else return comment

  //console.log("Rendering comments, count = ", count++);

  return (
    commentView && (
      <CommentViewComponent comment={commentView} index={props.index} />
    )
  );
};
