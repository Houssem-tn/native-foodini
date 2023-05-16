import React, { useState,useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native';

const Comments = ({route}) => {
  const { idRestaurent,restaurentEmail,restaurentNumber,idPosts } = route.params;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(`http://192.168.100.13:3000/user/getComments/${idPosts}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Failed to fetch restaurants:', error);
      }
    };

    getComments();
  }, []);


  const handleAddComment = () => {
    setComments(prevComments => [...prevComments, newComment]);
    setNewComment('');
  };




  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
            <Text style={styles.text}>This is what people said so far about this typical product, feel free to share with us Your opinion down below!</Text>
        </View>
      <ScrollView style={styles.commentsContainer}>
        {comments.map((comment, index) => (
          <View key={index} style={styles.commentBox}>
            <Text style={styles.commentText1}>{comment.CommenterName} :</Text>
            <Text style={styles.commentText2}>{comment.commentsBody}</Text>
            
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Write a comment..."
          multiline
          style={styles.textInput}
        />
        <Button title="Submit" onPress={handleAddComment} color="#ff8c52" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentsContainer: {
    flex: 1,
    padding: 10,
  },
  commentBox: {
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  commentText1: {
    fontSize: 20,
    color:'red'
  },
  commentText2: {
    fontSize: 16,
  },
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  textInput: {
    flex: 1,
    marginRight: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  innerContainer: {
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  text: {
    color: '#333',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
  },
});

export default Comments;
