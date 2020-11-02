import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class Picker_Type extends Component {
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
                <Form style={{ borderWidth: 1, flex: 1, marginLeft: 15,marginRight:15,marginTop:10}}>
                        <Picker
                        
                            mode="dropdown"
                            itemTextStyle={{ color: '#788ad2' }}
                            style={{  height: 37,marginLeft: 30, width: 300, borderWidth:1,borderColor:"#000"}}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="CODIR" value="key0" />
                            <Picker.Item label="Commerciale" value="key1" />
                            <Picker.Item label="Conseil d'administration" value="key2" />
                            <Picker.Item label="Export" value="key3" />
                            <Picker.Item label="Projet" value="key4" />
                            <Picker.Item label="Perfermance Entrepot" value="key5" />
                        </Picker>
                    </Form>
                </Content>
            
        );
    }
}