import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const navigate = () => {
    router.push("/(auth)/Signup");
  };

  const login = () => {
    if (!email || !password) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    // TEMP: replace with API call
    Alert.alert("Success", "Login successful");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/auth/login.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTxt}>
            Sign in to your {"\n"} Account
          </Text>
          <Text style={styles.innerHeader}>
            Enter your email and password to log in
          </Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>
          {/* GOOGLE */}
          <TouchableOpacity style={styles.googleBtn}>
            <Ionicons name="logo-google" size={20} color="#EA4335" />
            <Text style={styles.googleTxt}>Continue with Google</Text>
          </TouchableOpacity>

          {/* DIVIDER */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.orTxt}>Or login with</Text>
            <View style={styles.line} />
          </View>

          {/* EMAIL */}
          <View style={styles.inputBox}>
            <Ionicons name="mail-outline" size={20} color="#666" />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#999"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputBox}>
            <Ionicons name="lock-closed-outline" size={20} color="#666" />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>

          {/* REMEMBER + FORGOT */}
          <View style={styles.rowBetween}>
            <TouchableOpacity
              style={styles.remember}
              onPress={() => setRemember(!remember)}
            >
              <View style={styles.checkbox}>
                {remember && (
                  <Ionicons name="checkmark" size={12} color="#2F80ED" />
                )}
              </View>
              <Text style={styles.rememberTxt}>Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.forgotTxt}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          {/* LOGIN */}
          <TouchableOpacity style={styles.loginBtn} onPress={login}>
            <Text style={styles.loginTxt}>Log In</Text>
          </TouchableOpacity>

          {/* SIGNUP */}
          <Text style={styles.signupTxt}>
            Don’t have an account?{" "}
            <Text style={styles.signupLink} onPress={navigate}>
              Sign Up
            </Text>
          </Text>
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
    marginBottom: 30,
  },
  headerTxt: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
  },
  innerHeader: {
    textAlign: "center",
    fontSize: 13,
    color: "#EAEAEA",
    marginTop: 6,
  },

  card: {
    width: 330,
    padding: 22,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.75)",
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
    borderColor: "#1893C4",
  },
  googleTxt: {
    fontSize: 15,
    fontWeight: "600",
  },

  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orTxt: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "#777",
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#1893C4",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  remember: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 3,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  rememberTxt: {
    fontSize: 12,
    color: "#555",
  },

  forgotTxt: {
    fontSize: 12,
    color: "#2F80ED",
  },

  loginBtn: {
    backgroundColor: "#F2994A",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loginTxt: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  signupTxt: {
    marginTop: 12,
    textAlign: "center",
  },
  signupLink: {
    color: "#2F80ED",
    fontSize: 14,
    fontWeight: "600",
  },
});
