import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class Picker_Emoloyé extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (


            <Content>
                <Form style={{ borderWidth: 1, flex: 1, marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                    <Picker

                        mode="dropdown"
                        itemTextStyle={{ color: '#788ad2' }}
                        style={{ height: 37, marginLeft: 30, width: 300, borderWidth: 1, borderColor: "#000" }}
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                    >
                        <Picker.Item label="Choisir.." value="key0" />
                        <Picker.Item label="Abir Mahfoudhi" value="key1" />
                        <Picker.Item label="Achraf Ben Omrane" value="key2" />
                        <Picker.Item label="Amel Ouerfelli" value="key3" />
                        <Picker.Item label="Aymen Ahmed" value="key4" />
                        <Picker.Item label="Ayoub Kallel" value="key5" />
                        <Picker.Item label="Bilel Karray" value="key6" />
                        <Picker.Item label="Claude Fermon" value="key7" />
                        <Picker.Item label="Fakher Chihawi" value="key8" />
                        <Picker.Item label="Ghada Rhouma" value="key9" />
                        <Picker.Item label="Khalil Ben Halima" value="key10" />
                        <Picker.Item label="Maram Amri" value="key11" />
                        <Picker.Item label="Mohamed Bellakhal" value="key12" />
                        <Picker.Item label="Moufid Karray" value="key13" />
                        <Picker.Item label="Oumayma Mabrouk" value="key14" />
                        <Picker.Item label="Rihab Chaabene" value="key15" />
                        <Picker.Item label="Sofien Ltaief" value="key16" />
                        <Picker.Item label="Steven Leblanc" value="key17" />
                        <Picker.Item label="Zeineb Ben Salah" value="key18" />
                        <Picker.Item label="Zoubaida Driss" value="key19" />
                    </Picker>
                </Form>
            </Content>

        );
    }
}