import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native'

// import custom component
import CorsoCard from '../Components/CorsoCard'

import fakeCorsi from '../FakeServer/corsi'

const Homepage = ({navigation}) => {

    // component state
    const [corsi, setCorsi] = useState([])

    // al primo render del componente
    useEffect(() => {
        // get corsi from fake api
        getCorsi()
    }, [])

    // funzione che preleva i corsi da fake API
    const getCorsi = () => {
        setTimeout(() => {
            setCorsi(fakeCorsi)
        }, 1000)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>

                {
                    corsi.length > 0
                    ?
                        corsi.map((item, index) => {
                            return (
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Corso', {id_corso: item.id, nome_corso: item.nome})}
                                    style={{marginBottom: 20}} 
                                    key={index}
                                >
                                    <CorsoCard 
                                        nome={item.nome}
                                        colore={item.colore}
                                    />
                                </TouchableOpacity>
                            )
                        })
                    :
                        <ActivityIndicator 
                            size="large"
                        />
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default Homepage

const styles = StyleSheet.create({})