import React from "react"
import { Button, StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from "react-native"
import AddLearnerScreenPresenter, { AddLearnerScreenViewInterface } from "./AddLearnerPresenter"
import strings from "../../resorces/strings";
import { SafeAreaView } from "react-native-safe-area-context";
import fonts from "../../resorces/fonts"
import {Input} from "../../components/Input"
import CheckBox from "@react-native-community/checkbox";
import { ToggleButton } from "../../components/ToggleButton";
import colors from "../../resorces/colors";
import margins from "../../resorces/margins";
import { FilledButton } from "../../components/FilledButton";
import { RadioButtonView } from "../../components/RadioButton";
import { TelephoneInfo } from "../../components/TelephoneInfo";

interface Props {
    presenter: AddLearnerScreenPresenter
}

interface State {
    toggleCheckBox:boolean;
    surname:string,
    name:string,
    date:string,
    note:string,
    patronymic:string,
    contactName:string,
    number:string,
    lessons:string,
}

export default class AddLearnerScreenView extends React.Component<Props, State> implements AddLearnerScreenViewInterface{
    private readonly presenter: AddLearnerScreenPresenter;
    
    constructor(props: Props) {
        super(props)
    
        this.presenter = this.props.presenter
        this.presenter.view = this
    
        this.state = {
          toggleCheckBox:false,
          surname:'',
          name:'',
          date:'',
          note:'',
          patronymic:'',
          contactName:'',
          number:'',
          lessons:'',
        }
    }

    selectValue = () => {

    }

    render(){
        return(
        <ScrollView style={styles.container}>
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
            <SafeAreaView>
                <Text style={styles.formHeading}>{strings.addLearner.information}</Text>
                <Input placeholder={'Фамилия'} value={this.state.surname} />
                <Input placeholder={'Имя'} value={this.state.name}/>
                <Input placeholder={'Отчество'} value={this.state.patronymic}/>
                <Input placeholder={'Дата рождения'} value={this.state.date}/>
                <Input placeholder={'Примечание'} numberOfLines={3} heights={90} enableMultiline={true} value={this.state.note} />
            </SafeAreaView>
            <View>
                <Text style={styles.formHeading}>{strings.addLearner.telephones}</Text>
                <TelephoneInfo  name={'Остапова Анна'} telephone={'+7888888888'} isMain={true} />
                <Input placeholder={'Имя контакта'} value={this.state.contactName}/>
                <Input placeholder={'Номер'} value={this.state.number}/>
            </View>
            <View style={styles.rowElements}>
                <CheckBox
                    style={styles.checkBox}
                    disabled={false}
                    value={this.state.toggleCheckBox}
                    boxType={"square"}
                    onTintColor={colors.secondaryColor}
                    onCheckColor={colors.secondaryColor}
                />
                <Text style={{textAlign:'center'}}>Основной</Text>
                <ToggleButton Style={styles.toggleButton} onPress={this.selectValue} buttonText={'Добавить еще'} />
            </View>
            <View>
                <Text style={styles.formHeading}>{strings.addLearner.subscription}</Text>
                <ScrollView style={styles.row} horizontal={true}>
                    <ToggleButton Style={styles.lessonsButton} onPress={this.selectValue} buttonText={'4 занятия'} />
                    <ToggleButton Style={styles.lessonsButton} onPress={this.selectValue} buttonText={'8 занятий'} />
                    <ToggleButton Style={styles.lessonsButton} onPress={this.selectValue} buttonText={'12 занятий'} />
                    <ToggleButton Style={styles.lessonsButton} onPress={this.selectValue} buttonText={'Нет'} />
                </ScrollView>
                <Input placeholder={'Другое количество'} value={this.state.lessons}/>
            </View>
            <FilledButton onPress={()=>(console.warn('clicked!'))} buttonText={'Создать'} />
        </ScrollView>)
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'white'
    },
    imageContainer:{
        alignSelf:"center",
        justifyContent:'center',
        alignItems:'center',
        width:150,
        height:150,
        marginVertical:margins.defaultMarginVertical
    },
    image:{
        width:150,
        height:150,
        borderRadius:150/2,
        backgroundColor:'rgba(219, 229, 228, 1)',
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
    formHeading:{
        marginVertical:margins.defaultMarginVertical,
        fontSize:fonts.heading,
        fontWeight:"bold",
    },
    input:{
        marginVertical:8,
    },
    rowElements:{
        marginTop:margins.defaultMarginVertical,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:margins.defaultMarginVertical,
    },
    row:{
        marginTop:margins.defaultMarginVertical,
        flexDirection:'row',
        marginVertical:margins.defaultMarginVertical,
    },

    toggleButton:{
        position:'absolute',
        right:0,
    },
    checkBox:{
        marginRight:10,
        height:25,
        width:25,
        borderWidth:0.1,
    },
    lessonsButton:{
        marginRight:8,
    }
})