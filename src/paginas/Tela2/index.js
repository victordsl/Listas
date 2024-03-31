import React from "react";
import {View, Text, SafeAreaView, VirtualizedList,StyleSheet,StatusBar} from 'react-native'

type ItemData = {
    id: string;
    title: string;
  };
  
const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
});
  
const getItemCount = (_data: unknown) => 10;
  
  type ItemProps = {
    title: string;
};
  
const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

//Retorno Pagina
export default function Tela2(){
    return(
        <SafeAreaView style={styles.container}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
    );
}

//Estilização
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    item: {
      backgroundColor: '#005eff',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
      color:'white',
    },
  });