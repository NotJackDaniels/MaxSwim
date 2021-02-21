import React from 'react'
import { StyleSheet, TextInput } from 'react-native'


interface Props{
    placeholder?:string;
    numberOfLines?:number,
    heights?:string|number,
    enableMultiline?:boolean,
}

export const Input: React.FC<Props> = ({placeholder,numberOfLines,heights,enableMultiline}) =>{
    return(<TextInput 
                style={[styles.input,{height:heights}]} 
                placeholder={placeholder}
                multiline={enableMultiline || false}
                numberOfLines={numberOfLines}/>)
}

const styles = StyleSheet.create({
    input:{
        textAlignVertical: 'top',
        width:'100%',
        padding:10,
        borderRadius:5,
        borderColor:'grey',
        borderWidth:0.2,
        marginVertical:10,
        height:50,
    }
})