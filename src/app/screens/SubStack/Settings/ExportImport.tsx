import React from "react";

import { List } from "@/app/components/List/List";
import { ListText } from "@/app/components/List/ListText";
import { View } from "@/common/View";

export const ExportImport = () => {
  //todo fix this
  const description = `Export app config to a .json file
  You can select items that need to be exported
  Export will not include any passwords`;

  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <List title="EXPORT AND IMPORT" description={description}>
        <ListText name="Export" />
        <ListText name="Import" />
      </List>
    </View>
  );
};
