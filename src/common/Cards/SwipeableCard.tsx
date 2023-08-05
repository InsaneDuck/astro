import React, { FC } from "react";

import { Card, CardProps } from "@/common/Cards/Card";
import { Swipe } from "@/common/Gestures/Swipe";

type SwipeableCardProps = object & CardProps;

export const SwipeableCard: FC<SwipeableCardProps> = React.memo((props) => {
  return (
    <Swipe>
      <Card {...props} />
    </Swipe>
  );
});
