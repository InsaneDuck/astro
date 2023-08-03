import { IconButton } from "@/components/common/IconButton";
import React, { FC, useState } from "react";
import { ActionSheetIOS, useColorScheme } from "react-native";

type FeedSorterProps = {};

export const FeedSorter: FC<FeedSorterProps> = (props) => {
  //todo maybe replace it with one in expo https://github.com/expo/react-native-action-sheet
  const [sort, setSort] = useState<string>();
  const theme = useColorScheme() || "dark";
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
            setSort("Active");
            break;
          case 2:
            setSort("Hot");
            break;
          case 3:
            setSort("New");
            break;
          case 4:
            setSort("Old");
            break;
          case 5:
            setSort("Most Comments");
            break;
          case 6:
            setSort("New Comments");
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
            setSort("TopAll");
            break;
          case 2:
            setSort("TopHour");
            break;
          case 3:
            setSort("TopDay");
            break;
          case 4:
            setSort("TopWeek");
            break;
          case 5:
            setSort("TopMonth");
            break;
          case 6:
            setSort("TopYear");
            break;
          case 7:
            setSort("TopSixHour");
            break;
          case 8:
            setSort("TopTwelveHour");
            break;
          case 9:
            setSort("TopThreeMonths");
            break;
          case 10:
            setSort("TopSixMonths");
            break;
          case 11:
            setSort("TopNineMonths");
            break;
        }
      },
    );
  };

  return <IconButton name={"filter"} onPress={onPress} />;
};
