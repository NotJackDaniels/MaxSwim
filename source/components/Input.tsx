import React, { useCallback, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import margins from '../resorces/margins'
import OutlineInput from 'react-native-outline-input';
import colors from '../resorces/colors';


interface Props{
    placeholder:string;
    numberOfLines?:number,
    heights?:number,
    enableMultiline?:boolean,
    value?:string,
}

export const Input: React.FC<Props> = ({placeholder,numberOfLines,heights,enableMultiline,value}) =>{
    const [newValue, setnewValue] = useState(value);
    const Height = heights? heights : 50;
    return( 
    <View style = {styles.view}>

        <OutlineInput 
                value={newValue}
                label={placeholder}
                onChangeText={(e: string) => setnewValue(e)}
                activeValueColor='black'
                activeLabelColor={colors.secondaryColor}
                activeBorderColor={colors.secondaryColor}
                passiveValueColor="black"
                height={Height}
                
            />
    </View>)
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
    },
    view:{
        textAlignVertical:'top',
        marginVertical:margins.defaultMarginVertical
    }
})