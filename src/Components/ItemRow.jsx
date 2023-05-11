import React from 'react';
// import { Card, InputGroup } from 'react-native-elements';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';


export const ItemRow = ({ editable, item, title, handleEdit }) => {
    return (
        <View style={styles.container}>
            <Text >
                {title.charAt(0).toUpperCase() + title.slice(1)}: {editable ? (
                    <TextInput
                        className="text-input"
                        placeholder={title}
                        label={title}
                        value={item}
                        onChangeText={(value) => handleEdit(value, item)}
                        keyboardType={title === 'price' || title === 'quantity' ? 'numeric' : 'default'}
                    />
                ) : (
                    item
                )}
            </Text>
        </View>
    );
};

// export default ItemRow;
const styles = StyleSheet.create({
    container: {
        margin: '10%',
        // maxWidth: 200
    },
})  