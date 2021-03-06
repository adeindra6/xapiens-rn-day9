import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

const data_todo = [
    {
        no: 1,
        todo: "Wake Up",
    },
    {
        no: 2,
        todo: "Breakfast",
    },
    {
        no: 3,
        todo: "Work",
    },
    {
        no: 4,
        todo: "Lunch",
    },
    {
        no:5,
        todo: "Go Home",
    },
    {
        no:6,
        todo: "Sleep",
    }
]

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={styles.touch}>
        <Text style={[styles.todo, style]}>{item.todo}</Text>
    </TouchableOpacity>
);

const App: () => React$Node = () => {
    const [selectedNo, setSelectedNo] = useState(null);

    const renderItem = ({ item }) => {
        const textDecorationLine = item.no === selectedNo ? 'line-through' : '';
    
        return (
          <Item
            item={item}
            onPress={() => setSelectedNo(item.no)
            }
            style={{ textDecorationLine }}
          />
        );
    };

    return(
        <>
            <View style={styles.body}>
                <Text style={styles.title}>DAILY LIST</Text>
                <SafeAreaView>
                    <FlatList
                        data={data_todo}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.no}
                        extraData={selectedNo}
                    />
                </SafeAreaView>
                <Text style={styles.info}>Finished todo will be showed with line-through</Text>
                <View style={styles.btn}>
                    <Button                    
                        title="+ Tambah Daily List"
                        color="#6606f2"
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'aqua',
    },

    title: {
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    image: {
        height: 200,
        width: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    btn: {
        width: 200,
        height: 50,
        marginTop: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    input: {
        position: 'relative',
        width: '80%',
        height: 35,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 5,
    },

    touch: {
        borderRadius: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderColor: 'white',
        backgroundColor: 'blue',
        width: '80%',
        marginTop: 20,
    },

    todo: {
        fontSize: 28,
        width: '80%',
        height: 40,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        textDecorationLine: 'none',
    },

    info: {
        marginTop: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default App;