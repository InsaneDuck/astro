import { EntityId } from "@reduxjs/toolkit";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { View } from "@/common/View";

type FlashListComponentProps = {
  ItemSeparatorComponent: React.ComponentType<any>;
  ListFooterComponent: React.ComponentType<any>;
  ListHeaderComponent: React.ComponentType<any>;
  data: readonly EntityId[];
  estimatedItemSize: number;
  onEndReached: () => void;
  refreshing: boolean;
  renderItem: ListRenderItem<unknown>;
  fetchFn: (page: number) => [];
};

export const FlashListComponent = <K extends []>({
  ListHeaderComponent,
  renderItem,
  ItemSeparatorComponent,
  estimatedItemSize,
  fetchFn,
}: FlashListComponentProps) => {
  const [data, setData] = useState<K[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = fetchFn(page);
    };
    fetchData();
  }, [page]);

  function onEndReached(): any {
    if (!isFetching) {
      setPage((prevState) => prevState + 1);
    }
  }

  const ListFooterComponent = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <FlashList
          data={data}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemSeparatorComponent && Separator}
          ListFooterComponent={ListFooterComponent}
          estimatedItemSize={estimatedItemSize}
          onEndReached={onEndReached}
          refreshing={isFetching}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  inner: { width: "90%", height: "100%" },
});

const useFetchedData = <Response, Request>(useHook: Function) => {
  const [temp, setTemp] = useState([]);
  const [page, setPage] = useState(1);
  const [request, setRequest] = useState<Request>();
  const {
    data,
    isFetching,
    error,
    isError,
    isLoading,
    currentData,
    endpointName,
    fulfilledTimeStamp,
    startedTimeStamp,
    isSuccess,
    isUninitialized,
    originalArgs,
    refetch,
    requestId,
    status,
  } = useHook();

  useEffect(() => {
    const fetchData = async () => {};
    const response = fetchData();
  }, [page]);

  return {
    temp,
    page,
    setPage,
    data,
    isFetching,
    error,
    isError,
    isLoading,
    currentData,
    endpointName,
    fulfilledTimeStamp,
    startedTimeStamp,
    isSuccess,
    isUninitialized,
    originalArgs,
    refetch,
    requestId,
    status,
  };
};
