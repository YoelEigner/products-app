/**
Renders a screen for adding a new product, with input fields for name,
description, price, and quantity. Upon submission, dispatches an action to
save the new product to Redux and the database.
@returns {JSX.Element} The rendered screen.
 */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SaveNewProduct } from '../store/user/user.action';

export const NewProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
    });
    const { user } = useSelector((storeState) => storeState.userModule)
    const navigator = useNavigation()
    const dispatch = useDispatch()
    const handleEdit = (name, value) => {
        setProduct({ ...product, [name]: value });
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(SaveNewProduct(product, user.token))
        navigator.goBack()
    };
    const onCancel = () => {
        navigator.goBack()
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.header}>Add new product</Text>
                    <View style={styles.form}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={product.name}
                            onChangeText={(value) => handleEdit('name', value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={product.description}
                            onChangeText={(value) => handleEdit('description', value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Price"
                            keyboardType="numeric"
                            value={product.price}
                            onChangeText={(value) => handleEdit('price', value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Quantity"
                            keyboardType="numeric"
                            value={product.quantity}
                            onChangeText={(value) => handleEdit('quantity', value)}
                        />
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity
                            onPress={() => { onCancel() }}
                            style={styles.whiteWrapperButton}
                        >
                            <Text style={styles.whiteButton}>{'Cancel'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onSubmit}
                            style={styles.whiteWrapperButton}
                        >
                            <Text style={styles.whiteButton}>{'Save'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: '#343a40',

    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50

    },
    card: {
        width: '90%',
        backgroundColor: '#495057',
        borderRadius: 20,
        padding: 20,
    },
    header: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    form: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    whiteWrapperButton: {
        alignItems: 'center',
        marginTop: 10,
        padding: 12,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
        borderRadius: 60,
        backgroundColor: '#6c757d',
        elevation: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        minWidth: '30%',
        justifyContent: 'center',
        alignSelf: 'center'

    },
    whiteButton: {
        color: '#FFFFFF',
        fontSize: 20
    }
});
