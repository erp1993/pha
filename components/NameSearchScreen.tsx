import React, { Component } from 'react'
import { Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff'
    },
    scrollView: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42
    }
});

export default class NameSearchScreen extends Component {

   render(){
    return(
        <SafeAreaView style={styles.content}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    NAME
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
   }
 }
