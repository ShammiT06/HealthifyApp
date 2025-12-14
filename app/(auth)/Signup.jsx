import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Signup() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/auth/login.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <Text style={styles.headerTxt}>Sign Up</Text>
          <Text style={styles.subTxt}>
            Already have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => router.push("/(auth)")}
            >
              Log In
            </Text>
          </Text>
        </View>


        <View style={styles.card}>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#999"
              style={styles.input}
            />
          </View>


          <View style={styles.inputBox}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

  
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>


          <View style={styles.inputBox}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirm}
              style={styles.input}
            />
            <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
              <Ionicons
                name={showConfirm ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>


          <View style={styles.termsRow}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setAgree(!agree)}
            >
              {agree && (
                <Ionicons name="checkmark" size={14} color="#2F80ED" />
              )}
            </TouchableOpacity>
            <Text style={styles.termsTxt}>
              Terms and Condition Applied*{" "}
              <Text style={styles.link}>Learn More</Text>
            </Text>
          </View>


          <TouchableOpacity style={styles.signupBtn}>
            <Text style={styles.signupTxt}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.orTxt}>Or</Text>
          <TouchableOpacity style={styles.googleBtn}>
            <Ionicons name="logo-google" size={20} color="#EA4335" />
            <Text style={styles.googleTxt}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    marginBottom: 22,
    alignItems: "center",
  },
  headerTxt: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
  },
  subTxt: {
    marginTop: 6,
    color: "#EAEAEA",
    fontSize: 13,
  },
  link: {
    color: "#2F80ED",
    fontWeight: "600",
  },

  card: {
    width: 330,
    padding: 22,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.75)",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1893C4",
  },
  input: {
    flex: 1,
    fontSize: 14,
  },

  termsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 4,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  termsTxt: {
    fontSize: 12,
    color: "#555",
  },

  signupBtn: {
    backgroundColor: "#F2994A",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  signupTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  orTxt: {
    textAlign: "center",
    marginVertical: 12,
    color: "#777",
    fontSize: 13,
  },

  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  googleTxt: {
    fontSize: 15,
    fontWeight: "600",
  },
});
