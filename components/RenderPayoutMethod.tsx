import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Svg, { SvgProps } from 'react-native-svg'; // Import Svg for type safety

type Props = {
    item: { id: string; name: string; icon: React.FC<SvgProps> }; // Type for SVG component
    selectedMethod: string;
    onSelect: (method: string) => void;
};

const RenderPayoutMethod = ({ item, selectedMethod, onSelect }: Props) => {
    const IconComponent = item.icon; // Assign to a variable to use as a component

    return (
        <TouchableOpacity
            style={styles.methodContainer}
            onPress={() => onSelect(item.name)}
        >
            <View>
                <View style={styles.radioContainer}>
                    <View
                        style={[
                            styles.radioCircle,
                            selectedMethod === item.name && styles.selectedRadioCircle,
                        ]}
                    />
                </View>
            </View>

            <View style={[styles.optionTitle, 
                selectedMethod == item.name && styles.hoverOption
            ]}>
                <IconComponent width={24} height={24} style={styles.icon} />
                <Text style={styles.methodText}>{item.name}</Text>
            </View>


        </TouchableOpacity>
    );
};

export default RenderPayoutMethod;

const styles = StyleSheet.create({
    methodContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderRadius: 10,
        marginBottom: 15,
    },
    radioContainer: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#D9D9D9',
    },
    radioCircle: {
        width: 15,
        height: 15,
        borderRadius: 10,
        padding: 5,
    },
    selectedRadioCircle: {
        backgroundColor: '#22B573',
    },
    hoverOption: {
        backgroundColor: '#E9F7ED',
    },
    optionTitle: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', // Center vertically
        padding: 15, // Add padding for better spacing
        borderRadius: 20, 
    },
    icon: {
        marginRight: 15, 
    },
    methodText: {
        fontSize: 16,
        fontWeight: '500',
    },
});
