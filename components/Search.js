import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View,TouchableWithoutFeedback, Modal,TextInput,FlatList,TouchableOpacity,Keyboard } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import { Colors } from "../Styling/Style";


export default function Search(){
    const navigation  = useNavigation();

    // const [data, setData] =  useState([...filterData])
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFossued,setTextInputFossued] = useState(true)
    const textInput = useRef(0)
    return(
        <View style={{alignItems:"center"}}>
      <TouchableWithoutFeedback
                    onPress ={()=>{
                        setModalVisible(true)
                    }}
                >
                <View style = {styles.SearchArea}>
                     <Icon name =  "search"   
                            style = {styles.searchIcon} 
                            type ="material"
                            iconStyle ={{marginLeft:5}}
                            size = {32}     
                            />
                     <Text style ={{fontSize:15}}>What are you looking for ?</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:Colors.grey3,
        fontSize:16
    },

    TextInput:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:0,
         borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-evenly",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:10,
         paddingRight:10
  
      },

    SearchArea:{marginTop :10,
        width:"94%",
        height:50,
        backgroundColor:Colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:Colors.grey4,
        flexDirection:"row",
        alignItems:"center"
      },

    searchIcon:{ fontSize:24,
                  padding:5,
                  color:Colors.grey2,
      },

    view1:{ height:70,
            justifyContent:"center",
            
            paddingHorizontal:10,
      },

    view2:{
      flexDirection: 'row',
      padding: 15,
      alignItems: 'center',
    },

    icon2 :{ fontSize:24,
            padding:5,
            color:Colors.grey2,
    },
    modal :{
        flex:1
    }

})