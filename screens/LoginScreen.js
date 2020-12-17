import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default class LoginScreen extends React.Component {

//default nickname of the user    
state = {
    name: ""
}

// this function will continue to the Chat screen, passing on the nickname / username of the player
continue = () =>{

    this.props.navigation.navigate("Chat", {name: this.state.name});
}
    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.title}>Chatterbug</Text>
                <Text stlye={styles.tagLine}>A place for lovers of chatting</Text>
                <View style={{ marginTop: 30}}>
                    <Image source={require("../assets/chatterbug.png")}
                            style={{width: 100, height: 100, alignSelf: "center"}}
                    />
                </View>
                <View style={{marginHorizontal: 32}}>
                    <Text style={styles.nicknameText}>Nickname</Text>
                    <TextInput style={styles.input} placeholder="Username" onChangeText={name => {
                        this.setState({name})}} value={this.state.name}></TextInput>
                    <View style={{alignItems: "center", marginTop: 24}}>
                        <TouchableOpacity style={styles.loginBtn} onPress={this.continue}>
                            <Text style={{color: "white"}}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebfff9',
      alignItems: 'center',
      
    },
    nicknameText: {
        fontWeight: "bold",
        fontSize: 32,
        color: "#101010",
        marginTop: 16
    },
    input: {
        marginTop: 12,
        height: 50,
        width: 300,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 20,
        paddingHorizontal: 16,
        fontWeight: "600",
        
    },
    loginBtn: {
        width: 140,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#1089e0",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#1089e0",
        marginTop: 25,
    }
  });