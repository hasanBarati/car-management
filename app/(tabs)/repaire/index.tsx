import SearchInput from "@/components/form/SearchInput";
import RepaireCard from "@/components/ReapireCard";
import URLs from "@/constants/Urls";
import { CarRepairHistory } from "@/types/ndex";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const RepaireHistory = () => {
  const RenderItem = ({ item }: { item: CarRepairHistory }) => {
    return <RepaireCard item={item} />;
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      
      <SearchInput />
      <View style={styles.cardContainer}>
        <FlatList
          data={carRepairHistoryData}
          renderItem={({ item }) => <RenderItem item={item} />}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => router.push(`/${URLs.ADD_OR_EDIT_REPAIRE}`)}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 14,
  },
  cardContainer: {
    height: "auto",
    flex: 1,
  },
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    backgroundColor: "#2ecc71",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  fabText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default RepaireHistory;

const carRepairHistoryData: CarRepairHistory[] = [
  {
    id: 1,
    title: "تعمیر واشر سر سیلندر",
    date: "104/12/10",
    reason: "بالا رفتن غیرعادی دمای موتور",
    cost: 400000,
    brand:"M-CO",
    description:
      "باز کردن پیچ‌های سرسیلندر، تمیز کردن سطح سیلندرها و بلوک موتور، نصب واشرهای جدید، تست و بررسی موتور",
  },
  {
    id: 2,
    title: "تعویض لنت ترمز",
    date: "104/11/20",
    reason: "کاهش عملکرد ترمز و صدای غیرعادی",
    brand:"بوش",
    cost: 300000,
    description:
      "تعویض لنت‌های ترمز جلو و عقب، بررسی دیسک ترمزها و تنظیم مجدد سیستم ترمز",
  },
  {
    id: 3,
    title: "سرویس کامل خودرو",
    date: "104/10/15",
    reason: "سرویس دوره‌ای جهت نگهداری بهتر",
    cost: 600000,
    brand:"زیمنس",
    description:
      "تعویض روغن موتور، فیلتر هوا، فیلتر روغن، بررسی سیستم تعلیق و ترمزها",
  },
  {
    id: 4,
    title: "تعویض تسمه تایم",
    date: "104/09/25",
    reason: "پارگی جزئی تسمه تایم",
    cost: 500000,
    brand:"زیمنس",
    description:
      "باز کردن تسمه قدیمی و نصب تسمه تایم جدید، بررسی وضعیت پولی‌ها و بلبرینگ‌ها",
  },
  {
    id: 5,
    title: "تعمیر دینام خودرو",
    date: "104/08/18",
    reason: "شارژ نشدن باتری",
    cost: 350000,
    description: "تعویض ذغال دینام، تست ولتاژ و تنظیم دوباره دینام",
  },
  {
    id: 6,
    title: "تعویض شمع‌های موتور",
    date: "104/07/10",
    reason: "افت شتاب و لرزش موتور",
    cost: 200000,
    description: "باز کردن شمع‌های قدیمی، نصب شمع‌های جدید و تنظیم گپ شمع",
  },
  {
    id: 7,
    title: "تعمیر جلوبندی خودرو",
    date: "104/06/30",
    reason: "صدای تق تق از چرخ‌ها",
    cost: 700000,
    description: "تعویض سیبک‌ها، تعمیر طبق‌ها و بررسی سیستم تعلیق جلو",
  },
  {
    id: 8,
    title: "تعویض باتری خودرو",
    date: "104/05/25",
    reason: "خرابی باتری و عدم استارت خودرو",
    cost: 450000,
    description: "نصب باتری جدید ۶۰ آمپر و تست برق‌کشی خودرو",
  },
  {
    id: 9,
    title: "تعمیر کولر خودرو",
    date: "104/04/15",
    reason: "خنک نکردن کولر",
    cost: 500000,
    description: "شارژ گاز کولر، تعویض کمپرسور و بررسی مدار کولر",
  },
  {
    id: 10,
    title: "تعویض روغن گیربکس",
    date: "104/03/20",
    reason: "صدای غیرعادی گیربکس هنگام تعویض دنده",
    cost: 550000,
    description: "تخلیه روغن قدیمی گیربکس، شستشو و پر کردن روغن گیربکس جدید",
  },
];
