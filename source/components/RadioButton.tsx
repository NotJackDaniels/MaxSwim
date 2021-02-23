import React, {CSSProperties, useCallback, useState}  from 'react'
import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import colors from '../resorces/colors';




interface Props {
    onPress:() => void;
    buttonText:string,
    Style:any;
}


export const RadioButtonView: React.FC<Props> = ({onPress,buttonText,Style}) => {
    const [toggle, settoggle] = useState(false);
    const pressed = useCallback(() =>
    {
        onPress();
        settoggle(!toggle);
    },[onPress,settoggle,toggle]);
    const BorderColor = toggle? colors.secondaryColor : "grey"
    return(
    
        <TouchableOpacity
            onPress={() =>pressed()}
            
        >
            <Text>{buttonText}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        justifyContent:'center',
        borderWidth:0.2,
        padding:5,
        borderRadius:7,
        paddingHorizontal:14
    }
})