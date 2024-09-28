import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import { AntDesign } from '@expo/vector-icons';
import uuid from 'react-uuid';
import { useState, useEffect } from 'react';

export default function App() {

  const Tab = createBottomTabNavigator();
  const [tasks, setTasks] = useState([]);
  let listTask = []
  /**
   * Handle Task add in the form
   * @param {*} taskDescription
   * @param {*} taskDone
   */
  const handleAddTask = async (taskDescription, taskDone) => {
    try {
      // Create a new task object
      const newTask = {
        id: uuid(),
        description: taskDescription,
        done: taskDone,
      };

      setTasks((prevTask) => {
        const updatedTasks = [...prevTask, newTask];
        console.log('Updated tasks:', updatedTasks);
        return updatedTasks;
      })
    }
    catch (error) {
      console.log('Error adding task:', error);

    }
  }

  const handlePostDelete = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    )
    setTasks(filteredTasks)
  }



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' >

          {(props) => (
            <TodoList
              {...props}
              tasks={tasks}
              onPostDelete={handlePostDelete}

            />
          )}
        </Tab.Screen>
        <Tab.Screen name='Form'
          options={{
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="addfile" size={size} color={color} />
            )
          }}
        >

          {(props) => (
            <Form
              {...props}
              onAddTask={handleAddTask}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
