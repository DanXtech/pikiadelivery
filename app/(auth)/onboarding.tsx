import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Onboarding1 from "../../assets/svg/onboarding1.svg"
import Onboarding2 from "../../assets/svg/onboarding2.svg"
import Onboarding3 from "../../assets/svg/onboarding3.svg"

const { width, height } = Dimensions.get('window');

const onboarding = [
   {
    id: '1',
    image: Onboarding1,
    title: 'Increase your revenue',
    description: 'Earn more money at Pikia when you make deliveries..',
  },
  {
    id: '2',
    image: Onboarding2,
    title: 'Secured platform',
    description: 'Pikia Platform is secured, your account and details are safe.',
  },
  {
    id: '3',
    image: Onboarding3,
    title: 'Fast and easy orders',
    description: 'Receive and complete orders efficiently with our platform.',
  },
];

const Onboarding = () => {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      router.replace('/(auth)/signup');
    } else {
      const nextIndex = activeIndex + 1;
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
      setActiveIndex(nextIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.midline}>
      <TouchableOpacity
        onPress={() => router.replace('/(auth)/signup')}
        style={styles.skipBtn}
        accessibilityLabel="Skip onboarding and go to sign-up"
        accessibilityRole="button"
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEnabled={false} // Disable manual swiping
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.slide}>
            <View style={styles.whiteContent}>
              <View style={styles.bottomContent}>
                <item.image width="70%" height={300} fill={"red"}  />
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
                <TouchableOpacity
                  onPress={handleNext}
                  style={styles.nextButton}
                  accessibilityLabel={isLastSlide ? 'Get Started button' : 'Next button'}
                  accessibilityRole="button"
                >
                  <Text style={styles.nextButtonText}>
                    {isLastSlide ? 'Get Started' : 'Next'}
                  </Text>
                </TouchableOpacity>
                <View style={styles.dotContainer}>
                  {onboarding.map((_, index) => (
                    <View
                      key={index}
                      style={index === activeIndex ? styles.activeDot : styles.dot}
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9F7ED',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  midline: {
    alignSelf: 'flex-end', 
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 30,  
  },
  
  skipBtn: {
    // position: 'absolute',
    // top: 20,
    // right: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
     borderRadius: 50, 
    backgroundColor: "#747373",
    // zIndex: 1,
  },
  skipText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  whiteContent: {
    // marginTop: 80, // Space from the top to ensure Skip button is not covered
    backgroundColor: '#FFFFFF',
    width: '100%',
    flex: 1,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    // paddingTop: 10, // Padding at the top for internal spacing
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomContent: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    paddingBottom: 10,
  },
  image: {
    width: '70%',
    height: 300,
    marginBottom: 10,
  },
  contentContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: '#858585',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
  },
  activeDot: {
    width: 8,
    height: 8,
    marginHorizontal: 4,
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
});


export default Onboarding;