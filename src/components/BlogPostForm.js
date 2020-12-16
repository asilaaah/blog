import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View style={styles.container}>
        <Text style={styles.textStyle}>Enter Title:</Text>
        <TextInput
            style={styles.titleStyle}
            value={title}
            onChangeText={(text) => setTitle(text)}
            />
        <Text style= {styles.textStyle}>Enter Content:</Text>
        <TextInput
            style={styles.contentStyle}
            value={content}
            onChangeText={(text) => setContent(text)}
            />
        <Button
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
         />
    </View>
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    titleStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 50

    },
    textStyle: {
        fontSize: 18,
        marginVertical: 5
    },

    contentStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 100,
        marginBottom: 15
    }
});

export default BlogPostForm;