import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { View } from "@/common/View";

type FlashListComponentProps<ListEntity, Request> = {
  ListHeaderComponent: React.ComponentType<any>;
  estimatedItemSize: number;
  useFetch: (args: Request) => { data: ListEntity[]; isFetching: boolean };
  renderItem: ({ item, index }: ListRenderItemInfo<ListEntity>) => ReactNode;
};

export const FlashListComponent = <ListEntity, Request>(
  props: FlashListComponentProps<ListEntity, Request>,
) => {
  const [data, setData] = useState<ListEntity[]>([]);
  const [page, setPage] = useState(1);

  const { data: response, isFetching } = props.useFetch({ page } as Request);

  useEffect(() => {
    setData((prevState) => [...prevState, ...response]);
  }, [page]);

  const setRenderItem = ({ item, index }: ListRenderItemInfo<ListEntity>) => {
    console.log(item, index);
    //props.renderItem(item,index)
    return <></>;
  };

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
          ListHeaderComponent={props.ListHeaderComponent}
          renderItem={setRenderItem}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={ListFooterComponent}
          estimatedItemSize={props.estimatedItemSize}
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
