import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput, 
    Image, 
    FlatList, 
    SafeAreaView, 
    Modal 
} from 'react-native';
import BackModle from '../assets/svg/Backsection.svg';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { CountryCode } from '../types/type';
import { COUNTRY_CODES } from '../data/db';

interface CountryCodeSelectorProps {
    visible: boolean;
    onClose: () => void;
    onSelectCountry: (country: CountryCode) => void;
}

const CountryCodeSelector: React.FC<CountryCodeSelectorProps> = ({ 
    visible, 
    onClose, 
    onSelectCountry 
}) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter countries based on search query
    const filteredCountries = COUNTRY_CODES.filter(
        (country) => 
            country.country.toLowerCase().includes(searchQuery.toLowerCase()) || 
            country.code.includes(searchQuery)
    );

    const renderCountryItem = ({ item }: { item: CountryCode }) => (
        <TouchableOpacity 
            style={styles.countryItem}
            onPress={() => {
                onSelectCountry(item);
                onClose();
            }}
        >
            <Image 
                source={{uri: `https://flagcdn.com/w320/${item.iso}.png`}} 
                style={styles.flagImage} 
            />
            <View style={styles.countryDetails}>
                <Text style={styles.countryName}>{item.country}</Text>
                <Text style={styles.countryCode}>{item.code}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={onClose}>
                            <BackModle width={16} height={16} />
                        </TouchableOpacity>
                        <Text style={styles.modalHeaderText}>Select Country</Text>
                    </View>

                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholder='Search country or code'
                            placeholderTextColor="#747373"
                        />
                    </View>

                    <FlatList
                        data={filteredCountries}
                        renderItem={renderCountryItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.code}
                        style={styles.countryList}
                    />
                </View>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    modalContent: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: wp('4%'),
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    modalHeaderText: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: '500',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#1B1B1B",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginVertical: 15,
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    countryList: {
        flex: 1,
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    flagImage: {
        width: 40,
        height: 30,
        marginRight: 15,
        borderRadius: 4,
    },
    countryDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    countryName: {
        fontSize: 16,
    },
    countryCode: {
        color: '#747373',
    },
});

export default CountryCodeSelector;