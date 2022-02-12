import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

import fakeCorsi from '../FakeServer/corsi'

const Corso = ({route, navigation}) => {

    const [corso, setCorso] = useState(null)
    
    useEffect(() => {
        const id_corso = route.params.id_corso
        const nome_corso = route.params.nome_corso
        navigation.setOptions({title: nome_corso})
        getCorso(id_corso)
    }, [])

    const getCorso = (id_corso) => {
        const fakeCorso = fakeCorsi.filter(item => item.id === id_corso)[0]
        setCorso(fakeCorso)
    }


    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                {
                    corso
                    &&
                    corso.moduli.map( item => (
                        <View style={{marginBottom: 20}}>
                            <Text style={{fontSize: 17, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 5}}>
                                {item.nome}
                            </Text>
                            <Text style={{fontSize: 17}}>
                                {item.contenuto}
                            </Text>
                        </View>
                    ))
                }

                <TouchableOpacity
                    onPress={() => navigation.navigate('Professori', {corso: corso})}
                    style={styles.button}
                >
                    <Text style={{color: '#ffffff', fontWeight: 'bold', fontSize: 17}}>
                        Vedi i professori
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Corso

const styles = StyleSheet.create({
    button: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#000000',
        alignItems: 'center'
    }
})