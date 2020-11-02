import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
import { Button, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key0"
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#F2F2F2',height:100 }}>
                
                <Content>
                    <Form>
                       
                        <Picker
                            mode="dropdown"
                            style={{ flex: 1 }}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="Edit" value="key0" />
                            <Picker.Item label="Modifier" value="key1" />
                            <Picker.Item label="Reporter" value="key2" />
                            <Picker.Item label="Annuler" value="key3" />
                            <Picker.Item label="Archiver" value="key4" />
                            <Picker.Item label="Supprimer" value="key4" />
                        </Picker>
                    </Form>
                </Content>
            </Container>
        );
    }
}