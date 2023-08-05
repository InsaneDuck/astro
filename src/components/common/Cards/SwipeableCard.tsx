import React, { FC } from "react";

import { Card, CardProps } from "@/components/common/Cards/Card";
import { Swipe } from "@/components/common/Gestures/Swipe";

type SwipeableCardProps = object & CardProps;

export const SwipeableCard: FC<SwipeableCardProps> = React.memo((props) => {
  return (
    <Swipe>
      <Card {...props} />
    </Swipe>
  );
});
