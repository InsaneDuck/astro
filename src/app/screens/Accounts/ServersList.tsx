import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Instance } from "lemmy-js-client";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

import { ServerListItem } from "@/app/screens/Accounts/ServerListItem";
import { InvertedSeparator } from "@/common/InvertedSeparator";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { useGetFederatedInstancesQuery } from "@/store/api/instanceApi";

export const ServersList = () => {
  const { data } = useGetFederatedInstancesQuery();

  const listItem = ({ item, index }: ListRenderItemInfo<Instance>) => {
    return <ServerListItem key={item.id} item={item} />;
  };

  const keyExtractor = useCallback(
    (item: Instance, index: number) => item.id.toString(),
    [],
  );

  return (
    <View style={styles.container}>
      {data?.federated_instances?.allowed ? (
        <FlashList
          data={data.federated_instances.linked}
          renderItem={listItem}
          keyExtractor={keyExtractor}
          estimatedItemSize={500}
          ItemSeparatorComponent={InvertedSeparator}
        />
      ) : (
        <Text>Data</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,

    borderRadius: 13,
    overflow: "hidden",
  },
});
