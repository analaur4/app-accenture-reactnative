import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import AccentureLogo from '../images/Accenture.png';
import { GetUnit, IAllUnits } from '../interfaces';
import { getData } from '../services';

export default function Accenture() {

    const route = useRoute()
    const params = route.params as GetUnit

    const [unit, setUnit] = useState<IAllUnits>()

    useEffect(() => {
        getData.get(`/find?id=${params.id}`).then(resp => {
            setUnit(resp.data)
        })
    }, [params.id])

    const navigation = useNavigation()

    function handlePushContact() {
        navigation.navigate('contact')
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Image 
                    style={styles.topImage}
                    source={{ uri: unit?.profile }}
                />
                <Image 
                    style={styles.logo}
                    source={AccentureLogo}
                    height={60}
                    width={231}
                />
                <Text style={styles.title}>{ unit?.name }</Text>
                <Text style={styles.paragraph}>{ unit?.describle }</Text>

                <Text style={styles.details}>País: { unit?.country }</Text>
                <Text style={styles.details}>Estado: { unit?.state } </Text>
                <Text style={styles.details}>Cidade: { unit?.city } </Text>
                <Text style={styles.details}>Endereço: { unit?.address.street }, { unit?.address.number } </Text>

                <RectButton 
                    style={styles.contactButton}
                    onPress={ handlePushContact }
                >
                    <Text style={styles.textContact}>Entrar em contato</Text>
                    <Feather name="send" size={20} color="#A100FF" />
                </RectButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    scrollView: {
        width: Dimensions.get('window').width
    },
    topImage: {
        height: 300,
        width: Dimensions.get('window').width
    },
    logo: {
        marginVertical: 20,
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
        marginBottom: 12,
        textAlign: 'left'
    },
    contactButton: {
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#8F8F8F',
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        marginBottom: 80,
        marginTop: 22,
        width: Dimensions.get('window').width - 160
    },
    textContact: {
        color: '#A100FF',
        fontSize: 18,
        marginRight: 20
    },
    details: {
        color: '#8F8F8F',
        marginVertical: 6
    }
})
