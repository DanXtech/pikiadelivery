import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link, Stack } from 'expo-router';
import AuthLogoHeader from '@/components/AuthLogoHeader';
import InputField from '@/components/InputField';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import Pikia from '@/assets/svg/pikia-logo-1.svg';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSignup = () => {
    if (!isEmailValid) {
      setError('Invalid email address');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // Add signup logic here (e.g., API call)
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false} // Hide the scrollbar
      >
        {/* Header */}
        <View style={styles.containerHeader}>
          <Pikia />
          <Text style={styles.logoTitle}>
            <Text style={styles.textLogo}>Driver</Text>
            <Text style={styles.dotText}>.</Text>
          </Text>
        </View>

        <View style={styles.backButton}>
          <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(300)}>
            <Link href="/(auth)/onboarding">
              <Entypo name="chevron-thin-left" size={18} color="#000" />
            </Link> Sign up
          </Animated.Text>
        </View>

        <View style={styles.formContainer}>
          <Animated.View entering={FadeInDown.delay(300).duration(500)}>
            <Animated.Text style={styles.inputTile}>Email</Animated.Text>
            <InputField
              placeholder="Email Address"
              placeholderTextColor={Colors.lightblack}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(700).duration(500)}>
            <Text style={styles.inputTile}>Password</Text>
            <InputField
              placeholder="Password"
              placeholderTextColor={Colors.lightblack}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
            <Text style={styles.inputTile}>Re-enter Password</Text>
            <InputField
              placeholder="Confirm Password"
              placeholderTextColor={Colors.lightblack}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1300).duration(500)}>
            <Button title="Sign Up" onPress={handleSignup} buttonStyle={styles.signupButton} />
          </Animated.View>

          <Animated.View style={styles.optionLine} entering={FadeInDown.delay(1700).duration(500)}>
            <Text style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <Text style={styles.line} />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(1700).duration(500)}>
            <Button
              title="Continue with Apple"
              icon={<Icon name="apple" size={20} color="white" style={{ marginRight: 5 }} />}
              buttonStyle={styles.socialButtonG}
              titleStyle={styles.socialButtonTextG}
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(2000).duration(500)}>
            <Button
              title="Continue with Gmail"
              icon={<Ionicons name="mail-outline" size={20} color={Colors.black} style={{ marginRight: 5 }} />}
              buttonStyle={styles.socialButtonM}
              titleStyle={styles.socialButtonText}
            />
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(2300).duration(500)}>
            <TouchableOpacity>
              <Link href="/signin" asChild>
                <Text style={styles.loginText}>
                  Have an account? <Text style={styles.text}>Login</Text>
                </Text>
              </Link>
            </TouchableOpacity>
          </Animated.View>

       
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'none',
  },
  logoTitle: {
    color: Colors.btnColor,
  },
  textLogo: {
    fontSize: 16,
  },
  dotText: {
    fontSize: 20,
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 50,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 24,
    gap: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  formContainer: {
    paddingBottom: 30,
  },
  inputTile: {
    paddingBottom: 10,
  },
  signupButton: {
    backgroundColor: Colors.btnColor,
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 20,
  },
  optionLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 10,
  },
  orText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666666',
  },
  socialButtonG: {
    backgroundColor: Colors.secondColor,
    paddingVertical: 15,
    borderRadius: 20,
    marginVertical: 10,
  },
  socialButtonTextG: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'light',
  },
  socialButtonM: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.thirdColor,
  },
  socialButtonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'light',
  },
  loginText: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'light',
  },
  text: {
    color: Colors.btnColor,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignupScreen;