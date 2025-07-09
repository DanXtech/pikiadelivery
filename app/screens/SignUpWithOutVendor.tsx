import { Link, router, Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import Back from "../../assets/svg/white-back-arrow.svg";
import Dropdown from "../../assets/svg/dropdownPhone_input.svg";
import AddImageIcon from "../../assets/svg/image-add-01.svg";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { CountryCode } from '../../types/type';
import { COUNTRY_CODES } from '../../data/db';
import CountryCodeSelector from '../../components/CountryCodeSelector';
import Pikia from '@/assets/svg/pikia-logo-1.svg';
import AddClearPhoto from '@/assets/svg/addClearPhoto.svg';
import Storeverified from '@/assets/svg/store-verified-02.svg';
import Star1 from '@/assets/svg/Star 1.svg';
import Star2 from '@/assets/svg/Star 2.svg';



// Placeholder for decorative shapes around the success icon
const DecorativeShape = ({ style, shape }: { style: any, shape: string }) => (
    <View style={[styles.decorativeShape, style]}>
        <Text style={styles.shapeText}>{shape}</Text>
    </View>
);

const SignUpWithOutVendor = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [carColors, setCarColors] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [selectedCountry, setSelectedCountry] = useState<CountryCode>(COUNTRY_CODES[0]);
    const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
    const [showProfilePhotoScreen, setShowProfilePhotoScreen] = useState(false);
    const [showSuccessScreen, setShowSuccessScreen] = useState(false);
    const [photo, setPhoto] = useState<string | null>(null);

    const handleCountrySelect = (country: CountryCode) => {
        setSelectedCountry(country);
    };

    const handlePress = () => {
        router.push('/(root)/(tabs)');
    };

    const handleDoneAction = () => {
        setShowProfilePhotoScreen(true);
    };

    const handleFinish = () => {
        // Hide the profile photo screen and show the success screen
        setShowProfilePhotoScreen(false);
        setShowSuccessScreen(true);
    };

    const handleAddPhoto = () => {
        // Implement photo selection logic here (e.g., using react-native-image-picker)
        console.log('Add photo pressed');
    };

    // Automatically navigate to the home page after showing the success screen
    useEffect(() => {
        if (showSuccessScreen) {
            const timer = setTimeout(() => {
                setShowSuccessScreen(false);
                router.push('/(root)/(tabs)');
            }, 3000); // Show success screen for 3 seconds

            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }
    }, [showSuccessScreen]);

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                {/* Header onboarding */}
                <View style={styles.headerBg}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity style={styles.backButton} onPress={handlePress}>
                            <Back />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Driver onboarding</Text>
                    </View>
                </View>

                {/* Scrollable Content */}
                <ScrollView
                    contentContainerStyle={styles.scrollViewContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    {/* General Details */}
                    <View style={styles.detailsBox}>
                        <View style={styles.generalInput}>
                            <Text style={styles.generalText}>General Details</Text>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    value={name}
                                    onChangeText={setName}
                                    placeholder='Name'
                                    placeholderTextColor="#747373"
                                    autoCapitalize="none"
                                />
                                <TextInput
                                    style={styles.input}
                                    value={address}
                                    onChangeText={setAddress}
                                    placeholder='Address'
                                    placeholderTextColor="#747373"
                                    autoCapitalize="none"
                                />

                                <View style={styles.phoneInputContainer}>
                                    <TouchableOpacity
                                        style={styles.countryCodeButton}
                                        onPress={() => setIsCountryModalVisible(true)}
                                    >
                                        <Image
                                            source={{ uri: `https://flagcdn.com/w320/${selectedCountry.iso}.png` }}
                                            style={styles.selectedFlagImage}
                                        />
                                        <Dropdown width={14} height={14} style={{ marginRight: 3 }} />
                                        <Text style={styles.countryCodeText}>{selectedCountry.code}</Text>
                                        <Text style={styles.lineSpace}>|</Text>
                                    </TouchableOpacity>

                                    <TextInput
                                        style={styles.phoneInput}
                                        value={phoneNumber}
                                        onChangeText={setPhoneNumber}
                                        placeholderTextColor="#747373"
                                        keyboardType="phone-pad"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Upload your driver's license */}
                    <View style={styles.detailsBox}>
                        <Text style={styles.generalText}>Upload your drivers liscense</Text>
                        <View style={styles.uploadBox}>
                            <View style={styles.textBox}>
                                <Text style={{ color: "#E01515", fontWeight: "500" }}>* </Text>
                                <Text style={{ color: "#747373", fontWeight: "500" }}>(Upload clear images)</Text>
                            </View>

                            <View style={styles.uploadContainer}>
                                <TouchableOpacity style={styles.uploadButton}>
                                    <AddImageIcon />
                                    <Text style={styles.uploadButtonText}>Add Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.uploadButton}>
                                    <AddImageIcon />
                                    <Text style={styles.uploadButtonText}>Add more</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Car description */}
                    <View style={styles.detailsBox}>
                        <View style={styles.generalInput}>
                            <Text style={styles.generalText}>Car description</Text>
                            <View>
                                <TextInput
                                    style={styles.input}
                                    value={carBrand}
                                    onChangeText={setCarBrand}
                                    placeholder='Car Brand'
                                    placeholderTextColor="#747373"
                                    autoCapitalize="none"
                                />
                                <TextInput
                                    style={styles.input}
                                    value={carModel}
                                    onChangeText={setCarModel}
                                    placeholder='Car Model'
                                    placeholderTextColor="#747373"
                                    autoCapitalize="none"
                                />
                                <TextInput
                                    style={styles.input}
                                    value={carColors}
                                    onChangeText={setCarColors}
                                    placeholder='Car Colors'
                                    placeholderTextColor="#747373"
                                    autoCapitalize="none"
                                />
                                <TextInput
                                    style={styles.input}
                                    value={plateNumber}
                                    onChangeText={setPlateNumber}
                                    placeholder='Plate Number'
                                    placeholderTextColor="#747373"
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Upload car images */}
                    <View style={styles.detailsBox}>
                        <Text style={styles.generalText}>Upload car images</Text>
                        <View style={styles.uploadBox}>
                            <View style={styles.textBox}>
                                <Text style={{ color: "#E01515", fontWeight: "500" }}>* </Text>
                                <Text style={{ color: "#747373", fontWeight: "500" }}>(Upload front and side views of your car)</Text>
                            </View>

                            <View style={styles.uploadContainer}>
                                <TouchableOpacity style={styles.uploadButton}>
                                    <AddImageIcon />
                                    <Text style={styles.uploadButtonText}>Add Image</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.uploadButton}>
                                    <AddImageIcon />
                                    <Text style={styles.uploadButtonText}>Add more</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Submit Button to Show Full-Screen Overlay */}
                    <TouchableOpacity style={styles.detailsBox} onPress={handleDoneAction}>
                        <View style={styles.remindStyle}>
                            <Text style={styles.remindText}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                {/* Profile Photo Full-Screen Overlay */}
                {showProfilePhotoScreen && (
                    <View style={styles.fullScreenOverlay}>
                        <SafeAreaView style={styles.safeArea}>
                            <View style={styles.containerHeader}>
                                <Pikia />
                                <Text style={styles.logoTitle}>
                                    <Text style={styles.textLogo}>Driver</Text>
                                    <Text style={styles.dotText}>.</Text>
                                </Text>
                            </View>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Almost Done</Text>
                                <TouchableOpacity style={styles.photoContainer} onPress={handleAddPhoto}>
                                    {photo ? (
                                        <View style={styles.photoPlaceholder} />
                                    ) : (
                                        <>
                                            <View style={styles.photoPlaceholder}>
                                                <View style={styles.cameraIcon}>
                                                    {/* <Text style={styles.cameraIconText}>📷</Text> */}
                                                    <AddClearPhoto width={70} height={70}/>
                                                </View>
                                            </View>
                                            
                                        </>
                                    )}
                                </TouchableOpacity>
                                <Text style={styles.modalDescription}>Add a clear photo of yourself</Text>
                                <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
                                    <Text style={styles.finishButtonText}>Finish</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </View>
                )}

                {/* Success Full-Screen Overlay */}
                {showSuccessScreen && (
                    <View style={styles.fullScreenOverlay}>
                        <SafeAreaView style={styles.safeArea}>
                            <View style={styles.containerHeader}>
                                <Pikia />
                                <Text style={styles.logoTitle}>
                                    <Text style={styles.textLogo}>Driver</Text>
                                    <Text style={styles.dotText}>.</Text>
                                </Text>
                            </View>
                            <View style={styles.successContent}>
                                <View style={styles.successIconContainer}>      
                                    <Star2 style={styles.shapeTopLeft} />
                                    {/* <DecorativeShape style={styles.shapeBottomLeft} shape="✦" /> */}
                                    <Star1 style={styles.shapeTopRight} />
                                    <View style={styles.successIcon}>
                                       <Storeverified width={70} height={70}/>
                                    </View>
                                </View>
                                <Text style={styles.successTitle}>Successful!</Text>
                                <Text style={styles.successDescription}>
                                    You have been successfully registered at  Pikia Driver as we confirm your details
                                </Text>
                            </View>
                        </SafeAreaView>
                    </View>
                )}

                {/* Country Code Selector Modal */}
                <CountryCodeSelector
                    visible={isCountryModalVisible}
                    onClose={() => setIsCountryModalVisible(false)}
                    onSelectCountry={handleCountrySelect}
                />
            </View>
        </>
    );
};

export default SignUpWithOutVendor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerBg: {
        backgroundColor: "#22B573",
        height: hp('12%'),
        justifyContent: 'flex-end',
        zIndex: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: hp('1%'),
        paddingLeft: wp('4%'),
        paddingBottom: hp('1%'),
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: hp('5%'),
    },
    backButton: {
        marginRight: wp('3%'),
    },
    headerText: {
        color: 'white',
        fontSize: wp('5.64%'),
        fontWeight: '500',
    },
    detailsBox: {
        paddingHorizontal: wp('4%'),
    },
    input: {
        borderColor: "#1B1B1B",
        borderWidth: 1,
        borderRadius: 20,
        padding: 14,
        marginTop: wp('7%'),
        marginBottom: 12,
        fontSize: 16,
        height: 54,
    },
    generalInput: {
        paddingVertical: wp('10%')
    },
    generalText: {
        fontSize: wp("4.40"),
        fontWeight: "500",
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: wp('7%'),
        borderColor: "#1B1B1B",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 12,
    },
    countryCodeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        padding: 10,
        marginRight: 10,
        width: wp('25%'),
    },
    selectedFlagImage: {
        width: 25,
        height: 15,
        marginRight: 3,
    },
    countryCodeText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#747373"
    },
    lineSpace: {
        marginLeft: 3,
        height: 30,
        fontSize: 20,
        color: "#747373"
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        height: 54,
        paddingRight: 10
    },
    uploadBox: {
    },
    textBox: {
        paddingVertical: wp("2%"),
        flexDirection: "row",
    },
    uploadContainer: {
        flexDirection: 'row',
        gap: 12,
        marginVertical: 10,
    },
    uploadButton: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#22B573',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadButtonText: {
        color: '#22B573',
        marginTop: 8,
        fontSize: 14,
    },
    remindStyle: {
        backgroundColor: '#22B573',
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 10,
        flex: 1,
        alignItems: "center"
    },
    remindText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'light',
    },
    // Full-Screen Overlay Styles (Profile Photo)
    fullScreenOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 1000,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerHeader: {
        paddingBottom: hp('3%'),
        paddingTop: hp('2%'),
        paddingHorizontal: wp('4%'),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    logoTitle: {
        color: '#22B573',
    },
    textLogo: {
        fontSize: wp('4.5%'),
        fontWeight: '400',
    },
    dotText: {
        fontSize: wp('5%'),
        fontWeight: '700',
    },
    modalContent: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: wp('4%'),
        paddingBottom: hp('2%'),
    },
    modalTitle: {
        fontSize: wp('6%'),
        fontWeight: '700',
        color: '#22B573',
        marginTop: hp('5%'),
        marginBottom: hp('5%'),
    },
    photoContainer: {
        position: 'relative',
        marginBottom: hp('3%'),
    },
    photoPlaceholder: {
        width: wp('40%'),
        height: wp('40%'),
        borderRadius: wp('20%'),
        borderWidth: 2,
        borderColor: '#747373',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    cameraIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIconText: {
        fontSize: wp('8%'),
        color: 'white',
    },
    modalDescription: {
        fontSize: wp('4.5%'),
        color: '#000000',
        marginBottom: hp('5%'),
    },
    finishButton: {
        backgroundColor: '#22B573',
        width: '100%',
        paddingVertical: hp('2%'),
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        bottom: hp('2%'),
    },
    finishButtonText: {
        color: 'white',
        fontSize: wp('4.5%'),
        fontWeight: '500',
    },
    // Success Screen Styles
    successContent: {
        alignItems: 'center',
        paddingTop: wp('10%'),
        justifyContent: 'center',
    },
    successIconContainer: {
        position: 'relative',
        marginBottom: hp('5%'),
    },
    successIcon: {
        width: wp('40%'),
        height: wp('40%'),
        borderRadius: wp('20%'),
        backgroundColor: '#22B573',
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    decorativeShape: {
        position: 'absolute',
    },
    shapeTopLeft: {
        bottom: -wp('55%'),
        left: -wp('5%'),
        // transform: [{ rotate: '45deg' }],
    },
    shapeTopRight: {
        top: wp('15%'),
        right: -wp('45%'),
    },
    shapeText: {
        fontSize: wp('5%'),
        color: '#A9A9A9',
    },
    successTitle: {
        fontSize: wp('6%'),
        fontWeight: '500',
        color: '#22B573',
        marginBottom: hp('2%'),
    },
    successDescription: {
        fontSize: wp('4.5%'),
        color: '#000',
        textAlign: 'center',
        paddingHorizontal: wp('5%'),
    },
});


