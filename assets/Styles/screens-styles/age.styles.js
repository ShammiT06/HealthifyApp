import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const CIRCLE_SIZE = width * 0.39;

const Styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#fff",
    },

    container: {
        flex: 1,
        paddingHorizontal: width * 0.06,
    },

    headerCont: {
        marginTop: width * 0.1,
        marginBottom: width * 0.12,
    },

    Header: {
        fontSize: width * 0.065,
        fontWeight: "700",
        textAlign: "center",
    },

    subText: {
        marginTop: 10,
        textAlign: "center",
        fontSize: width * 0.038,
        color: "#666",
        lineHeight: 22,
    },

    genderContainer: {
        alignItems: "center",
    },

    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: width * 0.055,
    },

    activeCircle: {
        backgroundColor: "#59C7CB",
    },

    inactiveCircle: {
        backgroundColor: "#fff",
        borderWidth: 1.5,
        borderColor: "#59C7CB",
    },

    genderText: {
        marginTop: 12,
        fontSize: width * 0.054,
        fontWeight: "600",
    },
    confmBtn: {
        backgroundColor: "#59C7CB",
        width: width * 0.70,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        height: width * 0.158,
        marginTop:width * 0.15,
        borderRadius:15,
    },
    btnTxt:{
        color:"#fff",
        fontSize:width * 0.065,
    }
});

export default Styles;
