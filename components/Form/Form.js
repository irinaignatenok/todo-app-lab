
import { Pressable, Switch, Text, TextInput, View, Button, ActivityIndicator } from "react-native";
import { useState } from 'react';
import styles from './styles';

export default function Form({ navigation, onAddTask }) {

    const [taskDescription, setTaskDescription] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [savingData, setSavingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);

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
        }
        if (validate.length > 0) {
            setErrorMessage(validate)
        }
        else {
            // setSavingData(false)
            onAddTask(taskDescription, taskDone)
            setTaskDescription('')
            setTaskDone(false);
            setErrorMessage([]);

            navigation.navigate('Home')
            // setSavingData(true)
        }
    }

    const handleLabelPressed = () => {
        setTaskDone(!taskDone)
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
        <View style={styles.container}>
            {errorMessage.length > 0 && (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorTitle}>Attention:</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
            )}
            <TextInput
                style={styles.textInput}
                placeholder="Enter a task description"
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
            />
            <View style={styles.switch}>
                <Pressable onPress={handleLabelPressed}>
                    <Text style={styles.switchText}>Completed:</Text>
                </Pressable>
                <Switch
                    value={taskDone}
                    onValueChange={handleStatusChange}
                />
            </View>
            <Button title='Add' onPress={handleAddPress} style={styles.btn} />
        </View>

    )
}