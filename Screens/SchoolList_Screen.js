import { ScrollView, View } from "react-native";
import SchoolInfo_Button from "../components/School_Info_Button";
export default function SchoolList({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
          onPress={() => {
            navigation.navigate("SchoolDetails");
          }}
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
        <SchoolInfo_Button
          schoolname="School Name"
          logolink={require("../assets/schoollogo.png")}
          vehiclecount="23"
          address="Mizail Chock"
        />
      </View>
    </ScrollView>
  );
}
