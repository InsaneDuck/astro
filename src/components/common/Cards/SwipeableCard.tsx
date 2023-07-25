import Card, { CardProps } from "@/components/common/Cards/Card";
import Swipe from "@/components/common/Swipe/Swipe";
import React, { FC, ReactNode } from "react";

type SwipeableCardProps = {
  children?: ReactNode;
} & CardProps;

const SwipeableCard: FC<SwipeableCardProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Swipe>
      <Card {...otherProps}>{children}</Card>
    </Swipe>
  );
};

export default React.memo(SwipeableCard);
//backgroundColor: "#181a1c",
