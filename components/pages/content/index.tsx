import React, { PropsWithChildren } from "react";
import { ScrollView } from "react-native";

const PageContent = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={{ marginBottom: 20, paddingBottom: 182 }}>
      {children}
    </ScrollView>
  );
};

export default PageContent;
