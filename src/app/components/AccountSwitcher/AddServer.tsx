import { Form } from "@/common/Form/Form";
import { FormButton } from "@/common/Form/FormButton";
import { FormInput } from "@/common/Form/FormInput";

export const AddServer = () => {
  return (
    <>
      <Form title="LOGIN">
        <FormInput placeholder="Name (Primary, Secondary..etc)" />
        <FormInput placeholder="Server URL" />
        <FormInput placeholder="Username" />
        <FormInput placeholder="Password" />
      </Form>
      <Form>
        <FormButton title="Add" />
      </Form>
    </>
  );
};
