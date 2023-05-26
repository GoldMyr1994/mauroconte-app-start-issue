import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!</Text>
      <Text>Index!</Text>
      <Text />
      <Link href="/home">HOME</Link>
    </View>
  );
}
