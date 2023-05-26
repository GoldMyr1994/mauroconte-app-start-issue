import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!</Text>
      <Text>Home!</Text>
      <Text />
      <Link href="/index">INDEX</Link>
    </View>
  );
}
