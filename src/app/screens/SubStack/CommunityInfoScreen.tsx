import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { UserButton } from "@/app/components/Buttons/UserButton";
import { Text } from "@/common/Text";
import { View } from "@/common/View";
import { useGetCommunityQuery } from "@/store/api/communityApi";
import { RootState } from "@/store/store";
import { useThemeColor } from "@/theming/useThemeColor";

export const CommunityInfoScreen = () => {
  const community = useSelector((state: RootState) => state.shared.community);
  const { data: communityResponse } = useGetCommunityQuery({
    id: community.id,
  });
  const borderColor = useThemeColor("borderColor");
  //console.log(communityResponse);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "90%" }}>
          <View
            style={[
              {
                backgroundColor: borderColor,
              },
              styles.textWrapper,
            ]}
          >
            <Text>{community.description}</Text>
          </View>

          {communityResponse && (
            <>
              <View
                style={[
                  {
                    backgroundColor: borderColor,
                  },
                  styles.textWrapper,
                ]}
              >
                <Text>
                  Subscribers :{" "}
                  {communityResponse.community_view.counts.subscribers}
                </Text>
                <Text>
                  Posts : {communityResponse.community_view.counts.posts}
                </Text>
                <Text>
                  Comments : {communityResponse.community_view.counts.comments}
                </Text>
                <Text>
                  Published :{" "}
                  {communityResponse.community_view.counts.published}
                </Text>

                <Text>
                  Hot Rank : {communityResponse.community_view.counts.hot_rank}
                </Text>
                <Text>
                  Users/Day :
                  {communityResponse.community_view.counts.users_active_day}
                </Text>
                <Text>
                  Users/Week :
                  {communityResponse.community_view.counts.users_active_week}
                </Text>
                <Text>
                  Users/Month :
                  {communityResponse.community_view.counts.users_active_month}
                </Text>
                <Text>
                  Users/Half Year :
                  {
                    communityResponse.community_view.counts
                      .users_active_half_year
                  }
                </Text>
              </View>
              <View
                style={[
                  {
                    backgroundColor: borderColor,
                  },
                  styles.textWrapper,
                ]}
              >
                <Text style={{ fontSize: 18 }}>Moderators</Text>
                {communityResponse.moderators.map((mod) => {
                  return (
                    <UserButton
                      style={{ marginTop: 10 }}
                      person={mod.moderator}
                    />
                  );
                })}
              </View>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    padding: 15,
    overflow: "hidden",
    borderRadius: 13,
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
});
