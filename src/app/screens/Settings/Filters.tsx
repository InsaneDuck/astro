import React from "react";

import { Form } from "@/common/Form/Form";
import { FormText } from "@/common/Form/FormText";
import { View } from "@/common/View";

export const Filters = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Form
        title="KEYWORDS"
        description="Block any post from appearing on your feed by certain words in their title"
      >
        <FormText name="+ Add Keywords" />
      </Form>
      <Form title="COMMUNITIES">
        <FormText name="+ Add Community" />
      </Form>
      <Form title="USERS">
        <FormText name="+ Add Users" />
      </Form>
    </View>
  );
};
