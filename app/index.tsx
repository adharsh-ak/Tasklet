import { FlatList, Text, View, Image,StyleSheet, TouchableOpacity, TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons"
import {Checkbox} from 'expo-checkbox'

export default function Index() {
  const todoData = [
    {
      id : 1,
      title : "Task 1",
      isDone : false,
    },
    {
      id : 2,
      title : "Task 2",
      isDone : true,
    },
    {
      id : 3,
      title : "Task 3",
      isDone : false,
    },
    {
      id : 4,
      title : "Task 4",
      isDone : true,
    },
    {
      id : 5,
      title : "Task 5",
      isDone : false,
    },
    {
      id : 6,
      title : "Task 6",
      isDone : true,
    },
    {
      id : 7,
      title : "Task 7",
      isDone : false,
    },
    {
      id : 8,
      title : "Task 8",
      isDone : false,
    }
  ];

  return (
    <SafeAreaView style={styles.container} >
      <View style = {styles.header}>
        <TouchableOpacity onPress={() => {alert('Menu Clicked')}}>
          <Ionicons name="menu" size={24} color={'#333'}/>
        </TouchableOpacity>

        <Image source={require('../assets/images/adaptive-icon.png')} style={{width: 40, height: 40}}/>
      </View>

      <View style = {styles.searchBar}>
        <Ionicons name="search" size={24} color={'#333'}/>
        <TextInput placeholder="Search" style = {styles.searchInput} />
      </View>

      <FlatList data= {todoData} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (
        <View style = {styles.toDoContainer}>
          <View style = {styles.toDoInfoContainer}>
            <Checkbox value={item.isDone}/>
            <Text>{item.title}</Text>
          </View>
          <Ionicons name="trash" size={24} color={'#333'}/>
        </View>
      )}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor: '#f5f5f5'
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 30,
    gap: 10,
    backgroundColor: '#fff',
    marginBottom: 20
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    alignItems: 'center',
    color: '#333',
    backgroundColor: 'white',
  },
  toDoContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 25,
    marginBottom: 20,
  },
  toDoInfoContainer: {
    flexDirection: 'row',
    gap: '35',
    alignItems: 'center',
    marginBottom: 10,
  }
});