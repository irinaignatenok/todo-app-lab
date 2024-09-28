import { View, Text, Pressable, Modal, Switch, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function Task(props) {
    const { task, onPostDelete } = props;
    const [showModal, setShowModal] = useState(false)
    const [taskDone, setTaskDone] = useState(props.task.done);
    const [savingData, setSavingData] = useState(false);

    const handleStatusChange = (value) => {
        setTaskDone(value)
    }
    const handleDeletePress = () => {
        Alert.alert(
            'Delete Post',
            `This message will delete the task ${props.description}. \n\n Are you sure?`,
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        onPostDelete(task.id);
                        handleModalToggle();
                    }

                },
                { text: 'No' }
            ]
        )
    }
    const handleModalToggle = () => {
        setShowModal(!showModal);
    };

    return (
        <View style={styles.container}>
            <Pressable>
                <View >
                    <Text style={styles.title}>{props.task.description}</Text>
                    <View>
                        <Text style={styles.description}>Status: {taskDone ? 'Due' : 'Done'}</Text>
                    </View>
                    <View style={styles.descriptionBlock}>
                        <Switch
                            value={taskDone}
                            onValueChange={handleStatusChange}
                        />
                        <AntDesign.Button
                            // style={styles.deletreBtn}
                            name="delete"
                            size={24}
                            color="#cc0000"
                            backgroundColor='transparent'
                            underlayColor='#ffdddd'// cnange background color of the buttonon
                            onPress={handleDeletePress}
                        >Delete</AntDesign.Button>
                    </View>

                </View>
            </Pressable>
        </View>
    )

}