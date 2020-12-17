import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, KeyboardAvoidingViewBase, } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Fire from '../Firebase';

export default class ChatScreen extends React.Component {
    
    // the messages
    state = {
        messages: []
    }

    // gets the user and their nickname
    get user(){
        return{
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    // appends all previous messages to the current chat window
    componentDidMount(){
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        }))
        
        );
    }

    componentWillUnmount(){
        Fire.off();
    }

    render() {
        
        // chat is a GiftedChat component containing messages, and a space to enter more messasges
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>;

        // put the chat in a SafeAreaView to ensure it doesn't get cut off
        return <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>;

    }
}


