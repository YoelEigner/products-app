import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ItemRow } from "./ItemRow";
import { useEffect, useState } from "react";
import { DeleteProduct, FavorateProduct, UpdateProduct } from "../store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Details = (props) => {
    const { state } = props.route.params
    const [product, setProduct] = useState(null)
    const [editable, setEditable] = useState(false);
    const { user, products } = useSelector((storeState) => storeState.userModule)
    const [isFaveorate, setIsFavorate] = useState(false)
    const dispatch = useDispatch()
    const navigator = useNavigation()
    useEffect(() => {
        setProduct(state)
    }, [state])

    const onEdit = async () => {
        setEditable(!editable);
        if (editable) {
            await dispatch(UpdateProduct(products, product, user.token));
        }
    };

    const onDelete = async (item) => {
        await dispatch(DeleteProduct(products, item.ID, user.token));
        setEditable(false);
        navigator.goBack()
    };
    const handleEdit = (value, title) => {
        const tempProduct = { ...product };
        tempProduct[title] = value;
        setProduct(tempProduct);
    };

    const onFavorite = async (id) => {
        const data = { ID: id, favorate: !product.favorate ? 1 : 0 }
        await dispatch(FavorateProduct(products, data, user.token))
    }

    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity
                onPress={() => onFavorite(state.ID)}
                style={styles.favoriteWrapperButton}
            >
                <Icon name="star" size={30} color={product?.favorate ? '#F7D488' : '#FFFFFF'} />
            </TouchableOpacity>
            <View style={styles.View}>
                <ItemRow
                    editable={editable}
                    item={product?.name}
                    value={product?.name}
                    title={"name"}
                    handleEdit={(value, item, title) => { handleEdit(value, title); }}
                />
                <ItemRow
                    editable={editable}
                    item={product?.description}
                    value={product?.description}
                    title={"description"}
                    handleEdit={(value, item, title) => { handleEdit(value, title); }}
                />
                <ItemRow
                    editable={editable}
                    item={product?.price}
                    value={product?.price}
                    title={"price"}
                    handleEdit={(value, item, title) => { handleEdit(value, title); }}
                />
                <ItemRow
                    editable={editable}
                    item={product?.quantity}
                    value={product?.quantity}
                    title={"quantity"}
                    handleEdit={(value, item, title) => { handleEdit(value, title); }}
                />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity
                    onPress={() => onEdit()}
                    style={styles.whiteWrapperButton}
                >
                    <Text style={styles.buttonText}>{!editable ? "Edit" : "Update"}</Text>
                </TouchableOpacity>
                {editable && (
                    <TouchableOpacity
                        onPress={() => onDelete(state)}
                        style={styles.redWrapperButton}
                    >
                        <Text style={styles.buttonText}>{`Delete`}</Text>
                    </TouchableOpacity>
                )}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20
    },
    scrollView: {
        backgroundColor: "#495057",
    },
    View: {
        borderRadius: 20,
        height: '100%',
        marginTop: 40
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
    favoriteWrapperButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 12,
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        shadowOffset: { width: -2, height: 4 },
        shadowRadius: 3,
        borderRadius: 20,
        backgroundColor: 'gray',
        elevation: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderWidth: 1,
        position: 'absolute',
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
})