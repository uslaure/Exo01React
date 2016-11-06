import React, { Component } from 'react';
import { AppRegistry,
 Navigator,
 Text,
  View,
  TextInput,
} from 'react-native';

class Main extends Component{
	constructor(props) {
		super(props);
		this.state = { message: '' };
		this.messages = [];
	}

	render(){
		return (
			<View style = {{ flex: 1 }}>
				<View style = {{ backgroundColor: '#006a56', padding: 20 }}>
					<Text style = {{ color: 'white'}}>Tchat Exercice</Text>
				</View>
				<View style = {{ backgroundColor: '#fff', flex: 1 }}>
					<Text style = {{ fontWeight: 'bold', fontSize: 14 }}></Text>
				</View>
				<View style = {{ flex: 0.1 }}>
					<TextInput
						style = {{ borderWidth: 1, backgroundColor: '#006a56', color:'#fff', fontSize:16 }}
						onChangeText = { (message) => this.setState({ message }) }
        				value = { this.state.message }
					/>
				</View>
			</View>
		)
	}
}
AppRegistry.registerComponent('Day01', () => Main);
