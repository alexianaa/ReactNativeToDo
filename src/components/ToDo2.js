import React, { useState } from 'react';
import Task from './Task';
import {
    Button,
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableOpacity,
    Keyboard
} from 'react-native';

function App2() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        const temp = [...taskItems, task]
        setTaskItems(temp)
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={design.container} >

            <View style={design.tasksWrapper} >
                {/* Título */}
                <Text style={design.sectionTitle}>Tarefas</Text>

                <View style={design.items} >
                    {/* Onde as taks aparecem */}
                    {
                        taskItems.map((item, index) => { 
                            return (
                                <TouchableOpacity key={index}  onPress={() => completeTask(index)} >
                                    <Task key={index} text={item} /> 
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </View>

            {/* Funcionamento das tasks */}
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={design.writeTaskWrapper} >

                <TextInput style={design.input} placeholder={'Escreva sua tarefa'} value={task} onChangeText={text => setTask(text)} />

                <TouchableOpacity onPress={() => handleAddTask()} >
                    <View style={design.addWrapper} >
                        <Text style={design.addText} >+</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>

        </View>
    );
}

const design = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffedfa',
    },
    tasksWrapper: {
        paddingTop: 60,
        paddingHorizontal: 30,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 30
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#9123cc',
        borderWidth: 1,
        width: 270,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#9123cc',
        borderWidth: 1,
        marginLeft: -20
    },
    addText: {

    },
});

export default App2;