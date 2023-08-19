import { QueryStatus } from "@reduxjs/toolkit/query";
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
import { View } from "@/common/View";
import {
  Action,
  EntityId,
  IdSelector,
  useStateNormalized,
} from "@/hooks/useStateNormalized";

type FetchFlashListFlashListProps<ListEntity, Request> = {
  ListHeaderComponent: React.ComponentType<any>;
  entityIdExtractor: (listEntity: ListEntity) => string;
  estimatedItemSize: number;
  renderItem: (item: ListEntity | undefined, index: number) => ReactNode;
  useFetch: (args: Request) => ReturnTypeOfUseFetch<Request, ListEntity>;
  requestArgs: Request;
  idExtractor: IdSelector<ListEntity>;
};

// type temp<Request, Response> = UseQueryHookResult<
//   QueryDefinition<Request, BaseQueryFn, never, Response, "lemmy">,
//   UseQueryStateDefaultResult<
//     QueryDefinition<Request, BaseQueryFn, never, Response, "lemmy">
//   >
// >;

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

type ReturnTypeOfUseLazyFetch<Request, ListEntity> = {
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
  const { data, dispatch } = useStateNormalized<ListEntity>({
    selectId: props.idExtractor,
    sortComparer: false,
  });
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
    dispatch({ type: Action.UPSERT_MANY, payload: response });
  }, [response]);

  const setRenderItem = ({ item, index }: ListRenderItemInfo<EntityId>) => {
    const listEntity = data?.entities[item];
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
  console.log(data.ids.length);

  // const temp =
  //   data.ids.length > 0 ? (
  //     <FlashList
  //       data={data.ids}
  //       ListHeaderComponent={props.ListHeaderComponent}
  //       renderItem={setRenderItem}
  //       ItemSeparatorComponent={Separator}
  //       ListFooterComponent={ListFooterComponent}
  //       estimatedItemSize={props.estimatedItemSize}
  //       onEndReached={onEndReached}
  //       refreshing={isLoading}
  //     />
  //   ) : (
  //     <>
  //       <Loading />
  //       <Text>Not working</Text>
  //     </>
  //   );

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <FlatList
        data={data.ids}
        ListHeaderComponent={props.ListHeaderComponent}
        renderItem={setRenderItem}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooterComponent}
        onEndReached={onEndReached}
        refreshing={isLoading}
      />
    </View>
  );
}
