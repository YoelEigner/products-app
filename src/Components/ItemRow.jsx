/**
Renders a row in a list for an item with a label and editable text input or non-editable text.
@param {Object} props - The component props.
@param {boolean} props.editable - Whether the item is editable or not.
@param {string|number} props.item - The item to be displayed in the row.
@param {string} props.title - The label to be displayed for the item.
@param {Function} props.handleEdit - The function to be called when the text input is edited.
@returns {JSX.Element} A row component with a label and editable/non-editable text.
 */
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
        fontSize: 20,
        color: '#FFFFFF'
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        // width: '100%',
        marginRight: 10,
        fontSize: 20


    },
    text: {
        flex: 1,
        fontSize: 20,
        color: '#FFFFFF',

    }
});
