import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';

export default function Accenture() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={AccentureLogo}
                height={60}
                width={231}
            />
            <Text style={styles.title}>Accenture</Text>
            <Text style={styles.paragraph}>Texto complementar</Text>

            <RectButton 
                style={styles.contactButton}
                onPress={ () => alert('Opa') }
            >
                <Text style={styles.textContact}>Entrar em contato</Text>
                <Feather name="send" size={20} />
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        marginBottom: 20,
    },
    title: {
        color: '#8F8F8F',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
    },
    paragraph: {
        color: '#B8B8B8',
        fontSize: 18,
        textAlign: 'left'
    },
    contactButton: {
        color: '#A100FF',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 22
    },
    textContact: {
        color: '#A100FF',
        fontSize: 18,
        marginRight: 20
    }
})
