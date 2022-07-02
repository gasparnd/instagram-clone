import React from "react";
import { FlatList } from "react-native";
import ContentCard from "../ContentCard";

interface IProps {
  HeaderComponent?: any;
  data: any[];
}

const ContentList = (props: IProps) => {
  const { data, HeaderComponent } = props;
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<HeaderComponent />}
      renderItem={({ item }) => <ContentCard contentUrl={item} />}
    />
  );
};

export default ContentList;
