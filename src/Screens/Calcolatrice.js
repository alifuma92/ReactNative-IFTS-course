import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

import BottoneCalcolatrice from '../Components/BottoneCalcolatrice'

const Calcolatrice = () => {

  const [display, setDisplay] = useState('')
  const [operation, setOperation] = useState('')
  const [operationString, setOperationString] = useState('')

  const write = (value) => {
    if(operation == ''){
        if(value === ','){
            if(display.indexOf(',') === -1){
                setDisplay(display + value)
            }
        } else {
            setDisplay(display + value)
        }
    } else {
        setDisplay('0')
        setDisplay(display + value)
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'column', justifyContent: 'flex-end'}}>


            <View style={{flexDirection:'row', justifyContent: 'flex-end', marginRight: 5}}>
                <Text style={{color: 'white', fontSize: 100}}>
                    {display == '' ? '0' : display}
                </Text>
            </View>


            {/* Prima riga */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <BottoneCalcolatrice
                    testo={'AC'}
                    colore_sfondo={'#cccccc'}
                    colore={'black'}
                    width={80}
                    press={() => {setDisplay(''); setOperation('')}}
                />
                <BottoneCalcolatrice
                    testo={'+/-'}
                    colore_sfondo={'#cccccc'}
                    colore={'black'}
                    width={80}
                />
                <BottoneCalcolatrice
                    testo={'%'}
                    colore_sfondo={'#cccccc'}
                    colore={'black'}
                    width={80}
                />
                <BottoneCalcolatrice
                    testo={'/'}
                    colore_sfondo={'orange'}
                    colore={'white'}
                    width={80}
                    press={() => setOperation('/')}
                />
            </View>

            {/* Seconda riga */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <BottoneCalcolatrice
                    testo={'7'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(7)}
                />
                <BottoneCalcolatrice
                    testo={'8'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(8)}
                />
                <BottoneCalcolatrice
                    testo={'9'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(9)}
                />
                <BottoneCalcolatrice
                    testo={'X'}
                    colore_sfondo={'orange'}
                    colore={'white'}
                    width={80}
                    press={() => setOperation('x')}
                />
            </View>

            {/* Terza riga */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <BottoneCalcolatrice
                    testo={'4'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(4)}
                />
                <BottoneCalcolatrice
                    testo={'5'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(5)}
                />
                <BottoneCalcolatrice
                    testo={'6'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(6)}
                />
                <BottoneCalcolatrice
                    testo={'-'}
                    colore_sfondo={'orange'}
                    colore={'white'}
                    width={80}
                    press={() => setOperation('-')}
                />
            </View>

            {/* Quarta riga */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <BottoneCalcolatrice
                    testo={'1'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(1)}
                />
                <BottoneCalcolatrice
                    testo={'2'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(2)}
                />
                <BottoneCalcolatrice
                    testo={'3'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(3)}
                />
                <BottoneCalcolatrice
                    testo={'+'}
                    colore_sfondo={'orange'}
                    colore={'white'}
                    width={80}
                    press={() => setOperation('+')}
                />
            </View>

            {/* Quinta riga */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <BottoneCalcolatrice
                    testo={'0'}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={180}
                />
                <BottoneCalcolatrice
                    testo={','}
                    colore_sfondo={'#313131'}
                    colore={'white'}
                    width={80}
                    press={() => write(',')}
                />
                <BottoneCalcolatrice
                    testo={'='}
                    colore_sfondo={'orange'}
                    colore={'white'}
                    width={80}
                />
            </View>
            

        </View>
    </SafeAreaView>
  )
}

export default Calcolatrice

const styles = StyleSheet.create({})