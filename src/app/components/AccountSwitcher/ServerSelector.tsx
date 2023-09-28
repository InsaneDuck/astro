import { FC } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Form } from "@/common/Form/Form";
import { FormInput } from "@/common/Form/FormInput";
import { FormText } from "@/common/Form/FormText";
import { RootState } from "@/store/store";

type ServerSelectorProps = object;
export const ServerSelector: FC<ServerSelectorProps> = (props) => {
  const server = useSelector(
    (state: RootState) => state.auth.currentUser.serverUrl,
  );

  const onSelectingServer = () => {};
  return (
    <Form title="SELECT SERVER">
      {server && <FormText name={server} onPress={onSelectingServer} />}
      <FormInput placeholder="+ Add Server" />
    </Form>
  );
};

const styles = StyleSheet.create({});
