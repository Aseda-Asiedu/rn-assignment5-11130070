import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext, useState } from 'react'
import { color } from './theme';
import { ThemeContext } from './ThemeContext';

export default function Settings() {
    const { theme, changeTheme } = useContext(ThemeContext);
    let activeTheme = color[theme.mode];

    const [isActive, setIsActive] = useState(theme.mode === 'dark' );
    const handleSwitch = () => {
        changeTheme();
        setIsActive((previousState) => !previousState);
    }

  return (
    <View style={[styles.main, { backgroundColor: activeTheme.primary }]}>
        <View style={styles.container}>
            <Text style={[styles.heading, { color: activeTheme.secondary}]}>Settings </Text>

            <ScrollView>
                <View style={{marginTop: 80}}>
                    <TouchableOpacity>
                    <View style={styles.colALign}>
                        <View style={styles.rowAlign}>
                            <Text style={{color: activeTheme.secondary, fontSize: 24}}>Language</Text>
                            <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.divisor} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.colALign}>
                        <View style={styles.rowAlign}>
                            <Text style={{color: activeTheme.secondary, fontSize: 24}}>My Profile</Text>
                            <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.divisor} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.colALign}>
                        <View style={styles.rowAlign}>
                            <Text style={{color: activeTheme.secondary, fontSize: 24}}>Contact Us</Text>
                            <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.divisor} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.colALign}>
                        <View style={styles.rowAlign}>
                            <Text style={{color: activeTheme.secondary, fontSize: 24}}>Change  Password</Text>
                            <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.divisor} />
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.colALign}>
                        <View style={styles.rowAlign}>
                            <Text style={{color: activeTheme.secondary, fontSize: 24}}>Privacy Policy</Text>
                            <Icon name="chevron-forward" size={25} style={styles.iconStyle}/>
                        </View>
                        <View style={styles.divisor} />
                    </View>
                    </TouchableOpacity>
                </View>

                <View style={[styles.rowAlign, {marginTop: 40}]}>
                    <Text style={{color: activeTheme.secondary, fontSize: 24, fontWeight: 'bold'}}>
                        Theme
                    </Text>
                    <Switch 
                    value={isActive}
                    onValueChange={handleSwitch}
                    // backgroundColor={activeTheme.primary}
                    />
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
  container: {
    flex: 1,
    marginTop: 100
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rowAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  colALign: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  divisor: {
    flex: 1,
    height: 2,
    backgroundColor: '#AFB0B6',
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  iconStyle: {
    color: '#7e848d',
    marginTop: 10,
  }
});
