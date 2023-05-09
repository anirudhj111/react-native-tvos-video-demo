import React, {useState} from "react";
import { View, Text, StyleSheet,Dimensions, TouchableOpacity} from "react-native";
const {height, width} = Dimensions.get('window'); 

const Home = ({navigation}) => {

    const [bgColor1, setBgColor1] = useState('')
    const [bgColor2, setBgColor2] = useState('')
    const [bgColor3, setBgColor3] = useState('')

    return(
        <View style={styles.conatiner}>
            <Text style={{color:'#000'}}>Video Sample</Text>
            <TouchableOpacity 
                style={[styles.button, {backgroundColor:bgColor1}]} 
                onPress={() => {console.log("Hi1");navigation.navigate('TvScreen')}}
            >
                <View>
                    <Text style={{color:'#000'}}>React-Native-Video Sample</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = new StyleSheet.create({
    conatiner : {
        height:'100%',
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'column',
        padding: height*0.025
    },

    button : {
        height:height*0.25,
        width: width*0.25,
        borderRadius: 8,
        borderWidth:1,
        borderColor:'#ababab',
        marginVertical:'2.5%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c7c7c7',
        zIndex:1
    }
})
