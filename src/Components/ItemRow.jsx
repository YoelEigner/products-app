import React from 'react';
// import { Card, InputGroup } from 'react-native-elements';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

export const ItemRow = ({ editable, item, title, handleEdit }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title.charAt(0).toUpperCase() + title.slice(1)}:</Text>
            {editable ? (
                <TextInput
                    style={styles.input}
                    placeholder={title}
                    onChangeText={(value) => handleEdit(value, item, title)}
                    value={item.toString()}
                    keyboardType={title === 'price' || title === 'quantity' ? 'number-pad' : 'default'}
                />
            ) : (
                <Text style={styles.text}>{item}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        flex: 1,
        marginRight: 10,
        marginLeft: 30,
        fontSize:20,
        color:'#FFFFFF'
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        // width: '100%',
        marginRight: 10,
        fontSize:20
        

    },
    text: {
        flex: 1,
        fontSize:20,
        color:'#FFFFFF',

    }
});
