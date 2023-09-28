import { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { AddServer } from "@/app/components/AccountSwitcher/AddServer";
import { Form } from "@/common/Form/Form";
import { FormButton } from "@/common/Form/FormButton";
import { FormText } from "@/common/Form/FormText";
import { RootState } from "@/store/store";

type ServerSelectorProps = object;
export const ServerSelector: FC<ServerSelectorProps> = (props) => {
  const server = useSelector(
    (state: RootState) => state.auth.currentUser.serverUrl,
  );

  const [formState, setFormState] = useState<boolean>(false);

  function toggle() {
    setFormState((prevState) => !prevState);
  }

  const onSelectingServer = () => {};

  return (
    <>
      {!formState && (
        <>
          <Form title="SELECT SERVER">
            {server && <FormText name={server} onPress={onSelectingServer} />}
          </Form>
          <Form>
            <FormButton title="+ Add Server" onPress={toggle} />
          </Form>
        </>
      )}

      {formState && (
        <>
          <AddServer />
          <Form>
            <FormButton title="Cancel" onPress={toggle} color="red" />
          </Form>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({});
