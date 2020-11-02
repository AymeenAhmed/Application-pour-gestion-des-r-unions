import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Menu, {
    MenuProvider,
    MenuTrigger,
    MenuOptions,
    MenuOption,
    renderers,
} from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';
import Point_à_discuter_Page from '.././pages/Point_à_discuter_Page';
const Nav_Modifier_function = (props) => {
    const navigation = useNavigation();
    return (

        <TouchableOpacity onPress={() => navigation.navigate('Point_à_discuter_Page')}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require('.././img/modifier.png')}
                    style={{ width: 15, height: 15, margin: 13, marginLeft: 20 }}
                />
                <Text style={{ fontSize: 18, marginLeft: 15, marginTop: 8 }}>
                    Modifier
                                    </Text>
            </View>
            
            
        </TouchableOpacity>

    );
}

let unique = 0;
const { SlideInMenu } = renderers;

export default class Liste_Point_à_discuter extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = { log: [] };
    }

    selectNumber(value) {
        this.addLog(`selecting number: ${value}`);
    }

    selectOptionType(value) {
        const v = typeof value === 'object' ? JSON.stringify(value) : value;
        this.addLog(`option de sélection: ${v}`);
        return value !== 'Do not close';
    }

    addLog(value) {
        this.setState({
            log: [...this.state.log, {
                value,
                id: ++unique,
            }],
        });
    }

    toggleHighlight(id) {
        const log = this.state.log.map(l => {
            if (l.id === id) {
                return Object.assign({}, l, { highlighted: !l.highlighted });
            }
            return l;
        })
        this.setState({ log });
    }

    deleteLogItem(id) {
        const log = this.state.log.filter(l => l.id !== id);
        this.setState({ log });
    }

    render() {
        return (
            <MenuProvider style={{ flex: 1 }}>
                <View style={styles.container}>

                    <View style={styles.topbar}>

                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: "row", padding: 5 }}>
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f44336' }}>    20 min</Text>
                                    <Text>De 09h00 à 09h20</Text>
                                </View>
                                <View>
                                    <Text style={{ marginLeft: 25, fontSize: 17, margin: 2, fontWeight: 'bold' }}>
                                        Test 1 point à discuter
                        </Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ marginLeft: 25, fontSize: 14 }}>
                                            Animé par Khalil Ben Halima
                                </Text>
                                       
                                    </View>
                                </View>
                                

                            </View>
                        </View>
                        <Menu>
                            <MenuTrigger
                                onAlternativeAction={() => this.addLog('trigger longpressed')}
                                style={styles.trigger}>
                                <View style={{ marginRIght: 15 }}>
                                    <Image
                                        source={require('.././img/dots.png')}
                                        style={{ width: 25, height: 25, margin: 10}}
                                    />
                                </View>
                            </MenuTrigger>
                            <MenuOptions customStyles={{ optionText: styles.text }} >
                                
                                <Nav_Modifier_function/>
                                
                                <View style={{ flexDirection: "row", marginTop: 0 }}>
                                    <Image
                                        source={require('.././img/Supprimer.png')}
                                        style={{ width: 15, height: 15, margin: 13, marginLeft: 20 }}
                                    />
                                    <MenuOption value="Supprimer" text='  Supprimer' />
                                </View>


                            </MenuOptions>
                        </Menu>
                    </View>

                    <ScrollView style={styles.logView}>
                        {this.state.log.map((l, i) => {
                            const wrapperStyle = { backgroundColor: i % 2 ? 'white' : 'whitesmoke' };
                            const textStyle = { color: l.highlighted ? 'red' : 'gray' };
                            return (
                                <View style={[styles.logItem, wrapperStyle]} key={l.id}>
                                    <Text style={[styles.text, textStyle]}>{l.value}</Text>
                                    <View style={{ flex: 1 }}></View>
                                    <Menu>
                                        <MenuTrigger text='edit' customStyles={{ triggerText: styles.text }} />
                                        <MenuOptions customStyles={{ optionText: styles.text }}>
                                            <MenuOption onSelect={() => this.toggleHighlight(l.id)} text={l.highlighted ? 'Unhighlight' : 'Highlight'} />
                                            <MenuOption onSelect={() => this.deleteLogItem(l.id)} text='Delete' />
                                        </MenuOptions>
                                    </Menu>
                                </View>
                            );
                        })}
                    </ScrollView>

                </View>
            </MenuProvider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2F2F2',
    },
    topbar: {
        flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        paddingTop: 5,
    },
    trigger: {
        padding: 5,
        margin: 5,
        marginRight:-3,
    },
    triggerText: {
        color: 'white',
    },
    disabled: {
        color: '#ccc',
    },
    divider: {
        marginVertical: 5,
        marginHorizontal: 2,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    logView: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 35,
    },
    logItem: {
        flexDirection: 'row',
        padding: 8,
        
    },
    slideInOption: {
        padding: 5,
        
    },
    text: {
        fontSize: 18,
      
    },
});