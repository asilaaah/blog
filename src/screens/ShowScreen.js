import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons';

const ShowScreen = props => {
  const id = props.navigation.getParam('id');

  const {state} = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id===id)

    return < View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>

};

ShowScreen.navigationOptions = props => {
    return {
        headerRight: () => {
            return(
        <TouchableOpacity onPress={()=> props.navigation.navigate('Edit',{id: props.navigation.getParam('id')})}>
            <AntDesign name="edit" style={styles.iconStyle}/>
        </TouchableOpacity>
        )
        }
    };

};

const styles = StyleSheet.create({
    iconStyle:{
        fontSize: 30,
        marginRight: 10
    }
    });

export default ShowScreen;