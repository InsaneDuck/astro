import { QueryStatus } from "@reduxjs/toolkit/query";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { View } from "@/common/View";

type FlashListComponentProps<ListEntity, Request> = {
  ListHeaderComponent: React.ComponentType<any>;
  entityIdExtractor: (listEntity: ListEntity) => string;
  estimatedItemSize: number;
  renderItem: ({ item, index }: ListRenderItemInfo<ListEntity>) => ReactNode;
  useFetch: (args: Request) => ReturnTypeOfUseFetch<Request, ListEntity>;
  requestArgs: Request;
};

type ReturnTypeOfUseFetch<Request, ListEntity> = {
  data: ListEntity[] | undefined;
  isFetching: boolean;
  currentData: ListEntity[] | undefined;
  originalArgs: Request | undefined;
  isUninitialized: boolean;
  isSuccess: boolean;
  startedTimeStamp: number | undefined;
  fulfilledTimeStamp: number | undefined;
  isError: boolean;
  error: any;
  isLoading: boolean;
  status: QueryStatus;
  requestId: string;
  refetch: () => ListEntity[];
  endpointName: string | undefined;
};

export function FlashListComponent<ListEntity, Request>(
  props: FlashListComponentProps<ListEntity, Request>,
) {
  const [data, setData] = useState<Record<string, ListEntity>>({});
  const [page, setPage] = useState(1);

  const { data: response, isFetching } = props.useFetch(props.requestArgs);

  useEffect(() => {
    if (response) {
      const temp: Record<string, ListEntity> = {};
      response.map((listEntity) => {
        const id = props.entityIdExtractor(listEntity);
        temp[id] = listEntity;
      });
      setData((prevState) => Object.assign(prevState, temp));
    }

    // setData((prevState) =>
    //   response ? [...prevState, ...response] : prevState,
    // );
  }, [page]);

  const setRenderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    const listEntity = data[item];
    console.log(item, index, listEntity);
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
          data={Object.keys(data)}
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
}

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
