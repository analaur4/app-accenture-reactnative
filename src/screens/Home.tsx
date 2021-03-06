import React, { useEffect, useState } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import PinInsert from '../images/Pin.png';
import { IInicialMarker, IAllUnits } from '../interfaces';
import { getData } from '../services/index';

export default function Home() {

  const navigation = useNavigation();

  const [allUnits, setAllUnits] = useState<IAllUnits[]>([])
  const [initialMapMarker, setInicialMapMarker] = useState<IInicialMarker>({
    latitude: -23.628949249999998,
    longitude: -46.71006813701569,
    latitudeDelta: 0.0008,
    longitudeDelta: 0.0008
  })

  useEffect(() => {
    getData.get('/all').then(resp => {
      setAllUnits(resp.data)
    })
  }, [])

  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const long = position.coords.longitude
  })

  function handlePageDetails(id: number) {
    navigation.navigate('accenture', { id })
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        provider={PROVIDER_GOOGLE} 
        initialRegion={initialMapMarker}
      >
        { allUnits.map(unit => (
          <View key={ unit.id }>
            <Marker
              icon={ PinInsert }
              coordinate={{
                latitude: unit.latitude,
                longitude: unit.longitude
              }}
            >
              <Callout
                tooltip={true}
                onPress={ () => handlePageDetails(unit.id) }  
              >
                <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{ unit.name }</Text>
                </View>
              </Callout>
            </Marker>

          </View>
        )) }
      </MapView>
        
      <View style={styles.footer}>
        <Text style={styles.footerText}>Search</Text>
        <RectButton style={styles.findButton}>
        <Feather name="search" size={20} color={"#FFF"} />
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      // vai pegar a dimensão do celular
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    },
    calloutContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      height: 46,
      justifyContent: 'center',
      paddingHorizontal: 16,
      width: 160
    },
    calloutText: {
      color: '#A100FF',
      fontSize: 14,
      textAlign: 'center'
    },
    footer: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 20,
      bottom: 24,
      flexDirection: 'row',
      height: 56,
      justifyContent: 'space-between',
      left: 24,
      paddingLeft: 24,
      position: 'absolute',
      right: 24,
  
    },
    footerText: {
      color: '#8FA7B3',
  
    },
    findButton: {
      alignItems: 'center',
      backgroundColor: '#A100FF',
      borderRadius: 15,
      height: 56,
      justifyContent: 'center',
      width: 56,
    }
});
