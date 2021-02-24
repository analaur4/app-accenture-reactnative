import React, { useState } from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler'
import LottieView from 'lottie-react-native';
import { Feather } from '@expo/vector-icons';

import AccentureLogo from '../images/Accenture.png';

export default function Contact() {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    const [isSendMessage, setIsSendMessage] = useState(false)
    
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                { isSendMessage ? (
                    <>
                        <Text style={styles.sendText}>Sua mensagem foi enviada !</Text>
                        <LottieView
                            style={styles.animation}
                            source={ require('../animations/animation-contact.json') }
                            autoPlay
                            loop
                        />
                    </>
                    ) : (
                        <>
                            <Image style={styles.logo} source={AccentureLogo} />
                            <Text style={styles.titleForm}>Formulário de contato</Text>        
                            <View>
                                <Text style={styles.labelForm}>Seu nome: </Text>
                                <TextInput style={styles.inputForm} />
                                <Text style={styles.labelForm}>Seu telefone: </Text>
                                <TextInput style={styles.inputForm} />
                                <Text style={styles.labelForm}>Seu email: </Text>
                                <TextInput style={styles.inputForm} />
                                <Text style={styles.labelForm}>Deixe sua mensagem: </Text>
                                <TextInput style={styles.inputFormMultiline} multiline />

                                <RectButton style={styles.sendButton} onPress={ () => setIsSendMessage(true) } >
                                    <Text style={styles.textSendButton}>Enviar mensagem</Text>
                                    <Feather name="send" size={20} color="#A100FF" />
                                </RectButton>
                            </View>
                        </>        
                    )
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: Dimensions.get('window').height,
        justifyContent: 'center'
    },
    logo: {
        height: 52,
        marginBottom: 15,
        width: 200
    },
    titleForm: {
        color: '#A100FF',
        fontSize: 20,
        marginVertical: 30
    },
    scrollView: {
        width: Dimensions.get('window').width
    },
    sendText: {
        color: '#A100FF',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 14,
        width: 160
    },
    animation : {
        height: 300,
        width: 300
    },
    labelForm: {
        marginTop: 22,
    },
    inputForm: {
        borderColor: '#8F8F8F',
        borderRadius: 12,
        borderWidth: 1,
        height: 50,
        marginVertical: 5,
        paddingHorizontal: 20,
        width: Dimensions.get('window').width - 60
    },
    inputFormMultiline: {
        borderColor: '#8F8F8F',
        borderRadius: 12,
        borderWidth: 1,
        height: 120,
        marginVertical: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: Dimensions.get('window').width - 60
    },
    sendButton: {
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#8F8F8F',
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 80,
        marginTop: 20,
        width: Dimensions.get('window').width - 160
    },
    textSendButton: {
        color: '#A100FF',
        fontSize: 20,
        marginRight: 6
    }
})
