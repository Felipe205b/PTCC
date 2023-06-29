import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    conteiner:{
      flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 55,
          marginTop:13,
    },
    backgroundLogo:{
      backgroundColor: "purple",
      width: 250,
      height: 250,
      borderRadius: 300, 
      alignItems:"center",
      justifyContent:"center",
    },
    logoStein:{
      flex:1,
      width: "100%",
      resizeMode: "contain",
      marginTop:30,
      },
      textLogo:{
        marginBottom: 13,
        fontWeight:"600",
        fontSize: 17,
        color:"#000000",
      },
      textAbove:{
        marginTop:9,
        fontWeight:"600",
        fontSize: 17,
        color:"#000000",
      },
      buttons:{
        width: 265,
        height: 60,
        backgroundColor: "purple",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        margin: 30,
      },
      textButtons:{
        fontSize: 20,
        fontWeight:"900",
        color: "white",
      },
      textSingle1:{
        fontSize:17,
        fontWeight:"700",
        textDecorationLine:"underline",
        color:"#000000",
      }
   })

   export default styles;