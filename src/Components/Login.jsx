import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native"
import { useDispatch } from "react-redux";
import { onLogin } from "../store/user/user.action";


export const Login = ({ navigation }) => {
    const [creds, setCreds] = useState(() => {
        return {
            username: 'admin',
            password: 'admin',
        }
    })
    const dispatch = useDispatch()

    const handleForm = (value, name) => {
        setCreds((prevState) => ({ ...prevState, [name]: value }))
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        let user = await dispatch(onLogin(creds))
        console.log(user)

    }
    return (
        <ScrollView style={styles.scrollview}>
            <Text style={styles.text}>Login Form</Text>
            <View style={styles.container} >
                <TextInput
                    placeholder={'Username'}
                    style={styles.textInput}
                    onChangeText={(value) => handleForm(value, 'username')}
                    value={creds.username}
                    secureTextEntry={false}
                />
                <TextInput
                    placeholder={'Password'}
                    style={styles.textInput}
                    onChangeText={(value) => handleForm(value, 'password')}
                    value={creds.password}
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity
                onPress={onSubmit}
                style={styles.whiteWrapperButton}
            >
                <Text style={styles.whiteButton}>{'Sign in'}</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    scrollview: {
        marginTop: '50%'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 10,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        minWidth: '30%'
    },
    whiteWrapperButton: {
        alignItems: 'center',
        minWidth: '30%',
        marginTop: 10,
        padding: 12,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
        borderRadius: 60,
        backgroundColor: '#FFFFFF',
        elevation: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
    },
});
