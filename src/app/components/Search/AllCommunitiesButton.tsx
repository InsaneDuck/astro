import { useNavigation } from "@react-navigation/core";
import { FC } from "react";
import { StyleSheet } from "react-native";

import { FormText } from "@/app/components/Form/FormText";
import { View } from "@/common/View";
import { SubStackNavigation } from "@/router/SubStackLayout";

type AllCommunitiesButtonProps = object;
export const AllCommunitiesButton: FC<AllCommunitiesButtonProps> = (props) => {
  const navigation = useNavigation<SubStackNavigation>();
  const goToALlCommunities = (): any => {
    navigation.navigate("AllCommunities");
  };
  return (
    <View style={{ width: "90%", borderRadius: 13, overflow: "hidden" }}>
      <FormText name="All Communities" onPress={goToALlCommunities} />
    </View>
  );
};

const styles = StyleSheet.create({});
