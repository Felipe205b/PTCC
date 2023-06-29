import React from "react";
import {View, Text, ScrollView, Image} from "react-native";
import styles from "./style"

const ChangeAccount = () => {
    return(
        <View style={styles.mainContainer}>
            <ScrollView>
                <Text>Alterar entre as contas e gerencie o login</Text>
                <View style={styles.box1}>
                    <Text>Atualmente em:</Text>
                    <View style={styles.inBox1}>
                        <Image source={require("../../../assets/Icons/image.png")}/>
                        <View>
                            <Text>Daniel Santana</Text>
                            <Text>Usuário</Text>
                            <Text>danielsantana@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.lines}/>
                <View style={styles.box1}>
                    <Text>Suas contas:</Text>
                    <View style={styles.inBox2}>
                        <Image 
                        style={styles.image2}
                        source={require("../../../assets/Icons/image1.png")}/>
                        <View style={styles.textInBox}>
                            <Text style={styles.textsInBoxStyles}>Estação de Carregamento Porsche - Quinta do Marquês</Text>
                            <Text style={styles.textsInBoxStyles}>Administrador</Text>
                            <Text style={styles.textsInBoxStyles}>danielmartins@gmail.com</Text>
                        </View>
                        <Image source={require("../../../assets/Icons/image1.png")}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ChangeAccount;