import React, { FC } from "react";
import { ActionSheetIOS, TouchableOpacity, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { Icon } from "@/components/common/Icon";
import { Text } from "@/components/common/Text";
import { feedActions } from "@/store/feed-slice";
import { AppDispatch, RootState } from "@/store/store";

type FeedSorterProps = object;

export const FeedSorter: FC<FeedSorterProps> = (props) => {
  //todo maybe replace it with one in expo https://github.com/expo/react-native-action-sheet
  const sort = useSelector((state: RootState) => state.feed.sort);
  const theme = useColorScheme() || "dark";
  const dispatch = useDispatch<AppDispatch>();
  const onPress = (): any => {
    all();
  };

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
        title: "Sort by",
        options: allOptions,
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            dispatch(feedActions.setSort("Active"));
            break;
          case 2:
            dispatch(feedActions.setSort("Hot"));
            break;
          case 3:
            dispatch(feedActions.setSort("New"));
            break;
          case 4:
            dispatch(feedActions.setSort("Old"));
            break;
          case 5:
            dispatch(feedActions.setSort("MostComments"));
            break;
          case 6:
            dispatch(feedActions.setSort("NewComments"));
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
            dispatch(feedActions.setSort("TopAll"));
            break;
          case 2:
            dispatch(feedActions.setSort("TopHour"));
            break;
          case 3:
            dispatch(feedActions.setSort("TopDay"));
            break;
          case 4:
            dispatch(feedActions.setSort("TopWeek"));
            break;
          case 5:
            dispatch(feedActions.setSort("TopMonth"));
            break;
          case 6:
            dispatch(feedActions.setSort("TopYear"));
            break;
          case 7:
            dispatch(feedActions.setSort("TopSixHour"));
            break;
          case 8:
            dispatch(feedActions.setSort("TopTwelveHour"));
            break;
          case 9:
            dispatch(feedActions.setSort("TopThreeMonths"));
            break;
          case 10:
            dispatch(feedActions.setSort("TopSixMonths"));
            break;
          case 11:
            dispatch(feedActions.setSort("TopNineMonths"));
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
