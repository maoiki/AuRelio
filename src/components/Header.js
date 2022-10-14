import React, {useState} from 'react';
import { View,StyleSheet, Text, Modal } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { theme } from '../theme/theme';

export function Header ({navigation}){
  const [visibleModal, setVisibleModal] = useState(false);


    return(
        <View>
        <View style={styles.header}>
          <Text style={styles.text}> AuRelius </Text>
          <FontAwesome5 style={styles.icon} filled name="dog" size={26} color={theme.colors.green} onPress={() => setVisibleModal(true) }  />
        </View>

        <Modal
          animationType='fade'
          visible={visibleModal}
          transparent={true}
          onRequestClose={ () => setVisibleModal(false) }
          > 
          <View style={styles.modal_outside}> 
          <View style={styles.modal_box}> 
            <View style={styles.modal_header}>
            <Text style={styles.modal_text}>Sobre</Text>
              <FontAwesome style={styles.icon}  name="close" size={26} color={theme.colors.white} onPress={() => setVisibleModal(false) }  />
            </View>
            <View style={styles.modal_content}> 
              <Text style={styles.modal_content_text}>Este aplicativo foi desenvolvido por Julio Duarte na disciplina "Desenvolvimento para dispositivos móveis" no semestre de 2022.2</Text>
            </View>
          </View>
          </View>

        </Modal>
      </View>
    )};
    
    const styles = StyleSheet.create({
        header: {
          flexDirection:'row',
          padding:10,
          height:50,
          backgroundColor: theme.colors.background,
          alignItems: 'center',
          justifyContent:'space-between',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 0.62,
          elevation: 4,
      
        },
        text: {
          fontSize:28,
          color: theme.colors.green,
        },
        icon: {
          marginRight: 10
        },
        modal_box: {
        width: 310,
        backgroundColor: theme.colors.green,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 0.62,
        elevation: 10,
        borderRadius: 20,
        },
        modal_content: {
          fontSize:28,
          padding: 10,
      
        },
        modal_content_title: {
          fontSize:20,
          backgroundColor: theme.colors.green,
          color: theme.colors.green_dark,
          margin: 10,
        },
        modal_content_text: {
          fontSize:18,
          backgroundColor: theme.colors.green,
          color: theme.colors.green_dark,
          marginHorizontal: 10,
        },
        modal_header: {
          flexDirection:'row',
          padding:10,
          height:50,
          alignItems: 'center',
          justifyContent:'space-between',
        },
        modal_text: {
          fontSize:28,
          color: theme.colors.white,
          marginLeft: 10,
        },
        modal_outside: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }
    });
