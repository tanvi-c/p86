import React, { Component } from "react";
import {
    View, Text, StyleSheet, SafeAreaView, 
    TouchableOpacity, Platform, StatusBar } from "react-native";

export default class HomePage extends Component {
    render() {
        return (
            <View style = {styles.container} >
                <SafeAreaView style = {styles.droidSafeArea} />
                <View style = {styles.titleBar}>
                    <Text style = {styles.titleText}>Bakery Catalog</Text>
                </View>

                <TouchableOpacity style = {styles.routeCard} onPress= {() => this.props.navigation.navigate("Cakes and Cupcakes")}>
                    <Text style = {styles.routeText}>Cakes and Cupcakes</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.routeCard} onPress= {() => this.props.navigation.navigate("Ice Cream")}>
                    <Text style = {styles.routeText}>Ice Cream</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.routeCard} onPress= {() => this.props.navigation.navigate("Pastries")}>
                    <Text style = {styles.routeText}>Pastries</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight: 0
    }, 
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "lightpink"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "lightpurple",
        marginTop: 75,
        paddingLeft: 30
    }
    });
