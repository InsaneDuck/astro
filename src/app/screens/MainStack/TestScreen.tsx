import React, { FC } from "react";

type TestScreenProps = object;

export const TestScreen: FC<TestScreenProps> = (props) => {
  // const { data, isLoading, isFetching, error } = useGetPostsQuery({
  //   sort: "New",
  //   page: 1,
  //   limit: 50,
  // });
  //
  // const renderItem = ({ item, index }: ListRenderItemInfo<EntityId>) => {
  //   const postView = data?.entities[item];
  //
  //   return postView ? (
  //     <PostViewComponent
  //       key={item.toString()}
  //       postView={postView}
  //       type="feed"
  //     />
  //   ) : (
  //     <></>
  //   );
  // };
  //
  // return (
  //   <FlatList
  //     data={data?.ids}
  //     renderItem={renderItem}
  //     ItemSeparatorComponent={Separator}
  //   />
  // );
  return <></>;
};

// const Comments = () => {
//   const { comments, loading, page, error } = useSelector(
//     (state: RootState) => state.post,
//   );
//   const dispatch = useDispatch<AppDispatch>();
//   useEffect(() => {
//     dispatch(fetchComments());
//   }, []);
//
//   const commentItem = useCallback(
//     ({ item, index }: ListRenderItemInfo<EntityId>) => {
//       //console.log("item", item);
//       return <CommentThread commendId={item} index={index} />;
//     },
//     [],
//   );
//   const keyExtractor = useCallback(
//     (item: EntityId, index: number) => item.toString(),
//     [],
//   );
//   return (
//     <>
//       {comments && (
//         <FlatList
//           data={comments?.ids}
//           keyExtractor={keyExtractor}
//           renderItem={commentItem}
//           ItemSeparatorComponent={Separator}
//           onEndReachedThreshold={0.01}
//           refreshing={loading === "pending"}
//         />
//       )}
//     </>
//   );
// };
