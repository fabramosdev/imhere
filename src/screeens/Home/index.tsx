import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export function Home() {

    function handleParticipantAdd() {
        console.log('Adicionar participante')
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
        </View>
    )
}

