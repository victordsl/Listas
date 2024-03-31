import { createNativeStackNavigator} from '@react-navigation/native-stack'

import Tela1 from '../paginas/Tela1'
import Tela2 from '../paginas/Tela2'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Tela1"
            component={Tela1}
        />
        <Stack.Screen
            name="Tela2"
            component={Tela2}
        />
        </Stack.Navigator>
    )
}