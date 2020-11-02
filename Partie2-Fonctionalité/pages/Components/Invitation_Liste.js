import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View, TextInput, SafeAreaView, ScrollView } from "react-native";

const CheckBox_Invitation = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <View>
            <View>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={{ borderColor: '#48A5F3' }}

                />
            </View>

        </View>
    );
};

class Invitation_Liste extends React.Component {

    render() {

        return (
            <View style={{ flex: 1, marginTop: 5}}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 30 }}>

                    <View style={{ flex: 1, marginLeft: 5, marginTop: 10}}>
                        <CheckBox_Invitation />

                    </View>
                    <View style={{ flex: 4, marginLeft: 10, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{ fontWeight:"bold"}}>
                            Khalil B.H
    </Text>
                        <Text style={{ color: "gray", alignItems: "center", justifyContent: "center", marginLeft: 5}}>
                            React Native Developer
    </Text>
                    </View>
                    <View style={{ flex: 3.3, marginLeft: 28, marginTop: 10}}>
                        <Text style={{ fontWeight: "bold" }}>
                            Developer
    </Text>
                    </View>
                    <View style={{ flex: 5,marginLeft: 30}}>
                        <Text style={{ fontWeight: "bold" }}>
                            khalil.benhalima@supcom.tn
    </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Invitation_Liste 