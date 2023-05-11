import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Login } from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { onGetProducts } from "../store/user/user.action";
import { ProdItem } from "./ProdItem";



export const Products = () => {
    const { user, products } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()

    useEffect(() => {
        const getProds = async () => {
            await dispatch(await onGetProducts(user.token))
        }
        user && getProds()
    }, [user])
    const editItem = (name, value, id) => {
        console.log(name)
    }
    if (!user) return <Login />
    return (
        <ScrollView>
            <View style={styles.marginTop}>
                {products && products.map(product => {
                    return (
                        <View key={product.ID}>

                            <ProdItem product={product} products={products} editItem={editItem} />
                            {/* <Text>{item.name}</Text> */}
                        </View>

                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginTop: {
        marginTop: 50
    }
});