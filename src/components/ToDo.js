import React,{useState} from "react";
import {
Text, 
SafeAreaView, 
TextInput,
TouchableWithoutFeedback,
FlatList,
StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
    container: {},
    title: {},
    field: {},
    button: {},
    buttonText: {},
    item: {},
    form: {},
});

const ToDo = () => {
    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([]);

    const handleAdd = () => {
        updateTasks([...tasks, task]);
        updateTask('');
    }

    const handleRenderTask = ({item}) => <Text>{item}</Text>;

    return(
        <SafeAreaView>

            <View style={styles.container} >

                <Text style={styles.title} >To-Do List</Text>
                    <View style={styles.form} >
                        <TextInput 
                        style={styles.field} 
                        autoCapitalize="none" 
                        autoComplete="off" 
                        autoCorrect={false} 
                        onChangeText={text => updateTask(text) } 
                        value={task} />

                        <TouchableWithoutFeedback onPress={handleAdd} >
                            <View style={styles.button} > 
                                <Text style={styles.buttonText} >Add</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                <FlatList 
                data={tasks} 
                keyExtractor={item => item} 
                renderItem={handleRenderTask} 
                />
            </View>

        </SafeAreaView>
    );

}

export default ToDo;