import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Touchable,
  TouchableOpacity,
  AsyncStorage,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  Image
} from 'react-native';
import COLORS from '../const/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'
import Plants from '../const/Plants';
import { NavigationContainer } from '@react-navigation/native';
const width = Dimensions.get('window').width / 2 - 30;

// import { useSelector , useDispatch } from 'react-redux';
// const state = useSelector(state => state);
// console.log(state)
const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETHIC']

function Homepage({navigation}) {
  const [categoryindex, setCategoryindex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // const [plantdata, setPlantdata]=useState(Plants);
  // console.log(plantdata)

  const Plants = ([
    {
      id: 1,
      name: 'Succulent Plant',
      price: '39.99',
      like: true,
      img: require('../assets/plant1.png'),
      about:
        'Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },

    {
      id: 2,
      name: 'Dragon Plant',
      price: '29.99',
      like: false,
      img: require('../assets/plant2.png'),
      about:
        'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 3,
      name: 'Ravenea Plant',
      price: '25.99',
      like: false,
      img: require('../assets/plant3.png'),
      about:
        'Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },

    {
      id: 4,
      name: 'Potted Plant',
      price: '25.99',
      like: true,
      img: require('../assets/plant4.png'),
      about:
        'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 5,
      name: 'Ravenea Plant',
      price: '50.99',
      like: true,
      img: require('../assets/plant5.png'),
      about:
        'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
    {
      id: 6,
      name: 'Dragon Plant',
      price: '50.99',
      like: false,
      img: require('../assets/plant6.png'),
      about:
        'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    },
  ]);

  const Categorylist = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCategoryindex(index)} activeOpacity={0.8}>
            <Text style={[styles.categoryText, categoryindex == index && styles.categoryTextSelected]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('DetailsScreen', plant)}>
      <View style={styles.Cards}>
        <View style={{ alignItems: 'flex-end' }}>
          <View style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: plant.like ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0, 0, 0, 0.2)'
          }}>
            <Icon name="heart"
              size={18}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
        <View style={{ height: 100, alignItems: 'center' }}>
          <Image style={{ flex: 1, resizeMode: 'contain' }} source={plant.img} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>
          {plant.name}
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5
        }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 19, marginTop: 5 }}>{plant.price}</Text>
          <View style={{ height: 30, width: 28, backgroundColor: COLORS.green, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: 'bold' }}>+</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity> 
    )
  };


  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
          <Text style={{ fontSize: 38, fontWeight: 'bold', color: COLORS.green }}>Plants Shop</Text>
        </View>
        <Icon name="cart-outline" size={40} />
      </View>

      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchcontainer}>
          <Icon name="search-sharp" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View>
          <Icons name="sort-amount-down" size={30} style={styles.sortbtn} />
        </View>
      </View>
      <Categorylist />
      {/* <Card /> */}
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50
        }}
        numColumns={2}
        data={Plants}
        renderItem={({ item }) =>
          <Card plant={item} />
        }
      />
    </SafeAreaView>
  );
}

export default Homepage;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchcontainer: {
    height: 50,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10
  },
  input: {
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.dark,
    flex: 1
  },
  sortbtn: {
    padding: 8,
    color: COLORS.green
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20
  },
  categoryText: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold'
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green
  },
  Cards: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15
  }
})

// const logout = async ()=>{
//   await AsyncStorage.removeItem('token')
//   navigation.navigate('Signin')
// }

{/* <TouchableOpacity onPress={logout}>
        <Text>Log Out</Text>
      </TouchableOpacity> */}
{/* <Text style={{color:COLORS.dark, backgroundColor:COLORS.red}}>{Plants.name}</Text> */ }
{/* <Text style={{ color: COLORS.white, fontSize: 10 , color:'black'}}> */ }
{/* {Plants.map((i)=>{
            return(
              <View style={styles.Cards}>
              <Text key={i}>
                {i.price}
              </Text>
              </View>
            )
          })} */}
{/* </Text> */ }