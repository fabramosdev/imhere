import { View, Text } from "react-native"
import { styles } from "./styles"

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 29 de março de 2025</Text>
        </View>
    )
}

