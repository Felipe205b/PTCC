import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        width:"100%",
        height:"100%",
    },
    box1:{
        width:"80%",
        height:"auto",
        marginHorizontal:50,
        marginTop:20,
    },
    inBox1:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        marginTop:20,

    },
    lines:{
        height:5,
        width:"100%",
        backgroundColor:"#000000",
        marginVertical:10,
    },
    inBox2:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        marginTop:20,
        alignItems:"center",
    },
    textInBox:{
        width:"80%",
    },
    textsInBoxStyles:{
        fontSize:12,
    },
    image2:{
        marginRight:10
    }
})

export default styles;