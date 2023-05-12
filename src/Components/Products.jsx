import { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { onGetProducts, onSerachQuery } from "../store/user/user.action";
import { ProdItem } from "./ProdItem";
import { useNavigation } from "@react-navigation/native";



export const Products = () => {
    const { user, products, search_query } = useSelector((storeState) => storeState.userModule)
    const [filtered, setFiltered] = useState(null)
    const dispatch = useDispatch()
    const navigator = useNavigation()
    useEffect(() => {
        products && setFiltered(products.sort((a, b) => b.ID - a.ID))
    }, [products, products?.length])

    useEffect(() => {
        products !== null && setFiltered(products?.filter((item) => item?.name?.toLowerCase().includes(search_query.toLowerCase())));
    }, [search_query]);


    useEffect(() => {
        const getProds = async () => {
            await dispatch(await onGetProducts(user.token))
        }
        user && getProds()
    }, [user])
    const editItem = (value, id, title) => {
        let temp = [...filtered]
        let index = filtered.findIndex((item) => item.ID === id)
        temp[index][title] = value
        setFiltered(temp)
    }

    const handleSearch = async (value) => {
        await dispatch(onSerachQuery(value))
    };

    const handleClick = () => {
        navigator.navigate('NewProduct')
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={'Search'}
                    onChangeText={(value) => handleSearch(value)}
                    keyboardType={'default'}
                />
                <TouchableOpacity onPress={() => { handleClick() }} style={styles.whiteWrapperButton}                >
                    <Text style={styles.whiteButton}>{'Add New Product'}</Text>
                </TouchableOpacity>
                {filtered && filtered.map(product => {
                    return (
                        <View key={product.ID}>
                            <ProdItem product={product} products={products} editItem={editItem} />
                        </View>

                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        backgroundColor: '#343a40',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
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
    },
    input: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        marginRight: 10,
        fontSize: 20


    },
});