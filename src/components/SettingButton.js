import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";


const SettingButton = () => {
    if (type === "button") {
        return (
          <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
            <View style={styles.titleHolder}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.iconHolder}>
              <MaterialCommunityIcons
                name="chevron-triple-right"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        );
      } else {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
        <View style={styles.titleHolder}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconHolder}>
          <Octicons name="sign-out" size={24} color="black" />
        </View>
      </TouchableOpacity>
    );
  }
};



export default SettingButton

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#B584AD",
        borderRadius: 10,
        marginVertical: 10,
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
      },
      titleHolder: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      iconHolder: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
      title: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
      },
})