import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Products } from '../Components/Products'
import { Login } from '../Components/Login';
import { useSelector } from 'react-redux';
import { Details } from '../Components/Details';
import { NewProduct } from '../Components/NewProduct';


const Stack = createNativeStackNavigator();

export const NavigatorComp = () => {
  const { user } = useSelector((storeState) => storeState.userModule)

  return (
    <>
      {!user &&
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      }
      {user &&
        <Stack.Navigator>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="NewProduct" component={NewProduct} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      }
    </>
  )
}
