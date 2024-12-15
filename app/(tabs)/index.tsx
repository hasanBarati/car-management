import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Notifications from "@/components/Notifications";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Href, useRouter } from "expo-router";

export default function HomeScreen() {
  const router=useRouter()
  const render = () => {
    return homeData.map((data) => (
      <TouchableOpacity key={data.id} onPress={() =>router.push(data.url as Href)}>
        <ThemedView  style={[styles.cardContainer]}>
          <View style={styles.cardTextContainer}>
            <ThemedText style={[styles.cardTitle]} type="titleColor">
              {data.title}
            </ThemedText>
            <ThemedText style={[styles.cardTitle]}>{data.subtitle}</ThemedText>
          </View>

          <Image
            source={data.image}
            style={styles.cardImage}
          />
        </ThemedView>
      </TouchableOpacity>
    ));
  };
  return (
    <ScrollView style={{ marginBottom: 20, paddingBottom: 182 }}>
      <View>
        <Notifications />
        <ThemedView style={styles.card}>       
          {render()}
        </ThemedView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    paddingBottom: 100,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // gap: 10,
    columnGap: 15,
    rowGap: 110,
    justifyContent: "center",
    backgroundColor:"none"

  },
  cardContainer: {
    width: 180,
    height: 160,
    backgroundColor: "#202221",
    borderRadius: 20,
    textAlign: "center",
  },
  cardTitle: {
    textAlign: "center",
  },
  cardTextContainer: {
    padding: 10,
  },
  cardImage:{
    alignSelf: "center",
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

const homeData = [
  {
    title: "اطلاعات ECU",
    subtitle: "مشاهده آخرین وضعیت خودرو",
    image: require(`@/assets/images/ecu.jpg`),
    id: 1,

  },
  {
    title: "تاریخچه تعمیرات",
    subtitle: "تعمیرات انجام شده در کیلومتر 23 هزار",
    image: require(`@/assets/images/repaire.jpg`),
    id: 2,
  },
  {
    title: "مسیرهای طی شده",
    subtitle: "مسیر تهران به شمال 200km مسافت طی شده",
    image: require(`@/assets/images/route.webp`),
    id: 3,
  },
  {
    title: "یادآورها",
    subtitle: "تعمیرات، تعویض، بیمه، تایر در کیلومتر 50 هزار",
    image: require(`@/assets/images/calendar.png`),
    id: 4,
    url:"/(reminders)"
  },
  {
    title: "گزارشات مالی",
    subtitle: "هزینه تعمیرات انجام شده 150 هزار تومان",
    image: require(`@/assets/images/financial.jpg`),
    id: 5,
  },
  {
    title: "سرویس های دوره ای",
    subtitle: "تعمیرات دوره ای انجام شده در کیلومتر 80 هزار",
    image: require(`@/assets/images/repaire.jpg`),
    id: 6,
        url:"/(pages)/services"
  },
];
