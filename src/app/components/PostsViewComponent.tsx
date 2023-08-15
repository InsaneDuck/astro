import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import {
  Community,
  GetPosts,
  ListingType,
  PostView,
  SortType,
} from "lemmy-js-client";
import React, { FC, useEffect, useMemo, useState } from "react";

import { CommunityViewComponent } from "@/app/components/Community/CommunityViewComponent";
import { PostViewComponent } from "@/app/components/Post/PostViewComponent";
import { Loading } from "@/common/Loading";
import { Separator } from "@/common/Separator";
import { useGetPostsQuery } from "@/store/api/post-api";

type PostsViewComponentProps = {
  community?: Community;
  sort: SortType;
  type: ListingType;
};

export const PostsViewComponent: FC<PostsViewComponentProps> = (props) => {
  const { community, sort, type: type_ } = props;
  const {
    data: posts,
    isFetching,
    nextPage,
  } = useGetPosts(
    community
      ? { community_id: community.id, sort, limit: 50 }
      : { sort, type_, limit: 50 },
  );
  const ListHeader = () => {
    return community && <CommunityViewComponent community={community} />;
  };

  const ListItem = ({ item, index }: ListRenderItemInfo<PostView>) => {
    const postView = item;

    return postView ? (
      <PostViewComponent postView={postView} type="feed" />
    ) : (
      <></>
    );
  };

  const onEndReached = () => {
    nextPage();
  };

  const keyExtractor = (item: PostView, index: number) => {
    return item.post.id.toString();
  };

  const ListFooterComponent = useMemo(
    () => (isFetching ? <Loading style={{ padding: 100 }} /> : null),
    [],
  );

  return (
    <>
      <FlashList
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooterComponent}
        data={posts}
        renderItem={ListItem}
        ItemSeparatorComponent={Separator}
        onEndReached={onEndReached}
        estimatedItemSize={200}
        refreshing={isFetching}
      />
    </>
  );
};

const useGetPosts = (arg: GetPosts) => {
  const { page: ignored, ...others } = arg;
  const [page, setPage] = useState(1);
  const {
    data: response,
    isFetching,
    ...otherProps
  } = useGetPostsQuery({
    page,
    ...others,
  });

  const [data, setData] = useState<PostView[]>([]);

  useEffect(() => {
    response && setData((prevState) => [...prevState, ...response]);
  }, [data]);

  useEffect(() => {
    setData((prevState) =>
      response ? [...prevState, ...response] : prevState,
    );
  }, [page, data]);

  const nextPage = () => {
    if (!isFetching) {
      setPage((prevState) => prevState + 1);
    }
  };

  return { data, isFetching, nextPage, ...otherProps };
};
