import React from "react"
import { Button, StyleSheet, Text, View,Image, TouchableOpacity } from "react-native"
import AddLearnerScreenPresenter, { AddLearnerScreenViewInterface } from "./AddLearnerPresenter"
import strings from "../../resorces/strings";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../../resorces/fonts"
import {Input} from "../../components/Input"

interface Props {
    presenter: AddLearnerScreenPresenter
}

interface State {

}

export default class AddLearnerScreenView extends React.Component<Props, State> implements AddLearnerScreenViewInterface{
    private readonly presenter: AddLearnerScreenPresenter;

    constructor(props: Props) {
        super(props)
    
        this.presenter = this.props.presenter
        this.presenter.view = this
    
        this.state = {
          
        }
    }
    render(){
        return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{}}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.imageOverlap} onPress={()=>{}}>
                    <Image
                        source={require('../../resorces/images/addPhoto.jpg')}
                        style={styles.imageSize}
                    />
                </TouchableOpacity>
                
            </View>
            <View>
                <Text style={styles.information}>{strings.addLearner.formHeading}</Text>
                <Input placeholder={'Фамилия'}/>
                <Input placeholder={'Имя'}/>
                <Input placeholder={'Отчество'}/>
                <Input placeholder={'Дата рождения'}/>
                <Input placeholder={'Примечания'} numberOfLines={3} heights={80} enableMultiline={true} />
            </View>
        </SafeAreaView>)
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        backgroundColor:'white'
    },
    imageContainer:{
        alignSelf:"center",
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
    },
    image:{
        width:150,
        height:150,
        borderRadius:150/2,
        backgroundColor:'grey',
    },
    imageOverlap:{
        position:'absolute',
        width:40,
        height:40,
        top:0,
        right:0,
        backgroundColor:'transparent',
    },
    imageSize:{
        width:40,
        height:40,
        borderRadius:20,
    },
    information:{
        marginVertical:10,
        fontSize:fonts.heading,
        fontWeight:"bold",
    },
    input:{
        marginVertical:8,
      },
})