import { createContext } from "react";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Signup_option from './Screens/User_Signup';
import SendOTP from "./Screens/SendOTP_Screen";
import ProfileScreen from "./Screens/Profile_Screen";
import Find_Driver from "./Screens/Find_Driver_Screen";
import ChooseIdentity from "./Screens/Choose_Identity";
import Edit_Profile from "./Screens/Edit_Profile_Screen";
import Bottom_Tab from "./Screens/Bottom_Tab";
import OTP_Conformation from "./Screens/OTPConformation_Screen";
import SignUp_Form from "./Screens/SignupForm_Screen";
import SchoolList from "./Screens/SchoolList_Screen";
import SchoolDetails from "./Screens/SchoolDetails_Screen";
import DriverDetails from "./Screens/DriverDetails_Screen";
import Subscription from "./Screens/Subscription_Screen";
import LiveMap from "./Screens/Map_Screen";
import VehicleDetails from './Screens/VehicleDetails_Screen'
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

    
<Stack.Screen
          name="Signup_option"
          component={Signup_option}
          options={{ headerShown: false }}
        />
  <Stack.Screen
          name="VehicleDetails"
          component={VehicleDetails}
          options={{ headerShown: false }}
        />


      <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="SendOTP"
          component={SendOTP}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChooseIdentity"
          component={ChooseIdentity}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SignUp_Form"
          component={SignUp_Form}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Bottom_Tab"
          component={Bottom_Tab}
          options={{ headerShown: false }}
        />

        

        <Stack.Screen name="Edit_Profile" component={Edit_Profile} />

        <Stack.Screen name="LiveMap" component={LiveMap} />

        <Stack.Screen
          name="OTP_Conformation"
          component={OTP_Conformation}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Profile_Screen" component={ProfileScreen} />
        <Stack.Screen name="Find_Driver" component={Find_Driver} />
        <Stack.Screen name="SchoolDetails" component={SchoolDetails} />
        <Stack.Screen name="SchoolList" component={SchoolList} />
        <Stack.Screen name="DriverDetails" component={DriverDetails} />
        <Stack.Screen name="Subscription" component={Subscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
