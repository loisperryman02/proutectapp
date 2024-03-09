import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, FlatList, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from "axios";

export default function Friends({ navigation, route }) {

    const [request, setRequest] = useState('');
    const [allRequests, setAllRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            
            let username = route.params;
            const response = await axios.get(`http://172.25.19.235:3000/friend/requests/${username}`);
            setAllRequests(response.data.requests);

            if (!response) {
                console.log("User does not have any requests!");
            }
            
        };

        fetchRequests();
    }, []);

    const handleAccept = (item) => {
        const url = "http://172.25.19.235:3000/acceptUser";
        const accept_user = {
            request_username: item,
            username: route.params
        }

        axios
            .post(url, accept_user)
            .then((response) => {
                const result = response.data;

                // Ensures that the list of requests is updated in real-time. 
                const updatedRequests = allRequests.filter(request => request !== item);
                console.log(updatedRequests);
                setAllRequests(updatedRequests);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log("there is an error!!");
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                    console.log("there is an error!!");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            })
    }

    const handleReject = (item) => {
        const url = "http://172.25.19.235:3000/rejectUser";
        const accept_user = {
            reject_username: item,
            username: route.params
        }

        axios
            .post(url, accept_user)
            .then((response) => {
                const result = response.data;
                const updatedRequests = allRequests.filter(request => request !== item);
                console.log(updatedRequests);
                setAllRequests(updatedRequests);
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    console.log("there is an error!!");
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                    console.log("there is an error!!");
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
            })
    }

    const sendFriendRequest = () => {
        const url = "http://172.25.19.235:3000/friend";

        // Sets details of the username that is being requested. 
        const request_user = {
            username: route.params,
            friend_username: request
        }

        axios
            .post(url, request_user)
            .then((response) => {
              const result = response.data;
            //   handleHomeNavigation(details);               
            })
            .catch(error => {
              
              if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log("there is an error!!");
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                console.log("there is an error!!");
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
          })
      }

  return (
    <View style={styles.background}>

      <View style={styles.top_container}>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>
             Friends
          </Text>
        </View>
      </View>

      <View style={styles.bottom_container}>
        <View style={styles.search_friends_container}>
            <View style={styles.request_title}> 
                <Text style={styles.button_text}>
                    Add friends:
                </Text>
            </View>
            <View style = {styles.searchBarContainer}> 
            <Icon style={styles.searchIcon} name="search" />
                <TextInput 
                    style = {styles.searchInput}
                    placeholder='Search for a user'
                    value={request}
                    onChangeText={setRequest}>
                </TextInput>
            </View>
            <Pressable style={styles.button} onPress={sendFriendRequest}>
                <Text style={styles.send_request_btn}> Send friend request </Text>
            </Pressable>
        </View>

        <View style={styles.requests_container}>
          <View style={styles.request_title}>          
            <Text style={styles.button_text}>
                Current requests:
            </Text>
          </View>

          <View style={styles.list_container}>
            <FlatList
                    data={allRequests}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                    <View style={styles.flatlist_container}>
                        <View style = {styles.item_container} >
                            <Text style={styles.item_text}>{item}</Text>
                        </View>
                        <Pressable style={styles.accept_btn} onPress={() => handleAccept(item)}>
                            <Text style={styles.acceptRejectText}>Accept</Text>
                        </Pressable>
                        <Pressable style={styles.reject_btn} onPress={() => handleReject(item)}>
                            <Text style={styles.acceptRejectText}>Reject</Text>
                        </Pressable>
                        {/* Add a reject button similarly */}
                    </View>
                    )}
                />
          </View>


        </View>
      </View>
  
    </View>
  );
}


const styles = StyleSheet.create({
  top_container: {
    height: "15%",
    backgroundColor: 'white'
  },
  bottom_container: {
    height: "85%",
    flexDirection: "column",
    backgroundColor: '#013B1E',
    alignItems: "center"
  },
  requests_container: {
    height: "40%",
    backgroundColor: "white",
    width: "80%",
    margin: "2.5%",
    borderRadius: "10%",
    paddingTop: "13%",
    marginTop: "5%",
    alignItems: "center"
  },
  button_text: {
    color: "#013B1E",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },
  item_text: {
    color: "#013B1E",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 15
  },
  title_text: {
    color: "#013B1E",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    paddingTop: "10%"
  },
  request_title: {
    borderBottomColor: "#013B1E",
    borderBottomWidth: 2,
    width: "60%",
    paddingBottom: "2.5%",
    marginTop: "-10%"
  },
  searchBarContainer: {
    height: '25%',
    backgroundColor: '#E2E4F1',
    borderRadius: '70%',
    width: '70%',
    alignItems: 'left',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: "8%"
  },
  searchInput : {
    fontSize: 20,
    marginTop: 7,
    paddingLeft: 10,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  searchIcon: {
    fontSize: 23,
    marginTop: 7,
    color: "#013B1E",
    opacity: 0.8,
    fontFamily: "Arial"
  },
  search_friends_container: {
    height: "30%",
    backgroundColor: "white",
    width: "80%",
    margin: "2.5%",
    borderRadius: "10%",
    paddingTop: "13%",
    marginTop: "5%",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#013B1E",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "60%",
    height: 40,
    marginTop: "7%"
  },
  acceptRejectText: {
    color: "#fff",
    fontWeight: "bold"
  }, 
  list_container: {
    width: "100%",
    height: "100%"
  },
  flatlist_container: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    marginTop: "5%"
  },
  item_container: {
    flex: 0.4,
    marginLeft: "10%"
  },
  accept_btn: {
    flex: 0.25,
    alignItems: "center",
    backgroundColor: "#5EDD9D",
    paddingVertical: 2,
    height: 20
  },
  reject_btn: {
    flex: 0.25,
    alignItems: "center",
    backgroundColor: "#DD5E5E",
    paddingVertical: 2,
    height: 20,
    marginLeft: "5%"
  }, 
  send_request_btn: {
    color: "#fff",
    fontWeight: "bold"
  }
});