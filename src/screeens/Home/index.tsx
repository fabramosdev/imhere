import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"

import { Participant } from '../../components/Participant'

export function Home() {

	const [participants, setParticipants] = useState<string[]>([])
	const [participantName, setParticipantName] = useState<string>('')


	// const participants: string[] = []

	function handleParticipantAdd() {
		if (participants.includes(participantName)) {
			return Alert.alert(`Ops...já cadastrado`, `Já temos um participante ${participantName} cadastrado!`)
		}
		setParticipants(prevState => [...prevState, participantName])
		setParticipantName('')
	}

	function handleParticipantRemove(name: string) {
		Alert.alert('Remover participante', `Deseja remover o participante ${name}?`, [
			{
				text: 'Sim',
				onPress: () => {
					Alert.alert('Participante removido', `O participante ${name} foi removido com sucesso`)
				}
			},
			{
				text: 'Não',
				style: 'cancel'
			}
		])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do Evento</Text>
			<Text style={styles.eventDate}>Sexta, 29 de março de 2025</Text>

			{/* TODO - Transform AddParticipant in component */}
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Nome do participante"
					placeholderTextColor={'#6b6b6b'}
					onChangeText={setParticipantName}
					value={participantName}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				showsVerticalScrollIndicator={false}
				data={participants}
				keyExtractor={item => item}
				ListEmptyComponent={() => (
					<Text style={styles.empty}>Nenhum participante cadastrado</Text>
				)}
				renderItem={({ item }) => (
					<Participant
						name={item}
						onRemove={() => handleParticipantRemove(item)}
					/>
				)}
			/>
		</View>
	)
}

