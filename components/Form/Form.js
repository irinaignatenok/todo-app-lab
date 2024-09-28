
import { Pressable, Switch, Text, TextInput, View, Button, ActivityIndicator } from "react-native";
import { useState } from 'react'
export default function Form({ navigation, onAddTask }) {

    const [taskDescription, setTaskDescription] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [savingData, setSavingData] = useState(false);

    const handleDescriptionChange = (value) => {
        setTaskDescription(value)
    }

    const handleStatusChange = (value) => {
        setTaskDone(value)
    }

    const handleAddPress = async () => {
        const validate = [];
        if (taskDescription === '') {
            validate.push('The description is required')
        } else {
            // setSavingData(false)
            onAddTask(taskDescription, taskDone)
            setTaskDescription('')
            setTaskDone(false)

            navigation.navigate('Home')
            // setSavingData(true)
        }
    }
    // if (savingData) {
    //     return (
    //         <View
    //         // style={styles.loadingContainer}
    //         >
    //             <ActivityIndicator size='large' color='green' />
    //             <Text
    //             //  style={styles.loadingText}
    //             >Task has been added</Text>

    //         </View>

    //     )
    // }
    return (
        <View>
            <TextInput
                placeholder="Enter a task description"
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
            />
            <View>
                <Pressable>
                    <Text>Complete</Text>
                </Pressable>
                <Switch
                    value={taskDone}
                    onValueChange={handleStatusChange}
                />
            </View>
            <Button title='Add' onPress={handleAddPress} />
        </View>

    )
}