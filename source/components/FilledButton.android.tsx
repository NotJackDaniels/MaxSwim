import React, {CSSProperties, useCallback, useState}  from 'react'
import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ripple from 'react-native-material-ripple';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import colors from '../resorces/colors';
import margins from '../resorces/margins';

interface Props {
    onPress:() => void;
    buttonText:string,
    Style?:any;
}


export const FilledButton: React.FC<Props> = ({onPress,buttonText,Style}) => {
    const bg = colors.secondaryColor;
    return(
        <Ripple
            onPress={() =>onPress()}
            style={[styles.button,Style,{backgroundColor:bg}]}
        >
            <Text style={styles.text}>{buttonText}</Text>
        </Ripple>
    );
}
const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        padding:5,
        borderRadius:7,
        width:'100%',
        marginVertical:margins.defaultMarginVertical,
        height:50,
        alignItems:"center",
    },
    text:{
        color:'white',
        fontSize:16
    }
})