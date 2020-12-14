import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Button(props) {
  return (
    <TouchableOpacity
    
      style={styles[`${props.variant}_container`]}
      onPress={props.onClick}>
      <Text style={styles[`${props.variant}_title`]}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export {Button};

const styles = StyleSheet.create({
  log_in_container: {
    backgroundColor: '#97b498',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  log_in_title: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    
  },
  sign_container: {
    padding: 10,
    margin: 10,
  },
  sign_title: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    
  },
});