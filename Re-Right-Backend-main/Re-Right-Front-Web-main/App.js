import ReRightApp from './src/ReRightApp';
import React, {useEffect, useState} from 'react';
import './config/global';
import { useColorScheme} from 'react-native';


const App = () => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === "dark");
    useEffect(() => {
      setIsDark(colorScheme==="dark");
      global.isDarkModeEnabled = isDark? true : false;
        }, [colorScheme]);
  return (
    <ReRightApp />
  );
}
export default App;