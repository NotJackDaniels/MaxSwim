import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import margins from '../resorces/margins'


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
        borderRadius:7,
        borderColor:'grey',
        borderWidth:0.2,
        marginVertical:margins.defaultMarginVertical,
        height:50,
    }
})