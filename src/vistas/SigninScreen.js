import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/logo.png';


const SignInScreen = () => {
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Text>Sign In Screen</Text>
            <Image 
            source={Logo} 
            style={[styles.logo, {height: height *0.3}]} 
            resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignImems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen