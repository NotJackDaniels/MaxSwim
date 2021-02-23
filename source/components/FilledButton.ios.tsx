import React, {CSSProperties, useCallback, useState}  from 'react'
import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import colors from '../resorces/colors';
import margins from '../resorces/margins';

interface Props {
    onPress:() => void;
    buttonText:string,
    Style?:any;
}


export const FilledButton: React.FC<Props> = ({onPress,buttonText,Style}) => {
    const [pressed, setpressed] = useState(true);
    const changeBg =  pressed? 'rgba(7, 191, 241, 1)' : colors.secondaryColor
    return(
        <TouchableHighlight
            onPress={() =>onPress()}
            style={[styles.button,Style,{backgroundColor:changeBg}]}
            onHideUnderlay={() => {
                setpressed(false);
            }}
            onShowUnderlay={() => {
                setpressed(true);
            }}
        >
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableHighlight>
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