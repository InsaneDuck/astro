import { Card, CardProps } from "@/components/common/Cards/Card";
import { Swipe } from "@/components/common/Swipe/Swipe";
import React, { FC } from "react";

type SwipeableCardProps = {} & CardProps;

export const SwipeableCard: FC<SwipeableCardProps> = React.memo((props) => {
  return (
    <Swipe>
      <Card {...props} />
    </Swipe>
  );
});
