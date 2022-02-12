import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'

const Professori = ({route, navigation}) => {
  
    const [professori, setProfessori] = useState([])

    useEffect(() => {
        const corso = route.params.corso
        setProfessori(corso.professori)
    }, [])

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>

                {
                    professori.length > 0 
                    ?
                        professori.map(item => (
                            <View style={{marginBottom: 20}}>
                                <Text style={{fontSize: 17, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 5}}>
                                    {item.nome}
                                </Text>
                                <Text style={{fontSize: 17}}>
                                    {item.bio}
                                </Text>
                            </View>
                        ))
                    :
                        <Text style={{textAlign: 'center'}}>Non ci sono professori</Text>
                }

            </ScrollView>
        </SafeAreaView>
    )
}

export default Professori

const styles = StyleSheet.create({})