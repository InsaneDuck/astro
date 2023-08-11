import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Instance } from "lemmy-js-client";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

import { ServersListItem } from "@/app/screens/Accounts/ServersListItem";
import { InvertedSeparator } from "@/common/InvertedSeparator";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { useGetFederatedInstancesQuery } from "@/store/api/instanceApi";

export const ServersList = () => {
  const { data } = useGetFederatedInstancesQuery();

  const listItem = ({ item, index }: ListRenderItemInfo<Instance>) => {
    return (
      <ServersListItem
        style={{
          borderTopStartRadius: index === 0 ? 13 : 0,
          borderTopEndRadius: index === 0 ? 13 : 0,
          marginTop: index === 0 ? 20 : 0,
        }}
        key={item.id}
        item={item}
      />
    );
  };

  const keyExtractor = useCallback(
    (item: Instance, index: number) => item.id.toString(),
    [],
  );

  return (
    <View style={styles.container}>
      {data?.federated_instances?.allowed ? (
        <FlashList
          data={data.federated_instances.blocked}
          renderItem={listItem}
          keyExtractor={keyExtractor}
          estimatedItemSize={500}
          ItemSeparatorComponent={InvertedSeparator}
          showsVerticalScrollIndicator={false}
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
    overflow: "hidden",
  },
});
