import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class TwoStateIcon extends Component {

	state = {
		activeIcon: false
	}

	normalIcon = async () => {
		this.setState({ activeIcon: !this.state.activeIcon })

		const { normalActions } = this.props

		if(this.state.activeIcon === false) {
			if(normalActions) await normalActions();
		}
	}

	activeIcon = async () => {
		this.setState({ activeIcon: !this.state.activeIcon })

		const { activeIcon } = this.props

		if(this.state.activeIcon === true) {
			if(activeIcon.activeActions) await activeIcon.activeActions();
		}
	}


	render() {
		const { editor, activeIcon, openAccordion, normalName, normalColor, normalSize } = this.props

		if(openAccordion === 'activeIcon' && editor) {
			return (
				<View style={styles.wrapper}>
					<Icon onPress={this.handleSubmit} name={activeIcon.activeName} color={activeIcon.activeColor} size={activeIcon.activeSize} />
				</View>
			)
		} 

		if(editor) {
			return (
				<View style={styles.wrapper}>
		 			<Icon onPress={this.handleSubmit} name={normalName} color={normalColor} size={normalSize} />
				</View>
			)
		}

		if(this.state.activeIcon === false) {
			return (
				<View style={styles.wrapper}>
					<Icon onPress={this.normalIcon} name={normalName} color={normalColor} size={normalSize} />
				</View>
			)
		} 

		if(this.state.activeIcon === true) {
			return (
				<View style={styles.wrapper}>
					<Icon onPress={this.activeIcon} name={activeIcon.activeName} color={activeIcon.activeColor} size={activeIcon.activeSize} />
				</View>
			)
		} 

		return (
			<View style={styles.wrapper}>
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default TwoStateIcon
