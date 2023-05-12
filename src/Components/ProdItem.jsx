
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ItemRow } from "./ItemRow";
import { useNavigation } from "@react-navigation/native";

export const ProdItem = ({ product, editItem }) => {
    const navigator = useNavigation()

    const handleEdit = (value, id, title) => {
        editItem(value, id, title);
    };
    const handleNavigate = () => {
        navigator.navigate('Details', { state: product })
    }

    return (
        <View style={styles.container}>
            <View style={styles.View}>
                <View style={styles.productBody} onTouchEnd={() => { handleNavigate() }}>
                    <ItemRow
                        editable={false}
                        item={product?.name}
                        title={"name"}
                        handleEdit={(value, item, title) => { handleEdit(value, product?.ID, title); }}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20
    },
    container: {
        marginVertical: 10,
    },
    View: {
        borderRadius: 20,
        backgroundColor: "#495057",
    },
    ViewHeader: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff",
    },
    strikethrough: {
        textDecorationLine: "line-through",
    },
    productBody: {
        // display: "flex",
        justifyContent: "space-between",
    },
    actions: {
        display: "flex",
        justifyContent: 'center'
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

    },
    redWrapperButton: {
        alignItems: 'center',
        marginTop: 10,
        padding: 12,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
        borderRadius: 60,
        backgroundColor: '#BD1E1E',
        elevation: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
    },
})  