import React from "react";

import { Form } from "@/app/components/Form/Form";
import { FormText } from "@/app/components/Form/FormText";
import { View } from "@/common/View";

export const ExportImport = () => {
  //todo fix this
  const description = `Export app config to a .json file
  You can select items that need to be exported
  Export will not include any passwords`;

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Form title="EXPORT AND IMPORT" description={description}>
        <FormText name="Export" />
        <FormText name="Import" />
      </Form>
    </View>
  );
};
