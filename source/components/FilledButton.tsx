import React, {CSSProperties, useCallback, useState}  from 'react'
import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import colors from '../resorces/colors';
import margins from '../resorces/margins';

interface Props {
    onPress:() => void;
    buttonText:string,
    Style?:any;
}


export const FilledButton: React.FC<Props> = ({onPress,buttonText,Style}) => {
    return(
        <TouchableOpacity
            onPress={() =>onPress()}
            style={[styles.button,Style]}
        >
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        padding:5,
        borderRadius:7,
        width:'100%',
        backgroundColor:colors.secondaryColor,
        marginVertical:margins.defaultMarginVertical,
        height:50,
        alignItems:"center",
    },
    text:{
        color:'white',
        fontSize:16
    }
})