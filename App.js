import React, {useState, useEffect} from 'react';
import { View, Alert, ActivityIndicatorBase } from 'react-native';
import styles from './App.styles';
import questions from './assets/data/allQuestions'
import ImageMulatipleChoiceQuestions from './src/components/ImageMultipleChoiceQuestion/ImageMutlipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import Header from './src/components/Header/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(questions[currentQuestionIndex]);
  const [lives, setLives] = useState(5)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if(currentQuestionIndex > questions.length) {
      Alert.alert('you won');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestionIndex(questions[currentQuestionIndex])
    }
  },[currentQuestionIndex])

  useEffect(() => {
    loadData()
  },[])

  useEffect(() => {
    if(hasLoaded) {
      saveData()
    }
  },[lives, currentQuestionIndex, hasLoaded])

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const restart = () => {
    setLives(5)
    setCurrentQuestionIndex(0)
  }

  const onWrong = () => {
    Alert.alert('Wrooong')
    if(lives <= 1) {
    Alert.alert('Game over', "Try again", [
      {
        text: 'Try again',
        onPress: restart,
      }
    ])
    setLives(lives - 1)
  } else {
    setLives(lives - 1)
  }
}

const saveData = async () => {
  await AsyncStorage.setItem('lives', lives.toString())
  await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString())
}
  
const loadData = async () => {
  const loadedLives  = await AsyncStorage.getItem('lives')
  if( loadedLives) {
    setLives(parseInt(loadedLives))
  }
  const currentQuestionIndex  = await AsyncStorage.getItem('currentQuestionIndex')
  if(currentQuestionIndex) {
    setCurrentQuestionIndex(parseInt(currentQuestionIndex))
  }
  setHasLoaded(true)
 }

 if(!hasLoaded) {
  return <ActivityIndicator />
 }


  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives}/>
      {console.warn(currentQuestion.type)}
      { currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' ? <ImageMulatipleChoiceQuestions question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong}/> : null}
     {currentQuestion.type === 'OPEN_ENDED' ? <OpenEndedQuestion question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong}/> : null } 
    </View>
  );
}

