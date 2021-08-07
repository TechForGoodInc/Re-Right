import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import '../../../config/global';
import color from '../../../config/colors';
import darkColors from '../../../config/darkColors';
export default function RecapQuiz({ navigation }) {
const colors = global.isDarkModeEnabled? darkColors: color; 
//sample questions
const questions = [
  {
    questionText: "Which of the following is the first charter of Human's rights?",
    answerOptions: [
      { answerText: "Bill of rights", isCorrect: false },
      { answerText: "Constitution of media", isCorrect: false },
      { answerText: "The Cyrus cylinder", isCorrect: true },
    ],
  },
  {
    questionText: "Who played an important role in international human rights law?",
    answerOptions: [
      { answerText: "Economic summit", isCorrect: false },
      { answerText: "World War", isCorrect: false },
      { answerText: "The United Nations", isCorrect: true },
    ],
  },
  {
    questionText: "Who adopted the landmark document, the universal declaration of human rights?",
    answerOptions: [
      { answerText: "UNESCO", isCorrect: false },
      { answerText: "UNICEF", isCorrect: false },
      { answerText: "UNO", isCorrect: true },
    ],
  },
  {
    questionText: " When was the universal declaration of human rights adopted by UNO?",
    answerOptions: [
      { answerText: "10th December 1946", isCorrect: false },
      { answerText: "10th December 1947", isCorrect: false },
      { answerText: "10th December 1948", isCorrect: true },
    ],
  },
  {
    questionText: "Which article of the universal declaration of human rights tells that the right of nationality depends on one's wish?",
    answerOptions: [
      { answerText: "Article 15", isCorrect: true },
      { answerText: "Article 20", isCorrect: false },
      { answerText: "Article 10", isCorrect: false },
    ],
  },
  {
    questionText: "Who was the first chairman of the commission on human rights?",
    answerOptions: [
      { answerText: "Eleanor Roosevelt", isCorrect: true },
      { answerText: "Thomas Jefferson", isCorrect: false },
      { answerText: "Thomas Paine", isCorrect: false },
    ],
  },
  {
    questionText: "The Universal declaration of human rights was adopted under whose chairmanship?",
    answerOptions: [
      { answerText: "Eleanor Roosevelt", isCorrect: true },
      { answerText: "Jawaharlal Nehru", isCorrect: false },
      { answerText: "Adolf Hitler", isCorrect: false },
    ],
  },
  {
    questionText: "The Universal declaration of human rights is applicable to -",
    answerOptions: [
      { answerText: "Every individual, regardless of religion, race, gender, or cultural background", isCorrect: true },
      { answerText: "The citizens of UN member countries", isCorrect: false },
      { answerText: "Some countries", isCorrect: false },
    ],
  },
  {
    questionText: "On which anniversary of the Universal Declaration of human rights, the slogan 'All human rights for all' was adopted?",
    answerOptions: [
      { answerText: "12th", isCorrect: false },
      { answerText: "30th", isCorrect: false },
      { answerText: "50th", isCorrect: true },
    ],
  },
  {
    questionText: "How many articles are there in the Universal Declaration of human rights?",
    answerOptions: [
      { answerText: "30", isCorrect: true },
      { answerText: "15", isCorrect: false },
      { answerText: "10", isCorrect: false },
    ],
  },
  {
    questionText: "In which of the following year, the declaration of the rights of the child passed by the UN?",
    answerOptions: [
      { answerText: "1949", isCorrect: false },
      { answerText: "1959", isCorrect: true },
      { answerText: "1969", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following country has adopted the 'Declaration of the rights of man and of the citizen'?",
    answerOptions: [
      { answerText: "France", isCorrect: true },
      { answerText: "Italy", isCorrect: false },
      { answerText: "India", isCorrect: false },
    ],
  },
  {
    questionText: "The human rights day is observed on -",
    answerOptions: [
      { answerText: "9th December", isCorrect: false },
      { answerText: "10th December", isCorrect: true },
      { answerText: "1st December", isCorrect: false },
    ],
  },
  {
    questionText: "When did the NHRC (National Human Rights Commission) of India constitute?",
    answerOptions: [
      { answerText: "1993", isCorrect: true },
      { answerText: "1992", isCorrect: false },
      { answerText: "1990", isCorrect: false },
    ],
  },
  {
    questionText: "In which article 'right to education' is guaranteed in India?",
    answerOptions: [
      { answerText: "21", isCorrect: false},
      { answerText: "19", isCorrect: false },
      { answerText: "21A", isCorrect: true },
    ],
  },
  {
    questionText: "Who is the current chairman of the NHRC (National Human rights commission)?",
    answerOptions: [
      { answerText: "Justice A.S. Anand", isCorrect: false },
      { answerText: "Justice H.L. Dattu", isCorrect: true },
      { answerText: "Both of the above", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following can be the chairman of NHRC (National Human rights commission)?",
    answerOptions: [
      { answerText: "Any retired chief justice of the supreme court", isCorrect: true },
      { answerText: "Anyone who is appointed by the president", isCorrect: false },
      { answerText: "Any sitting judge of the supreme court", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following year is observed as the International Year of the child?",
    answerOptions: [
      { answerText: "1949", isCorrect: false },
      { answerText: "1959", isCorrect: false },
      { answerText: "1979", isCorrect: true },
    ],
  },
  {
    questionText: " Which of the following article of the Indian constitution prohibits hazardous jobs to children?",
    answerOptions: [
      { answerText: "Article 24", isCorrect: true },
      { answerText: "Article 21", isCorrect: false },
      { answerText: "Article 22", isCorrect: false },
    ],
  },
  {
    questionText: " What is the full form of UNHCR?",
    answerOptions: [
      { answerText: "United Nations high commissioner for refugees", isCorrect: true },
      { answerText: "United Nations high-level committee for refugees", isCorrect: false },
      { answerText: "United Nations health committee for refugees", isCorrect: false },
    ],
  },
  {
    questionText: "Who is the author of the book 'Human rights and inhuman wrongs'?",
    answerOptions: [
      { answerText: "V.R. Krishna Iyer", isCorrect: true },
      { answerText: "Upendra Baxi", isCorrect: false },
      { answerText: "Chiranjeev Nirmal", isCorrect: false },
    ],
  },
  {
    questionText: "What is the full form of ECOSOC?",
    answerOptions: [
      { answerText: "Eco society of Canada", isCorrect: false },
      { answerText: "Ecosocial council", isCorrect: false },
      { answerText: "Economic and social council", isCorrect: true },
    ],
  },
  {
    questionText: "The tenure of the chairperson of NHRC (National Human Rights Commission) is -",
    answerOptions: [
      { answerText: "4 years or upto 68 years of age", isCorrect: true },
      { answerText: "3 years or upto 69 years of age", isCorrect: false },
      { answerText: "5 years or upto 70 years of age", isCorrect: false },
    ],
  },
  {
    questionText: "The members and chairperson of NHRC are appointed by the recommendation of the committee that consists -",
    answerOptions: [
      { answerText: "The Prime Minister, Opposition's leader in the Lok Sabha, Lok Sabha Speaker, The Deputy Chairman of the Rajya Sabha", isCorrect: false },
      { answerText: "The Prime Minister, The Home Minister, Opposition Leader in the Lok Sabha, Opposition leader in the Rajya Sabha, Lok Sabha Speaker, The Deputy Chairman of the Rajya Sabha", isCorrect: true },
      { answerText: "The Prime Minister, T", isCorrect: false },
    ],
  },
  {
    questionText: "NHRC consists of a chairman and -",
    answerOptions: [
      { answerText: "Four members", isCorrect: true },
      { answerText: "Three members", isCorrect: false },
      { answerText: "Two members", isCorrect: false },
    ],
  },
  {
    questionText: "Where is the headquarter of the NHRC (National Human Rights Commission)?",
    answerOptions: [
      { answerText: "Kolkata", isCorrect: false },
      { answerText: "Mumbai", isCorrect: false },
      { answerText: "Delhi", isCorrect: true},
    ],
  },
  {
    questionText: "Article 340 of the Indian constitution deals with -",
    answerOptions: [
      { answerText: "Election commission", isCorrect: false },
      { answerText: "Union Public Service Commission", isCorrect: false },
      { answerText: "Backward classes commission", isCorrect: true },
    ],
  },
  {
    questionText: " Article 21 of the Indian Constitution provides for -",
    answerOptions: [
      { answerText: "Right to lively and liberal life", isCorrect: true },
      { answerText: "Right to subsist", isCorrect: false },
      { answerText: "Right to lively and liberal life", isCorrect: false },
    ],
  },
  {
    questionText: "Where is an International criminal court located?",
    answerOptions: [
      { answerText: "Geneva", isCorrect: false},
      { answerText: "Brussels", isCorrect: false },
      { answerText: "The Hague", isCorrect: true },
    ],
  },
  {
    questionText: "In which year have the changes been made in the NHRC (National Human Right Commission) Act?",
    answerOptions: [
      { answerText: "2006", isCorrect: true },
      { answerText: "2000", isCorrect: false },
      { answerText: "1999", isCorrect: false },
    ],
  },
];
const [questionNumber, setQuestionNumber] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [randomNumber, setrandomNumber] = useState(Math.floor(Math.random() * questions.length)),
 createRandomNumber = () => {
    const random = Math.floor(Math.random() * questions.length);
    setrandomNumber(random);
  };
//if user clicks on correct option, score will increase by 1
const handleAnswerOptionClick = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }
  const nextQuestion = questionNumber + 1;
  // if no more questions left, show score
  if (nextQuestion < 10) {
    {createRandomNumber();}
    setQuestionNumber(questionNumber + 1);
 
  } else {
    setShowScore(true);
  }
};
 
const handleRestartClick = () => {
 setShowScore(false);
 setScore(0);
 setQuestionNumber(0);
};
 
//all the styles are here sorry for the mess but we need this for dark mode to work
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background_screen,
  },
  questionNumber: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    color: colors.text_question_number,
  },
  question: {
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
    textAlign: 'center',
    color: colors.text_quiz,
  },
  answerOption: {
    margin: 10,
    padding: 15,
    width: "90%",
    alignSelf: "center",
    borderRadius: 30,
    justifyContent: "center",
  },
  optionText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: 'center',
  },
  score:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.text_quiz,

  },
  scoreText: {
    fontSize: 30,
    margin: 10,
    color: colors.text_quiz,

  },
  restartButton: {
    width: '30%',
    margin: 10,
    padding: 10,
    borderRadius: 20,
   
  },
  restartText: {
    fontSize: 15,
    alignSelf: 'center',
  }
  });
   
//  if showScore = true, scores shown. showScore = false, quiz shown.
return (
  <View style={styles.background}>
    {showScore ? (
      <View style={styles.score}>
        <Text style={styles.scoreText}>You scored {score} out of 10!</Text>
        <Pressable style={({ pressed }) => [
              {
                backgroundColor: pressed ? colors.button_retry_quiz_pressed : colors.button_retry_quiz,
              },
              styles.restartButton,
            ]}
            onPress = {() => handleRestartClick()}>
          <Text style = {styles.restartText}>Try Again</Text>
        </Pressable>
      </View>
    ) : (
      <>
        <Text style={styles.questionNumber}>
          Question {questionNumber + 1} /10
        </Text>
        <Text style={styles.question}>
          {questions[randomNumber].questionText}
        </Text>
        {questions[randomNumber].answerOptions.map((answerOption) => (
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? colors.button_quiz_pressed : colors.button_quiz,
              },
              styles.answerOption,
            ]}
            onPress={() => handleAnswerOptionClick(answerOption.isCorrect)}
          >
            <Text style={styles.optionText}>{answerOption.answerText}</Text>
          </Pressable>
        ))}
      </>
    )}
  </View>
);
}

