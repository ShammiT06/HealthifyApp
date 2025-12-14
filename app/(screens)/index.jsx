import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import Styles from "../../assets/Styles/screens-styles/age.styles";

export default function Index() {
    const [selectedGender, setSelectedGender] = useState(null);
    console.log(selectedGender)

    return (
        <SafeAreaView style={Styles.view}>
            <View style={Styles.container}>
                <View style={Styles.headerCont}>
                    <Text style={Styles.Header}>What’s Your Gender</Text>
                    <Text style={Styles.subText}>
                        Select your gender to personalize your experience
                    </Text>
                </View>
                <View style={Styles.genderContainer}>
                    <TouchableOpacity
                        style={[
                            Styles.circle,
                            selectedGender === "male"
                                ? Styles.activeCircle
                                : Styles.inactiveCircle,
                        ]}
                        onPress={() => setSelectedGender("male")}
                    >
                        <FontAwesome
                            name="mars"
                            size={50}
                            color={selectedGender === "male" ? "#fff" : "#222"}
                        />
                    </TouchableOpacity>
                    <Text style={Styles.genderText}>Male</Text>

                    <TouchableOpacity
                        style={[
                            Styles.circle,
                            selectedGender === "female"
                                ? Styles.activeCircle
                                : Styles.inactiveCircle,
                        ]}
                        onPress={() => setSelectedGender("female")}
                    >
                        <FontAwesome
                            name="venus"
                            size={50}
                            color={selectedGender === "female" ? "#fff" : "#222"}
                        />
                    </TouchableOpacity>
                    <Text style={Styles.genderText}>Female</Text>
                </View>
                <View style={Styles.confmBtn}>
                    <TouchableOpacity>
                        <Text style={Styles.btnTxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
