import { useForm } from "react-hook-form";
import { Alert } from "react-native";

import { Form } from "@/common/Form/Form";
import { FormButton } from "@/common/Form/FormButton";
import { FormInput } from "@/common/Form/FormInput";

type FormData = {
  name: string;
  serverUrl: string;
  userName: string;
  password: string;
};
export const AddServer = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onAddServer = (data: any) => {
    Alert.alert(JSON.stringify(data));
  };
  return (
    <>
      <Form title="LOGIN">
        <FormInput
          placeholder="Name (Primary, Secondary..etc)"
          {...register("name")}
        />
        <FormInput placeholder="Server URL" {...register("serverUrl")} />
        <FormInput placeholder="Username" {...register("userName")} />
        <FormInput placeholder="Password" {...register("password")} />
      </Form>
      <Form>
        <FormButton title="Add" onPress={handleSubmit(onAddServer)} />
      </Form>
    </>
  );
};
