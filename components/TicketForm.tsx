import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import DropdownArrow from "../components/DropdownArrow"; // Adjust the path to your SVG component
import GenerateTicketicon from "../assets/svg/generate_ticket_icon.svg";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the "+" icon
import { router } from "expo-router";

// Define the interface for the props
interface TicketFormProps {
  selectedModule: string | null;
  setSelectedModule: React.Dispatch<React.SetStateAction<string | null>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modules: Array<{ label: string; value: string }>;
}

// Explicitly type the component using React.FC and the TicketFormProps interface
const TicketForm: React.FC<TicketFormProps> = ({ selectedModule, setSelectedModule, open, setOpen, modules }) => {

    const handleNext = () => {
        router.push('/screens/TicketGeneratedModal')
    }
  return (
    <>
      {/* Icon and Title */}
      <View style={styles.topSection}>
        <GenerateTicketicon style={styles.icon} />
        <Text style={styles.mainTitle}>Generate New Ticket</Text>
        <Text style={styles.subtitle}>Define your problem here to generate</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        {/* Dropdown for Module Selection */}
        <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={selectedModule}
            items={modules}
            setOpen={setOpen}
            setValue={setSelectedModule}
            setItems={() => {}} // Still required in some versions
            placeholder="Module *"
            style={styles.picker}
            dropDownContainerStyle={styles.dropDownContainer}
            ArrowUpIconComponent={() => <DropdownArrow />}
            ArrowDownIconComponent={() => <DropdownArrow />}
            zIndex={1000}
            zIndexInverse={1000}
          />

          {/* <View>
            <Text style={styles.aesthetic}>*</Text>
          </View> */}
        </View>

        {/* Text Inputs */}
        <TextInput style={styles.input} placeholder="Questions" />
        <TextInput style={styles.input} placeholder="Subject" />

        {/* Textarea for Description with Icon */}
        <View style={styles.textareaContainer}>
          <Ionicons name="add" size={20} color="#000" style={styles.iconLeft} />
          <TextInput
            style={styles.textarea}
            placeholder="Description"
            multiline={true}
            numberOfLines={4} // Sets a default height for the textarea
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Generate Ticket</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TicketForm;

const styles = StyleSheet.create({
  topSection: {
    alignItems: "center",
    marginTop: 30,
  },
  icon: {
    width: 60,
    height: 60,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 15,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#1B1B1B",
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  picker: {
    height: 50,
    borderWidth: 0, // Remove default border
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: "#1B1B1B",
    borderRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#1B1B1B",
    borderRadius: 20,
    padding: 15,
    backgroundColor: "#fff",
    fontSize: 14,
    marginBottom: 15,
  },
  textareaContainer: {
    borderWidth: 1,
    borderColor: "#1B1B1B",
    borderRadius: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    padding: 10,
  },
  iconLeft: {
    position: "absolute",
    bottom: 15,
    left: 10,
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 1,
  },
  textarea: {
    flex: 1,
    fontSize: 14,
    textAlignVertical: "top", // Ensures text starts at the top
    height: 120, // Sets a proper height for the textarea (adjust as needed)
  },
  button: {
    backgroundColor: "#20B964",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
// import DropdownArrow from "../components/DropdownArrow"; // Adjust the path to your SVG component
// import GenerateTicketicon from "../assets/svg/generate_ticket_icon.svg";
// import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for the "+" icon
// import TicketGeneratedModal from "../app/screens/TicketGeneratedModal"; // Import the new modal component

// // Define the interface for the props
// interface TicketFormProps {
//   selectedModule: string | null;
//   setSelectedModule: React.Dispatch<React.SetStateAction<string | null>>;
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   modules: Array<{ label: string; value: string }>;
// }

// const TicketForm: React.FC<TicketFormProps> = ({ selectedModule, setSelectedModule, open, setOpen, modules }) => {
//   const [modalVisible, setModalVisible] = useState(false);

//   const handleGenerateTicket = () => {
//     // Simulate ticket generation (replace with actual API call if needed)
//     setModalVisible(true);
//   };

//   return (
//     <>
//       {/* Modal for Ticket Generated */}
//       <TicketGeneratedModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//       />

//       {/* Icon and Title */}
//       <View style={styles.topSection}>
//         <GenerateTicketicon style={styles.icon} />
//         <Text style={styles.mainTitle}>Generate New Ticket</Text>
//         <Text style={styles.subtitle}>Define your problem here to generate</Text>
//       </View>

//       {/* Input Fields */}
//       <View style={styles.form}>
//         {/* Dropdown for Module Selection */}
//         <View style={styles.dropdownContainer}>
//           <DropDownPicker
//             open={open}
//             value={selectedModule}
//             items={modules}
//             setOpen={setOpen}
//             setValue={setSelectedModule}
//             setItems={() => {}} // Still required in some versions
//             placeholder="Module *"
//             placeholderStyle={styles.placeholderStyle}
//             style={[styles.picker, open && styles.pickerFocused]}
//             dropDownContainerStyle={styles.dropDownContainer}
//             ArrowUpIconComponent={() => <DropdownArrow />}
//             ArrowDownIconComponent={() => <DropdownArrow />}
//             zIndex={1000}
//             zIndexInverse={1000}
//           />
//         </View>

//         {/* Text Inputs */}
//         <TextInput style={styles.input} placeholder="Questions" />
//         <TextInput style={styles.input} placeholder="Subject" />

//         {/* Textarea for Description with Icon */}
//         <View style={styles.textareaContainer}>
//           <Ionicons name="add" size={20} color="#000" style={styles.iconLeft} />
//           <TextInput
//             style={styles.textarea}
//             placeholder="Description"
//             multiline={true}
//             numberOfLines={4}
//           />
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.button} onPress={handleGenerateTicket}>
//           <Text style={styles.buttonText}>Generate Ticket</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// };

// export default TicketForm;

// const styles = StyleSheet.create({
//   topSection: {
//     alignItems: "center",
//     marginTop: 30,
//   },
//   icon: {
//     width: 60,
//     height: 60,
//   },
//   mainTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: "#777",
//   },
//   form: {
//     marginTop: 30,
//     paddingHorizontal: 15,
//   },
//   dropdownContainer: {
//     borderWidth: 1,
//     borderColor: "#1B1B1B",
//     borderRadius: 20,
//     paddingHorizontal: 10,
//     backgroundColor: "#fff",
//     marginBottom: 15,
//   },
//   placeholderStyle: {
//     color: "#FF0000",
//   },
//   picker: {
//     height: 50,
//     borderWidth: 0,
//   },
//   pickerFocused: {
//     borderColor: "#2777FF",
//     borderWidth: 2,
//   },
//   dropDownContainer: {
//     borderWidth: 1,
//     borderColor: "#1B1B1B",
//     borderRadius: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#1B1B1B",
//     borderRadius: 20,
//     padding: 15,
//     backgroundColor: "#fff",
//     fontSize: 14,
//     marginBottom: 15,
//   },
//   textareaContainer: {
//     borderWidth: 1,
//     borderColor: "#1B1B1B",
//     borderRadius: 20,
//     backgroundColor: "#fff",
//     flexDirection: "row",
//     alignItems: "flex-start",
//     marginBottom: 15,
//     padding: 10,
//   },
//   iconLeft: {
//     position: "absolute",
//     bottom: 15,
//     left: 10,
//     borderColor: "black",
//     borderRadius: 20,
//     borderWidth: 1,
//   },
//   textarea: {
//     flex: 1,
//     fontSize: 14,
//     textAlignVertical: "top",
//     height: 120,
//   },
//   button: {
//     backgroundColor: "#20B964",
//     paddingVertical: 15,
//     borderRadius: 10,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });