import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

const SearchInput = ({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) => {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity style={styles.searchIcon}>
        <IconSymbol name="search1" size={30} color="#ffffff" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="جستجو بر اساس وضعیت، تاریخ و عنوان"
        placeholderTextColor="#888"
        textAlign="right"
        showSoftInputOnFocus
        inputMode="text"
        keyboardType="default"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 16,
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: "#444",
    // paddingHorizontal: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
  },
});
export default SearchInput;
