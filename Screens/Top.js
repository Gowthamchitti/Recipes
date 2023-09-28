import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Top = () => {
  return (
    <View>
      <Text style={{fontSize:40,fontWeight:"500"}}>Featured Recipe</Text>
      <Text style={{fontSize:20,fontWeight:"500"}}>By Admin</Text>
    </View>
  )
}

export default Top

const styles = StyleSheet.create({})