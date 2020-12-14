import React from 'react';
import {TextInput, StyleSheet, View, } from 'react-native';

function Input(props) {
    return (
        <View>
        <TextInput style = {styles.placeholder}
            placeholder={props.placeholder}
            keyboardType={props.Inputtype == 'email' ? 'email-address': 'default'}
            secureTextEntry={props.Inputtype === 'Password'}

            />

    </View>
    ); 
}

const styles = StyleSheet.create({

    placeholder : {
        backgroundColor: '#fbfffc',
        margin:5,
        padding:5,
        borderRadius: 10,
    },
});

export {Input};