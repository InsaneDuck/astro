import React, { FC, useEffect, useState } from "react";
import { ActionSheetIOS, TouchableOpacity, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@/common/Icon";
import { Text } from "@/common/Text";
import { sharedActions } from "@/store/shared-slice";
import { AppDispatch, RootState } from "@/store/store";

type FeedSorterProps = object;

export const FeedSorter: FC<FeedSorterProps> = (props) => {
  //todo maybe replace it with one in expo https://github.com/expo/react-native-action-sheet
  const sort = useSelector((state: RootState) => state.shared.feedSort);
  const [temp, setTemp] = useState(sort);
  const theme = useColorScheme() || "dark";
  const dispatch = useDispatch<AppDispatch>();
  const onPress = (): any => {
    all();
  };

  useEffect(() => {
    dispatch(sharedActions.setFeedSort(temp));
  }, [temp]);

  const all = () => {
    const allOptions = [
      "Cancel",
      "Active",
      "Hot",
      "New",
      "Old",
      "MostComments",
      "NewComments",
      "Top",
    ];
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Sort feed by",
        options: allOptions,
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            setTemp("Active");
            break;
          case 2:
            setTemp("Hot");
            break;
          case 3:
            setTemp("New");
            break;
          case 4:
            setTemp("Old");
            break;
          case 5:
            setTemp("MostComments");
            break;
          case 6:
            setTemp("NewComments");
            break;
          case 7:
            top();
            break;
        }
      },
    );
  };

  const top = () => {
    const topOptions = [
      "Cancel",
      "All Time",
      "Last Hour",
      "All Day",
      "This Week",
      "This Month",
      "This Year",
      "Last Six Hours",
      "Last Twelve Hours",
      "Last Three Months",
      "Last Six Months",
      "Last Nine Months",
    ];
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Top of",
        options: topOptions,
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            setTemp("TopAll");
            break;
          case 2:
            setTemp("TopHour");
            break;
          case 3:
            setTemp("TopDay");
            break;
          case 4:
            setTemp("TopWeek");
            break;
          case 5:
            setTemp("TopMonth");
            break;
          case 6:
            setTemp("TopYear");
            break;
          case 7:
            setTemp("TopSixHour");
            break;
          case 8:
            setTemp("TopTwelveHour");
            break;
          case 9:
            setTemp("TopThreeMonths");
            break;
          case 10:
            setTemp("TopSixMonths");
            break;
          case 11:
            setTemp("TopNineMonths");
            break;
        }
      },
    );
  };

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        overflow: "hidden",
        height: "auto",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18 }}>{sort}</Text>
      <Icon icon="sort" color="#ccc" size={20} />
    </TouchableOpacity>
  );
};
