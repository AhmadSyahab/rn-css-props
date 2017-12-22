import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		Button,
		TouchableOpacity,
		Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GameScreen extends  React.Component {
  constructor(props){
    super()
    this.state= {
      tebakanKata: 'style',
      tebakan: ['','','','','']
      gameState: [],
      keyboard: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
      disable: false
    }
  }   
	render() {
		const { navigate,state } = this.props.navigation
		return (
	       <View style={styles.container}>
	       	<Text> Welcome Game </Text>       	
	      </View>			
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
  	fontSize: 20,
  },
  h3: {
    fontSize: 10,
  },
  box: {
    width: 300,
    height: 300,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 50,
    opacity: 0.9
  }
});
