import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class Note extends React.Component {
  render(){
    return(
      <View key={this.props.keyval} styles={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Image source={require("../assets/Delete.png")} style={styles.gambar}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 10,
    borderBottomColor: 'black',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#F4743B',
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4743B',
    paddingBottom: 12,
    paddingTop: 12,
    top: 10,
    bottom: 10,
    right: 10,
  }
});