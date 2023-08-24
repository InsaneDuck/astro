import React from "react";

import { Form } from "@/app/components/Form/Form";
import { FormText } from "@/app/components/Form/FormText";
import { View } from "@/common/View";

export const About = () => {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Form>
        <FormText name="Version" />
        <FormText name="Github" />
        <FormText name="License" />
        <FormText name="Acknowledgements" />
        <FormText name="Terms of Use" />
      </Form>
    </View>
  );
};
