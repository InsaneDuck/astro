import { QueryStatus } from "@reduxjs/toolkit/query";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { GetPosts, PostView } from "lemmy-js-client";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { StyleSheet } from "react-native";

import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { View } from "@/common/View";
import { useGetPostsQuery } from "@/store/api/post-api";

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

  const { data: response, isFetching } = props.useFetch(props.requestArgs);

  useEffect(() => {
    if (response) {
      const temp: Record<string, ListEntity> = response.reduce(
        (acc: Record<string, ListEntity>, listEntity) => {
          const id = props.entityIdExtractor(listEntity);
          acc[id] = listEntity;
          return acc;
        },
        {},
      );

      setData((prevState) => Object.assign(prevState, temp));
    }

    // setData((prevState) =>
    //   response ? [...prevState, ...response] : prevState,
    // );
  }, [page]);

  const setRenderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    const listEntity = data[item];
    const element = props.renderItem(listEntity, index);
    return <>{element}</>;
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

const Test = () => {
  const args: GetPosts = {};
  const Header = () => {
    return <></>;
  };
  const entityIdExtractor = (): any => {};
  const renderItem = (item: PostView, index: number) => {
    return <PostViewComponent postView={item} type="feed" />;
  };
  return (
    <FetchFlashList
      ListHeaderComponent={Header}
      entityIdExtractor={entityIdExtractor}
      estimatedItemSize={200}
      renderItem={renderItem}
      useFetch={useGetPostsQuery}
      requestArgs={args}
    />
  );
};
