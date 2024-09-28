import { ScrollView, Text, View } from 'react-native';
import Task from './Task/Task'


export default function TodoList(props) {
    const { tasks, onPostDelete } = props;
    return (
        <View>
            <ScrollView>
                {tasks.map((task, index) => (
                    <Task key={index} task={task} onPostDelete={onPostDelete} />
                ))}
            </ScrollView>
        </View>

    )
}