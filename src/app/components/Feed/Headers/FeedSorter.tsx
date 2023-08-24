import { SortType } from "lemmy-js-client";
import React, { FC, useEffect, useState } from "react";
import { ActionSheetIOS, TouchableOpacity, useColorScheme } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ActionSheetButton } from "@/app/components/Feed/ActionSheetButton";
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

  enum allOptions {
    Cancel = "Cancel",
    Active = "Active",
    Hot = "Hot",
    New = "New",
    Old = "Old",
    MostComments = "Most Comments",
    NewComments = "New Comments",
    Top = "Top",
  }

  enum topOptions {
    Cancel = "Cancel",
    TopAll = "All Time",
    TopHour = "Last Hour",
    TopSixHour = "Last Six Hours",
    TopTwelveHour = "Last Twelve Hours",
    TopDay = "All Day",
    TopWeek = "This Week",
    TopMonth = "This Month",
    TopThreeMonths = "Last Three Months",
    TopSixMonths = "Last Six Months",
    TopNineMonths = "Last Nine Months",
    TopYear = "This Year",
  }

  const onValueChanged = () => {};
  const temp1 = (
    <ActionSheetButton
      title="Select sort option"
      options={allOptions}
      selected="All Time"
      onValueChange={onValueChanged}
      triggerOnMount
    />
  );

  const temp2 = (
    <ActionSheetButton
      title="Select top option"
      options={topOptions}
      selected="All Time"
      onValueChange={onValueChanged}
      triggerOnMount
    />
  );

  const onPress = (): any => {
    all();
  };

  useEffect(() => {
    dispatch(sharedActions.setFeedSort(temp));
  }, [temp]);

  const all = () => {
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Sort feed by",
        options: Object.values(allOptions),
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        if (buttonIndex === 7) {
          top();
        } else if (buttonIndex !== 0) {
          const value = Object.keys(allOptions)[buttonIndex] as SortType;
          setTemp(value);
        }
      },
    );
  };

  const top = () => {
    return ActionSheetIOS.showActionSheetWithOptions(
      {
        title: "Top of",
        options: Object.values(topOptions),
        cancelButtonIndex: 0,
        userInterfaceStyle: theme,
      },
      (buttonIndex) => {
        if (buttonIndex !== 0) {
          const value = Object.keys(topOptions)[buttonIndex] as SortType;
          setTemp(value);
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
