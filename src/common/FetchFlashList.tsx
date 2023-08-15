import { QueryStatus } from "@reduxjs/toolkit/query";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StyleSheet } from "react-native";

import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";

type FetchFlashListFlashListProps<ListEntity, Request> = {
  ListHeaderComponent: React.ComponentType<any>;
  entityIdExtractor: (listEntity: ListEntity) => string;
  estimatedItemSize: number;
  renderItem: (item: ListEntity, index: number) => ReactNode;
  useFetch: (args: Request) => ReturnTypeOfUseFetch<Request, ListEntity>;
  requestArgs: Request;
};

type ReturnTypeOfUseFetch<Request, ListEntity> = {
  data?: ListEntity[];
  isFetching: boolean;
  currentData?: ListEntity[];
  originalArgs?: Request;
  isUninitialized: boolean;
  isSuccess: boolean;
  startedTimeStamp?: number;
  fulfilledTimeStamp?: number;
  isError: boolean;
  error?: any;
  isLoading: boolean;
  status: QueryStatus;
  requestId?: string;
  refetch: () => void;
  endpointName?: string;
};

export function FetchFlashList<ListEntity, Request>(
  props: FetchFlashListFlashListProps<ListEntity, Request>,
) {
  const [data, setData] = useState<Record<string, ListEntity>>({});
  const [page, setPage] = useState(1);

  const {
    data: response,
    isFetching,
    isLoading,
  } = props.useFetch({
    page,
    ...props.requestArgs,
  });

  useEffect(() => {
    if (response) {
      const temp: Record<string, ListEntity> = response.reduce(
        (acc: Record<string, ListEntity>, listEntity) => {
          const id = props.entityIdExtractor(listEntity);
          !acc[id] && (acc[id] = listEntity);
          return acc;
        },
        {},
      );
      setData((prevState) => Object.assign(prevState, temp));
    }
  }, [page]);

  const setRenderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    const listEntity = data[item];
    const element = props.renderItem(listEntity, index);
    return <>{element}</>;
  };

  //removing callback fixed issue
  const onEndReached = useCallback(() => {
    !isFetching && setPage((prevState) => prevState + 1);
  }, [isFetching]);

  const ListFooterComponent = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [],
  );

  return (
    <>
      {response && (
        <FlashList
          data={Object.keys(data)}
          ListHeaderComponent={props.ListHeaderComponent}
          renderItem={setRenderItem}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={ListFooterComponent}
          estimatedItemSize={props.estimatedItemSize}
          onEndReached={onEndReached}
          refreshing={isLoading}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
