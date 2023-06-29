import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitScreen from './src/pages/InitScreen/index';
import LoginScreen from './src/pages/LoginScreen/index';
import SinginScreen from './src/pages/SinginScreen/index';
import Stein from './src/pages/HomeMapScreen/';
import UserScreen from "./src/pages/UserScreen/index";
import ConfingScreen from "./src/pages/ConfingScreen/index";
import ShareToAFriendScreen from "./src/pages/ShareToAFriendScreen/index";
import AddCharger from "./src/pages/AddCharger/index";
import FaqScreen from "./src/pages/FaqScreen/index";
import PersonalContentScreen from "./src/pages/PersonalContentScreen/index"
import EditingHouse from "./src/pages/EditingHouse/index"
import ChangeAccount from "./src/pages/ChangeAccount/index"
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator();


function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InitScreen" component={InitScreen} 
          options={{ title:"STEIN",
          headerTransparent:true,
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontSize:34,
            fontWeight:"600",
            color:"#000000"
          }
        }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{ title:"ENTRAR",
        headerTransparent:true,
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontSize:34,
          fontWeight:"900",
          color:"#563595"
        }
      }}
        />
        <Stack.Screen name="SinginScreen" component={SinginScreen}
        options={{ title:"Cadastrar",
        headerTransparent:true,
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontSize:34,
          fontWeight:"900",
          color:"#563595"
        }
      }}
        />
        <Drawer.Screen name="Stein" component={Stein}
        options={{ title:"",
        headerTransparent:true,
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontSize:34,
          fontWeight:"900",
          color:"#563595"
        }
      }}
        />
        <Stack.Screen name="UserScreen" component={UserScreen}
        options={{ title:"",
        headerTransparent:true,
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontSize:34,
          fontWeight:"900",
          color:"#563595"
        }
      }}
        />
        <Stack.Screen name="ConfingScreen" component={ConfingScreen}
        options={{
          title:"Configurações",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontSize:34,
            fontWeight:"900"
          },
          headerStyle:{
            backgroundColor:"#ffffff"
          },
        }}
        />

        <Stack.Screen name="ShareToAFriendScreen" component={ShareToAFriendScreen}
        options={{
          title:"Convidar um amigo",
          headerTitleAlign:"left",
          headerTitleStyle:{
            fontSize:34,
            fontWeight:"900"
          },
          headerStyle:{
            backgroundColor:"#ffffff"
          },
        }}
        />

        <Stack.Screen name="AddCharger" component={AddCharger}
        options={{
          title:"Adicionar carregador",
          headerTitleAlign:"left",
          headerTitleStyle:{
            fontSize:25,
            fontWeight:"900"
          },
          headerStyle:{
            backgroundColor:"#ffffff"
          },
        }}
        />
        <Stack.Screen name="FaqScreen" component={FaqScreen}
        options={{ title:"",
        headerTransparent:true,
        headerTitleAlign:'left',
        headerTitleStyle:{
          fontSize:34,
          fontWeight:"900",
          color:"#563595"
        }
      }}
        />
        <Stack.Screen name="PersonalContentScreen" component={PersonalContentScreen}
        options={{
          title:"Conteúdo pessoal",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontSize:30,
            fontWeight:"900"
          },
          headerStyle:{
            backgroundColor:"#ffffff"
          },
        }}
        />
        <Stack.Screen name="EditingHouse" component={EditingHouse}
        options={{
          title:"Editar casa",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontSize:30,
            fontWeight:"900"
          },
          headerStyle:{
            backgroundColor:"#ffffff"
          },
        }}
        />
        <Stack.Screen name="ChangeAccount" component={ChangeAccount}
        options={{
          title:"Alterar Conta",
          headerTitleAlign:"center",
          headerTitleStyle:{
            fontSize:30,
            fontWeight:"900"
          },
          headerStyle:{
            backgroundColor:"#ffffff"
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//ChangeAccount
export default App;