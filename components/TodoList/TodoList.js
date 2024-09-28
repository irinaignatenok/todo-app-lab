import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Task from './Task/Task';
import styles from './styles';


export default function TodoList(props) {
    const { tasks, onPostDelete } = props;

    const Separator = () => {
        return <View style={{ height: 2, backgroundColor: '#8e3cd9' }} />
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}

                renderItem={({ item }) => (
                    <Task
                        task={item}
                        onPostDelete={onPostDelete}
                    />
                )}
            />
            {/* <ScrollView>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} onPostDelete={onPostDelete} />
                ))}
            </ScrollView> */}
        </View>

    )
}