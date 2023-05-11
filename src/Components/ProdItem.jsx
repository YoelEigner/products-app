
import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { DeleteProduct, UpdateProduct } from "../store/user/user.action";
import { ItemRow } from "./ItemRow";

export const ProdItem = ({ product, editItem }) => {
    const [editable, setEditable] = useState(false);
    const dispatch = useDispatch();
    const { products, token } = useSelector((state) => state);

    const handleEdit = (event, id) => {
        let name = event.currentTarget.title;
        let value = event.target.value;
        editItem(name, value, id);
    };

    const onDelete = async (item) => {
        await dispatch(DeleteProduct(products, item.ID, token));
        setEditable(false);
    };

    const onEdit = async () => {
        setEditable(!editable);
        // if (editable) {
        //     await dispatch(UpdateProduct(products, product, token));
        // }
    };

    return (
        <View style={styles.container}>
            <View style={styles.View}>
                <View
                    title={`ID: ${product?.ID}`}
                    titleStyle={[
                        styles.ViewHeader,
                        product?.status && styles.strikethrough,
                    ]}
                />
                <View>
                    <View style={styles.productBody}>
                        <ItemRow
                            editable={editable}
                            item={product?.name}
                            title={"name"}
                            handleEdit={(e) => {
                                handleEdit(e, product?.ID);
                            }}
                        />
                        <ItemRow
                            editable={editable}
                            item={product?.description}
                            title={"description"}
                            handleEdit={(e) => {
                                handleEdit(e, product?.ID);
                            }}
                        />
                        <ItemRow
                            editable={editable}
                            item={product?.price}
                            title={"price"}
                            handleEdit={(e) => {
                                handleEdit(e, product?.ID);
                            }}
                        />
                        <ItemRow
                            editable={editable}
                            item={product?.quantity}
                            title={"quantity"}
                            handleEdit={(e) => {
                                handleEdit(e, product?.ID);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.actions}>
                    {editable && (
                        <Button
                        title="Delete"
                            onPress={() => onDelete(product)}
                            style={[styles.button, styles.deleteButton]}
                        >
                            Delete
                        </Button>
                    )}
                    <TouchableOpacity
                        title="test"
                        onPress={() => onEdit()}
                        disabled={product?.status}
                        style={[styles.button, styles.addButton]}
                    >
                        <Text>{!editable ? "Edit" : "Update"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 20,
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
        display: "flex",
        justifyContent: "space-between",
    },
    actions: {
        display: "flex",
        justifyContent: 'center'


    }
})  