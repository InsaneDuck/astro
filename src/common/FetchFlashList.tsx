import { QueryStatus } from "@reduxjs/toolkit/query";
import { FlashList } from "@shopify/flash-list";
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import {
  Action,
  EntityId,
  IdSelector,
  useStateNormalized,
} from "@/hooks/useStateNormalized";

type FetchFlashListFlashListProps<ListEntity, Request> = {
  ListHeaderComponent: React.ComponentType<any>;
  entityIdExtractor: IdSelector<ListEntity>;
  estimatedItemSize: number;
  renderItem: (item: ListEntity | undefined, index: number) => ReactNode;
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
  const {
    useFetch,
    estimatedItemSize,
    renderItem,
    requestArgs,
    ListHeaderComponent,
    entityIdExtractor,
  } = props;
  const { data, dispatch } = useStateNormalized<ListEntity>({
    selectId: entityIdExtractor,
    sortComparer: false,
  });
  const [page, setPage] = useState(1);

  const {
    data: response,
    isFetching,
    isLoading,
  } = useFetch({
    page,
    ...requestArgs,
  });

  useEffect(() => {
    dispatch({ type: Action.UPSERT_MANY, payload: response });
  }, [response]);

  //removing callback fixed issue
  const onEndReached = useCallback(() => {
    !isFetching && setPage((prevState) => prevState + 1);
  }, [isFetching]);

  const ListFooterComponent = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [],
  );

  const setRenderItem = ({ item, index }: ListRenderItemInfo<EntityId>) => {
    const listEntity = data?.entities[item];
    const element = renderItem(listEntity, index);
    return <>{element}</>;
  };

  const value = true;

  if (value) {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <Text style={{ textAlign: "center" }}>FlatList</Text>
        <FlatList
          data={data.ids}
          ListHeaderComponent={ListHeaderComponent}
          renderItem={setRenderItem}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={ListFooterComponent}
          onEndReached={onEndReached}
          refreshing={isLoading}
        />
      </View>
    );
  }

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlashList
        data={data.ids}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={({ item }) => <Text style={{ padding: 20 }}>{item}</Text>}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooterComponent}
        onEndReached={onEndReached}
        refreshing={isLoading}
        estimatedItemSize={200}
      />
    </View>
  );
}
