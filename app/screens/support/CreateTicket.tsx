import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import TicketForm from "@/components/TicketForm"; // Adjust the path to your TicketForm component
import SubSectionHeader from "@/components/SubSectionHeader";

const CreateTicketScreen = () => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const modules = [
    { label: "Module *", value: "" },
    { label: "Billing", value: "billing" },
    { label: "Order", value: "tech_support" },
    { label: "Time", value: "general" },
  ];

  const renderForm = () => (
    <TicketForm
      selectedModule={selectedModule}
      setSelectedModule={setSelectedModule}
      open={open}
      setOpen={setOpen}
      modules={modules}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <SubSectionHeader title="Create new Ticket" showBack={true} />
      <FlatList
        data={[{}]}
        renderItem={renderForm}
        keyExtractor={() => "form"}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CreateTicketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9F5",
  },
});


// import React, { useState } from "react";
// import { FlatList, StyleSheet } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Stack } from "expo-router";
// import CreateTicketHeader from "@/components/CreateTicketHeader";
// import TicketForm from "@/components/TicketForm"; // Adjust the path to your TicketForm component

// const CreateTicketScreen = () => {
//   const [selectedModule, setSelectedModule] = useState<string | null>(null);
//   const [open, setOpen] = useState(false);

//   const modules = [
//     { label: "Module *", value: "" },
//     { label: "Billing", value: "billing" },
//     { label: "Order", value: "tech_support" },
//     { label: "Time", value: "general" },
//   ];

//   const renderForm = () => (
//     <TicketForm
//       selectedModule={selectedModule}
//       setSelectedModule={setSelectedModule}
//       open={open}
//       setOpen={setOpen}
//       modules={modules}
//     />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack.Screen options={{ headerShown: false }} />
//       <CreateTicketHeader />
//       <FlatList
//         data={[{}]}
//         renderItem={renderForm}
//         keyExtractor={() => "form"}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// };

// export default CreateTicketScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F8F9F5",
//   },
// });