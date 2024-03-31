import React from "react";
import {View, Text, SectionList, StyleSheet, Button} from 'react-native'

export default function Tela1({navigation}){
    return(
        <View>
            <Text style= {styles.titulo} >Listas Sectionlist </Text>
            <SectionList
                sections={[
                    {title: 'J',
                    data: ['João','José','Joy']},
                    {title:'M', 
                    data:['Maria','Matheus','Marcio','Marcelo']},
                    {title:'L',
                    data:['Leo','Luan','Liz']},
                    {title:'C',
                    data:['Carlos','Cauan','Caio']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => (
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
              />
            <Button title="Tela 2 Virtualized List" onPress={()=>navigation.navigate("Tela2")}/>
        </View>    
    );
}


//Estilização
const styles = StyleSheet.create({
    botao: {
      flex: 1,
      paddingTop: 22,
      backgroundColor:'#005eff',
      fontWeight: 'bold',
    },
    sectionHeader: {
      color:'#005eff',  
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    titulo:{
        fontSize:25,
        color: '#005eff',
    },
  });
