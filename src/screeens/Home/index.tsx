import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"

import { Participant } from '../../components/Participant'

export function Home() {

    const participants = ["Fabiano", "João", "Maria", "José", "Ana", "Pedro", "Paulo", "Lucas", "Marcos", "Mateus"]

    function handleParticipantAdd() {
        console.log('Adicionar participante')
    }

    function handleParticipantRemove(name: string) {
        console.log(`Remover participante ${name}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 29 de março de 2025</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor={'#6b6b6b'}
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

