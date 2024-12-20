import { plcaholderColor, tintColorLight } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Controller } from "react-hook-form";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface UploadImageFieldProps {
  control: any;
  name: string;
  label: string;
}

const UploadImageField: React.FC<UploadImageFieldProps> = ({
  control,
  name,
  label,
}) => {
  const pickImage = async (onChange: (image: string) => void) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("لطفا اجازه دسترسی به گالری را بدهید.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.assets[0].uri);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TouchableOpacity
          style={styles.container}
          onPress={() => pickImage(onChange)}
        >
          {value ? (
            <>
              <Image source={{ uri: value }} style={styles.imagePreview} />
              <Text style={styles.uploadedLabel}>تصویر آپلود شد</Text>
            </>
          ) : (
            <>
              <Ionicons
                name="cloud-upload-outline"
                size={20}
                color="#999"
                style={styles.icon}
              />
              <Text style={styles.label}>{label}</Text>
            </>
          )}
          <Text style={[styles.label, value && styles.uploadedLabel]}>
            {value ? "تصویر آپلود شد" : label}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginVertical: 8,
    backgroundColor: "#444",
    marginTop:0,
    marginBottom:12

  },
  icon: {
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: plcaholderColor,
  },
  uploadedLabel: {
    color: tintColorLight,
  },
  imagePreview: {
    width: 30,
    height: 30,
    borderRadius: 4,
    marginRight: 8,
  },
});

export default UploadImageField;
