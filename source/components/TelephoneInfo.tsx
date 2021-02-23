import React, {CSSProperties, useCallback, useState}  from 'react'
import { StyleSheet, TouchableOpacity,Text, View,Image } from 'react-native'
import margins from '../resorces/margins';
import strings from '../resorces/strings';

interface Props {
    telephone:string,
    name:string,
    isMain:boolean,
}


export const TelephoneInfo: React.FC<Props> = ({name,telephone,isMain}) => {
    console.warn(isMain);
    return(
        <View style={{flexDirection:'row'}}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text >{telephone}</Text>
            </View>
            {isMain? <Text style={styles.main}>Основной</Text>:{}}
            <TouchableOpacity style={styles.opacity}>
                <Image source={require('../../source/resorces/images/Group.png')}/>
            </TouchableOpacity>
        </View>
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
    },
    name:{
        color:'rgba(147, 160, 160, 1)',
        fontSize:10,
    },
    opacity:{
        position:'absolute',
         alignSelf:'center',
         right:0,
         marginRight:7,
    },
    main:{
        color:'rgba(25, 222, 139, 1)',
        fontSize:10,
        marginRight:5
    }
})