import { Card } from "@/components/common/Cards/Card";
import { Text } from "@/components/themed-components/Text";
import { RootState } from "@/store/store";
import { EntityId } from "@reduxjs/toolkit";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type CommentProps = {
  commendId: EntityId;
  index: number;
};
let count = 0;
export const Comment: FC<CommentProps> = (props) => {
  const comment = useSelector(
    (state: RootState) =>
      state.comments.allComments.entities[props.commendId.toString()],
  );
  //console.log("Rendering comments, count = ", count++);
  return (
    comment && (
      <Card style={{ margin: 10 }}>
        <Text>{comment?.comment.content}</Text>
      </Card>
    )
  );
};
