import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList,  Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { AntDesign } from '@expo/vector-icons'

const IndexScreen = props => {

    const {state, deleteBlogPost} = useContext(Context);

    return <View>
        <FlatList
            data={state}
            keyExtractor= {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return (
                <TouchableOpacity onPress={() => props.navigation.navigate('Show', {id : item.id})}>
                <View style={styles.blogListStyle}>
                <Text style={styles.textStyle}>{item.title}</Text>
                <TouchableOpacity onPress= {()=>deleteBlogPost(item.id)}>
                <AntDesign name="delete" style={styles.iconStyle}/>
                </TouchableOpacity>
                </View>
                </TouchableOpacity>
                );
            }}
        />
    </View>

};

IndexScreen.navigationOptions = props => {
    return {
        headerRight: () => {
            return(
        <TouchableOpacity onPress={()=> props.navigation.navigate('Create')}>
            <AntDesign name="plus" style={styles.iconStyle}/>
        </TouchableOpacity>
        )
        }
    };

};

const styles = StyleSheet.create({
    iconStyle:{
        fontSize: 25,
        marginRight: 10
    },

    textStyle: {
        flex: 1,
        fontSize: 17,
    },
    blogListStyle: {
        paddingTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});

export default IndexScreen;