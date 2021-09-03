import React from 'react';
import { Text, View,ScrollView } from 'react-native';
import * as firebase from "firebase";
import db from '../config'

export default class Searchscreen extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        allTransactions : []
      }
    }
    componentDidMount = async () => {
      const query = await db.collection("transactions").get();
      query.docs.map((doc)=>{
        this.setState({
          allTransactions : [...this.state.allTransactions,doc.data()]
        })
      })
    }
    render() {
      return (
        <ScrollView>
          {
            this.state.allTransactions.map((transaction)=>{
              return(
                <View style = {{borderBottomWidth : 2}}>
                  <Text>{"Book Id : " + transaction.bookId}</Text>
                  <Text>{"Student Id : " + transaction.studentId}</Text>
                  <Text>{"Transaction Type : " + transaction.transactionType}</Text>
                  <Text>{"Date : " + transaction.date.toDate()}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      );
    }
  }